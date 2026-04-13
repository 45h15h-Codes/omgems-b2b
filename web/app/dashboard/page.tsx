import { Target, TrendingUp, Users, ShoppingCart } from 'lucide-react';

const stats = [
  { label: 'Active Inquiries', value: '24', icon: ShoppingCart, trend: '+12%' },
  { label: 'Verified Merchants', value: '156', icon: Users, trend: '+3%' },
  { label: 'Live Inventory', value: '12,450', icon: Target, trend: '+156 today' },
  { label: 'Monthly Volume', value: '$1.2M', icon: TrendingUp, trend: '+8.4%' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col space-y-1">
        <h2 className="text-3xl font-serif">Marketplace Overview</h2>
        <p className="text-stone-400 text-sm">Real-time performance and inventory metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 border border-stone-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-stone-50 rounded">
                <stat.icon className="w-5 h-5 text-stone-600" />
              </div>
              <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-1 uppercase tracking-tighter">
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 border border-stone-100 shadow-sm min-h-[400px]">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-400 mb-6">Recent Activity</h3>
          <div className="flex items-center justify-center h-full text-stone-300 text-sm italic">
            Connecting to activity stream...
          </div>
        </div>
        <div className="bg-white p-8 border border-stone-100 shadow-sm">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-400 mb-6">Merchant Applicants</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-stone-100" />
                <div className="flex-1">
                  <div className="h-3 w-24 bg-stone-50 mb-1" />
                  <div className="h-2 w-16 bg-stone-[20px]" />
                </div>
                <div className="h-6 w-12 bg-stone-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
