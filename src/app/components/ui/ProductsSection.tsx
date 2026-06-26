'use client';

import { useState } from 'react';
import PaymentModal from './PaymentsModal';

const products = [
  {
    id: '1',
    name: 'Doom Multipurpose Insecticide',
    description: 'Fast-acting spray for flying and crawling insects. 300ml.',
    price: 450,
    badge: 'Best Seller',
  },
  {
    id: '2',
    name: 'Rat & Mouse Poison Bait',
    description: 'Highly effective rodenticide blocks. Safe to use indoors.',
    price: 850,
    badge: null,
  },
  {
    id: '3',
    name: 'Bedbug Exterminator Spray',
    description: 'Professional-grade bedbug killer. Residual effect up to 3 months.',
    price: 1200,
    badge: 'Pro Grade',
  },
  {
    id: '4',
    name: 'Cockroach Gel Bait',
    description: 'Attracts and eliminates cockroach colonies at the source.',
    price: 650,
    badge: null,
  },
  {
    id: '5',
    name: 'Mosquito Coils 10 pack',
    description: 'Long-burning coils providing 8 hours of mosquito protection.',
    price: 200,
    badge: null,
  },
  {
    id: '6',
    name: 'Termite Control Powder',
    description: 'Dust formulation for termite nests and entry points.',
    price: 950,
    badge: 'New',
  },
];

type SelectedProduct = {
  id: string;
  name: string;
  price: number;
} | null;

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct>(null);

  return (
    <section id="products" className="relative py-24 px-4 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/30">
      
      {/* Subtle details */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 dark:text-green-400 text-sm font-semibold uppercase tracking-wider">
            Online Store
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3 mb-4">
            Our Pest Control Products
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-lg">
            Professional-grade, safe, and certified pest control products available for direct purchase in Nairobi.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/40 hover:border-green-500/30 dark:hover:border-green-500/20 rounded-2xl p-6 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Product Thumbnail Placeholder */}
              <div className="w-full h-44 bg-zinc-100 dark:bg-zinc-950/60 rounded-xl mb-5 flex items-center justify-center border border-zinc-200/20 dark:border-zinc-800/30 transition-colors select-none">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🧴</span>
              </div>

              {/* Badge */}
              {product.badge ? (
                <span className="self-start text-[10px] font-extrabold bg-green-500/10 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 dark:border-green-500/30 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">
                  {product.badge}
                </span>
              ) : (
                // Spacer to keep layout uniform
                <div className="h-6 mb-3" />
              )}

              {/* Product Meta */}
              <h3 className="text-zinc-900 dark:text-white font-bold text-lg mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              {/* Pricing & CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-900/40">
                <span className="text-zinc-900 dark:text-white font-black text-xl">
                  KSh {product.price.toLocaleString()}
                </span>
                <button
                  onClick={() =>
                    setSelectedProduct({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                    })
                  }
                  className="text-xs font-bold bg-green-500 hover:bg-green-400 text-black px-4 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-md shadow-green-500/10 cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment modal */}
      {selectedProduct && (
        <PaymentModal
          productId={selectedProduct.id}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}