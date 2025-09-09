const UseCase01 = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center overflow-hidden p-4 lg:p-0 md:min-h-[550px]"
      style={{
        backgroundImage: "url('/src/assets/UseCase01-background-img.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-[#0a2a4a]/70"></div>

      <div className="w-full z-10 text-white px-4 sm:px-6 lg:px-12 py-8 lg:py-6">
        
        <div className="lg:hidden flex flex-col items-center text-center space-y-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold leading-tight">
              USE CASE 01 – Master Data Management
            </h2>
          </div>

          <div>
            <p className="text-sm sm:text-base leading-relaxed">
              The CODEX system will push master data to other applications by using API gateway.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/src/assets/UseCase01-img.png"
              alt="Use Case 01 Diagram"
              className="max-h-48 sm:max-h-56 w-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-rows-[auto_auto_1fr] lg:gap-6 lg:min-h-[450px] lg:max-w-full">
          
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7 flex items-start">
              <h2 className="text-2xl xl:text-3xl font-bold leading-tight">
                USE CASE 01 – Master Data Management
              </h2>
            </div>
            <div className="col-span-5"></div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5"></div>
            <div className="col-span-7 flex items-start justify-end">
              <div className="max-w-[750px] text-right">
                <p className="text-lg xl:text-xl leading-relaxed">
                  The CODEX system will push master data to other applications by using API gateway.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 flex justify-center">
              <img
                src="/src/assets/UseCase01-img.png"
                alt="Use Case 01 Diagram"
                className="max-h-72 w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase01;