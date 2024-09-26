const Catalog = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:p-12 min-h-screen bg-gray-50">
      {/* Jeans Section */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-1 row-span-2 px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <a href="#">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-4">
            JEANS
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center mb-4">
            Estilo y comodidad se encuentran en nuestra colección de jeans.
            Descubre las últimas tendencias y cortes perfectos para un look
            impecable.
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/8615668.png"
              alt="jeans"
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </a>
      </div>

      {/* Casacas Section */}
      <div className="px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <a href="#">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-4">
            CASACAS
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center mb-4">
            Mantente abrigada y a la moda con nuestras casacas. Encuentra tu estilo perfecto para cada ocasión.
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/shirt.png"
              alt="shirt"
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </a>
      </div>

      {/* Polos Section */}
      <div className="col-start-1 sm:col-start-2 lg:col-span-1 px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <a href="#">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-4">
            POLOS
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center mb-4">
            Camisetas para cada día. Descubre una variedad de colores y diseños que se adaptan a tu estilo.
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/t-shirt.png"
              alt="t-shirt"
              className="w-full h-auto transition-transform duration-300 hover:scale-105 mt-4"
            />
          </div>
        </a>
      </div>

      {/* Promociones Section */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-1 row-span-2 px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 sr-only">
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src="/promotions1.png"
            alt="promotions1"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-4">
          PROMOCIONES
        </h3>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center mb-4">
          Aprovecha nuestras ofertas exclusivas. Descubre prendas de moda a precios increíbles.
        </p>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/promotions2.png"
            alt="promotions2"
            className="w-full h-auto transition-transform duration-300 hover:scale-105 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;