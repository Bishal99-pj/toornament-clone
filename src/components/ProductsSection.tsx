import { products } from "../data/featuredProducts.json";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-[url('/assets/toornament-main-section-bg.png')] bg-center bg-cover">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced features and products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-sm p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={product.icon} alt={product.name} />
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