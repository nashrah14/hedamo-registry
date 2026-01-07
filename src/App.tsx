import { useState, useMemo } from 'react';
import { Search, HelpCircle, Bell, ChevronDown } from 'lucide-react';
import { MOCK_PRODUCTS } from './data/products';
import { ProductCard } from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import type { Product } from './types';

export default function App() {
  const [viewingId, setViewingId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  const filteredProducts = useMemo(() => {
    return (MOCK_PRODUCTS as Product[]).filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                           p.producer.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All Statuses' || p.status === statusFilter;
      const matchesCategory = categoryFilter === 'All Categories' || p.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [search, statusFilter, categoryFilter]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans antialiased text-[#111827]">

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => setViewingId(null)}
            >
              <div className="bg-[#111827] text-white w-8 h-8 flex items-center justify-center rounded font-bold text-lg">H</div>
              <span className="font-bold text-gray-900 text-[18px] tracking-tight">
                Hedamo <span className="text-gray-400 font-normal">Registry</span>
              </span>
            </div>

            <div className="hidden md:flex gap-8 text-[16px] font-semibold text-gray-500">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setViewingId(null); }}
                className={`${!viewingId ? 'text-gray-900 border-b-2 border-gray-900' : 'hover:text-gray-900'} h-16 flex items-center`}
              >
                Products
              </a>
              <a href="#" className="h-16 flex items-center hover:text-gray-900 transition-colors">Producers</a>
              <a href="#" className="h-16 flex items-center hover:text-gray-900 transition-colors">Standards</a>
            </div>
          </div>

          <div className="flex items-center gap-5 text-gray-400">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
              <input 
                placeholder="Search registry..." 
                className="bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-10 pr-4 text-sm w-56 focus:outline-none focus:ring-1 focus:ring-gray-300" 
              />
            </div>
            <div className="flex items-center gap-4 border-l border-gray-100 pl-5">
              <HelpCircle className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
              <Bell className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
              <div className="w-9 h-9 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center text-[12px] font-bold text-gray-700">JS</div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {viewingId ? (
            <ProductDetail 
              product={(MOCK_PRODUCTS as Product[]).find(p => p.id === viewingId)!} 
              onBack={() => setViewingId(null)} 
            />
          ) : (
            <>
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Disclosures</h1>
                  <p className="text-gray-500">Browse and verify producer-reported product sustainability information.</p>
                </div>
                <button className="bg-[#71717A] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-600 transition-all">
                  Submit New Disclosure
                </button>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3 mb-6 shadow-sm">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none"
                    placeholder="Search products or producers..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <select className="appearance-none border border-gray-200 rounded-lg pl-3 pr-10 py-2 text-sm text-gray-600 bg-white cursor-pointer outline-none" onChange={(e) => setStatusFilter(e.target.value)}>
                    <option>All Statuses</option>
                    <option>Published</option>
                    <option>Submitted</option>
                    <option>Draft</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select className="appearance-none border border-gray-200 rounded-lg pl-3 pr-10 py-2 text-sm text-gray-600 bg-white cursor-pointer outline-none" onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option>All Categories</option>
                    <option>Textile</option>
                    <option>Construction Material</option>
                    <option>Packaging</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {filteredProducts.map((p, idx) => (
                  <div key={p.id} className={idx !== 0 ? "border-t border-gray-100" : ""}>
                    <ProductCard product={p} onClick={() => setViewingId(p.id)} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Hedamo Registry. All rights reserved.</p>
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}