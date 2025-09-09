const UseCase03 = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover md:min-h-[1200px] min-h-[550px] bg-center"
      style={{
        backgroundImage: "url('/src/assets/useCase01-background-img.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#0a2a4a]/70"></div>

      <div className="w-full z-10 text-white px-3 sm:px-6 md:px-12 lg:px-20">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr] items-center max-w-[1400px] mx-auto">
          
          <div className="text-center lg:text-left lg:col-span-2 self-start -mt-2 sm:-mt-4 lg:-mt-28">
            <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
              USE CASE 03 – Search Using Prompts
            </h2>
          </div>

          <div className="flex justify-center lg:justify-start order-1 lg:order-none">
            <img
              src="src/assets/UseCase03-diagram1.png"
              alt="Network Diagram"
              className="max-h-[100px] sm:max-h-[180px] md:max-h-[300px] lg:max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <div className="text-center lg:text-left self-start -mt-2 order-2 lg:order-none">
            <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-snug sm:leading-relaxed lg:leading-relaxed md:max-w-3xl md:mx-auto lg:max-w-[650px]">
              Users can search using natural language and receive a graph of the results. For example: What language does
              James Allen speak, and which industry does he work in?
            </p>
          </div>

          <div className="flex justify-center lg:justify-end order-3 lg:order-none">
            <img
              src="src/assets/BioTechnology-img.png"
              alt="Biotechnology Network Diagram"
              className="max-h-[100px] sm:max-h-[180px] md:max-h-[300px] lg:max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <div className="text-center lg:text-left order-4 lg:order-none">
            <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-snug sm:leading-relaxed lg:leading-relaxed md:max-w-3xl md:mx-auto lg:max-w-lg">
              Who are the experts working in biotechnology, with work experience in Africa, and who have issued invoices
              since last year?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCase03
