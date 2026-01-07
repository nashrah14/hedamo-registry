import { ArrowLeft, Download, FileText, CheckCircle, Info } from 'lucide-react';
import type { Product, VersionHistory } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Registry
        </button>

        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase
                ${product.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 
                  product.status === 'Submitted' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'}`}>
                {product.status}
              </span>
              <span className="text-gray-400 text-sm">ID: {product.id}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-500 mt-1">{product.category}</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-white bg-gray-50 transition-colors">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-4 mb-8">
          <Info className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-amber-900 font-bold text-sm">Producer-Declared Information</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              This page presents producer-declared information; it is not certification or verification. Hedamo has not independently audited these claims.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-8">
            <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-gray-900">
                <FileText className="w-5 h-5 text-gray-400" />
                <h3 className="font-bold">Product Description</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
              
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Functional Attributes</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">Material Composition</p>
                  <p className="font-semibold text-gray-900">{product.attributes.material}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">Recyclability</p>
                  <p className="font-semibold text-gray-900">{product.attributes.recyclability}</p>
                </div>
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 font-bold text-gray-900">
                   <CheckCircle className="w-5 h-5 text-gray-400" /> Supporting Evidence
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">{product.evidenceCount} documents</span>
              </div>
              <div className="py-12 border-2 border-dashed border-gray-100 rounded-lg text-center text-gray-400 italic">
                Evidence documents available for authorized users.
              </div>
            </section>
          </div>

          <aside className="col-span-4 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Declared By</p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-gray-900 text-white rounded border flex items-center justify-center font-bold uppercase">
                    {product.producer.charAt(0)}
                 </div>
                 <div>
                   <p className="font-bold text-gray-900">{product.producer}</p>
                   <p className="text-xs text-emerald-600 font-medium">Verified Producer ID</p>
                 </div>
               </div>
               <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                 <div className="flex justify-between text-sm"><span className="text-gray-400">First Listed</span><span className="text-gray-900 font-medium">{product.timeline.listed}</span></div>
                 <div className="flex justify-between text-sm"><span className="text-gray-400">Last Updated</span><span className="text-gray-900 font-medium">{product.timeline.updated}</span></div>
                 <div className="flex justify-between text-sm"><span className="text-gray-400">Next Review</span><span className="text-gray-900 font-medium">{product.timeline.review}</span></div>
               </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">Version History</h4>
              <div className="space-y-6">
                {product.versions.map((v: VersionHistory, i: number) => (
                  <div key={i} className="flex gap-3 relative">
                    <div className="flex flex-col items-center">
                      <div className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-gray-300'} z-10`} />
                      {i < product.versions.length - 1 && <div className="w-0.5 h-full bg-gray-100 absolute top-2.5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between w-full mb-1">
                        <span className="text-sm font-bold">Version {v.v}</span>
                        <span className="text-xs text-gray-400">{v.date}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mb-2 font-medium uppercase tracking-tight">{v.author}</p>
                      <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 italic border border-gray-100">{v.note}</div>
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