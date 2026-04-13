import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import api from '@/lib/api';

export interface SearchFilters {
  shape: string[];
  min_carat: number | '';
  max_carat: number | '';
  min_price: number | '';
  max_price: number | '';
  color: string[];
  clarity: string[];
  cut: string[];
}

export interface SearchState {
  filters: SearchFilters;
  results: any[];
  total: number;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
}

export interface SearchActions {
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;
  fetchResults: (page?: number) => Promise<void>;
}

export type SearchStore = SearchState & SearchActions;

const initialFilters: SearchFilters = {
  shape: [],
  min_carat: '',
  max_carat: '',
  min_price: '',
  max_price: '',
  color: [],
  clarity: [],
  cut: [],
};

export const useSearchStore = create<SearchStore>()(
  subscribeWithSelector((set, get) => ({
    filters: initialFilters,
    results: [],
    total: 0,
    currentPage: 1,
    isLoading: false,
    error: null,

    setFilters: (newFilters) => {
      set((state) => ({
        filters: { ...state.filters, ...newFilters },
        currentPage: 1, // Reset to page 1 on filter change
      }));
      get().fetchResults();
    },

    resetFilters: () => {
      set({ filters: initialFilters, currentPage: 1 });
      get().fetchResults();
    },

    fetchResults: async (page = 1) => {
      set({ isLoading: true, error: null });
      try {
        const { filters } = get();
        const response = await api.get('/diamonds', {
          params: {
            ...filters,
            page,
            limit: 20,
          },
        });
        
        set({
          results: response.data.data,
          total: response.data.total,
          currentPage: response.data.current_page,
          isLoading: false,
        });
      } catch (err: any) {
        set({
          error: err.response?.data?.message || 'Failed to fetch diamonds',
          isLoading: false,
        });
      }
    },
  }))
);
