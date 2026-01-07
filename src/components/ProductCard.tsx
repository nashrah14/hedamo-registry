import type { Product } from '../types';
import { Building2, Filter, Calendar, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="p-4 sm:p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 group cursor-pointer"
    >
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <span className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase
            ${product.status === 'Published' ? 'bg-emerald-100 text-emerald-700' :
              product.status === 'Submitted' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'}`}>
            {product.status === 'Published' ? 'Disclosure Published' : product.status}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-[12px] sm:text-[13px] text-gray-500">
          <div className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> {product.producer}</div>
          <div className="flex items-center gap-1.5"><Filter className="w-4 h-4" /> {product.category}</div>
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated {product.updatedAt}</div>
        </div>
      </div>

      <div className="flex justify-between sm:justify-end items-center gap-6">
        <div className="text-left sm:text-right">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Evidence</p>
          <p className="text-base sm:text-lg font-semibold text-gray-900">
            {product.evidenceCount} <span className="font-normal text-gray-500 text-sm">files</span>
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
