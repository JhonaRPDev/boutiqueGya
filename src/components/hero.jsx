const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-[650px] w-full overflow-hidden bg-red-200"
    >
      <img
        src="/img-portada.webp"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 lg:p-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">
          Moda que empodera,
          <br />
          estilo que inspira.
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          COMUNÍCATE
        </button>
      </div>
    </div>
  );
};

export default Hero;
