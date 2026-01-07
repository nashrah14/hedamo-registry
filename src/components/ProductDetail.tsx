import { ArrowLeft, Download, FileText, CheckCircle, Info } from 'lucide-react';
import type { Product, VersionHistory } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Registry
        </button>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase
                ${product.status === 'Published' ? 'bg-emerald-100 text-emerald-700' :
                  product.status === 'Submitted' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'}`}>
                {product.status}
              </span>
              <span className="text-gray-400 text-sm">ID: {product.id}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-500 mt-1">{product.category}</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-white bg-gray-50 w-full sm:w-auto">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-4 mb-8">
          <Info className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-amber-900 font-bold text-sm">Producer-Declared Information</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              This page presents producer-declared information; it is not certification or verification.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
          </div>

          <aside className="lg:col-span-4 space-y-6">
          </aside>
        </div>
      </div>
    </div>
  );
}
