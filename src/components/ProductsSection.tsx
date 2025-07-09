import React from 'react';
import { Zap, Award, Globe, Code } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: 'Tournament Boost',
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      description: 'Unlock advanced organizer features for 1 tournament, once for all',
      color: 'purple'
    },
    {
      name: 'Professional Circuit',
      icon: <Award className="w-8 h-8 text-pink-600" />,
      description: 'Unlock all features for your competition project and manage circuits',
      color: 'pink'
    },
    {
      name: 'White-label Platform',
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      description: 'Your customizable gaming platform on your domain name for all your competitions',
      color: 'orange'
    },
    {
      name: 'Developer API',
      icon: <Code className="w-8 h-8 text-teal-600" />,
      description: 'Freely create your own custom projects for your game or for your community',
      color: 'teal'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced features and products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-sm p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 flex flex-col items-center text-center cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${product.color}-100 rounded-full mb-4`}>
                <div className="w-12 h-12 flex items-center justify-center">
                  {React.cloneElement(product.icon, { className: `w-10 h-10 text-${product.color}-600` })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-sm hover:bg-blue-400 hover:text-white transition-colors font-semibold">
            Compare products and pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;