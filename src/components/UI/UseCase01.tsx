const UseCase01 = () => {
  return (
    <div className="relative flex items-center justify-center bg-[url('/src/assets/UseCase01-background-img.jpg')] bg-cover bg-center overflow-hidden p-4 lg:p-0 md:min-h-[550px]">
      <div className="bg-overlay"></div>

      <div className="relative z-10 w-full padding-common text-white">
        <div className="grid gap-6 lg:grid-rows-[auto_auto_1fr] lg:min-h-[450px] lg:max-w-full">
          {/* Heading */}
          <div className="flex-center-start">
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-center lg:text-left">
              USE CASE 01 – Master Data Management
            </h2>
          </div>

          {/* Description */}
          <div className="flex-center-end">
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl text-center lg:text-right">
              The CODEX system will push master data to other applications by using API gateway.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/UseCase01-img.png"
              alt="Use Case 01 Diagram"
              className="img-responsive max-h-30 sm:max-h-56 lg:max-h-42 lg:mt-14 w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase01;
