const TrustedSection = () => {
  const trustedCompanyLogos = Array(12).fill({
    name: 'Toornament-partner-company',
    logoSrc: '/src/public/assets/toornament-trusted-company.png'
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Trusted by
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {trustedCompanyLogos.map((partner, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <img src={partner.logoSrc} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;