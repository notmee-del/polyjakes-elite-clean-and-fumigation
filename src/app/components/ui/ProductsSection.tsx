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
    <section id="products" className="bg-black py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-medium uppercase tracking-widest">
            Shop
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Our Products
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Professional-grade pest control products available for direct purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-40 bg-white/5 rounded-xl mb-5 flex items-center justify-center border border-white/5">
                <span className="text-5xl">🧴</span>
              </div>

              {product.badge && (
                <span className="self-start text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-full mb-3">
                  {product.badge}
                </span>
              )}

              <h3 className="text-white font-semibold text-lg mb-2">
                {product.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-white font-bold text-lg">
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
                  className="text-xs font-semibold bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-lg transition-all duration-200"
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