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

        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Registry
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider
                ${product.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 
                  product.status === 'Submitted' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'}`}>
                {product.status}
              </span>
              <span className="text-gray-400 text-sm font-mono">ID: {product.id}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>
            <p className="text-lg text-gray-500 font-medium">{product.category}</p>
          </div>
          
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 bg-white shadow-sm transition-all">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 mb-8">
          <Info className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <div>
            <h4 className="text-amber-900 font-bold text-sm mb-1 uppercase">Producer-Declared Information</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              This page presents information declared by the producer; it is not a formal certification. 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
            <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-gray-900">
                <FileText className="w-5 h-5 text-gray-400" />
                <h3 className="font-bold text-lg">Product Description</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Material</p>
                  <p className="font-bold text-gray-900 text-lg">{product.attributes.material}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Recyclability</p>
                  <p className="font-bold text-gray-900 text-lg">{product.attributes.recyclability}</p>
                </div>
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
      
                   <CheckCircle className="w-5 h-5 text-gray-400" /> Supporting Evidence
                </div>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500 font-bold">{product.evidenceCount} Files</span>
              </div>
              <div className="py-12 border-2 border-dashed border-gray-100 rounded-xl text-center text-gray-400 italic">
                Restricted to authorized auditors.
              </div>
            </section>
          </div>

        
          <aside className="lg:col-span-4 space-y-6 order-1 lg:order-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Declared By</p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    {product.producer.charAt(0)}
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 text-lg">{product.producer}</p>
                   <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                     <CheckCircle className="w-3 h-3" /> Verified Producer
                   </p>
                 </div>
               </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-6">Version History</h4>
              <div className="space-y-6">
    
                {product.versions.map((v: VersionHistory, i: number) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-gray-300'} z-10`} />
                      {i < product.versions.length - 1 && <div className="w-0.5 h-full bg-gray-100 absolute top-3" />}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold text-gray-900">Version {v.v}</span>
                        <span className="text-[11px] font-bold text-gray-400">{v.date}</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 italic border border-gray-100">
                        {v.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
