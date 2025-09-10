const UseCase02 = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden md:min-h-[550px] bg-cover bg-center bg-[url('/src/assets/UseCase01-background-img.jpg')]">
      <div className="bg-overlay"></div>

      <div className="relative z-10 w-full text-white padding-common">
        <div className="grid gap-6 lg:grid-rows-[auto_auto_1fr] lg:min-h-[450px] lg:max-w-full">
          <div className="flex-center-start">
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-center lg:text-left">
              USE CASE 02 – Building Frost Data Catalog
            </h2>
          </div>

          <div className="flex-center-end">
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl text-center lg:text-right">
              Data from integrated applications is forwarded to the CODEX system. 
              The CODEX system then automatically assigns terminology (if needed) 
              and builds taxonomy chains. This knowledge bank becomes the data catalog.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/src/assets/UseCase02-img.png"
              alt="Use Case 02 Diagram"
              className="img-responsive max-h-48 sm:max-h-56 lg:max-h-42 lg:mt-4 w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase02;
