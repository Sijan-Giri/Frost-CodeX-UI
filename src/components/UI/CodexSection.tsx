const CodexSection = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/src/assets/Background-img.png)" }}
    >
      {/* <div className="absolute inset-0 bg-[#0a2a4a]/70"></div> */}

      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-12 max-w-full z-10">
        <div className="border border-white/60 rounded-md p-4 sm:p-6 lg:p-10 max-w-6xl mx-auto bg-[#457b9d]/30 text-center shadow-xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-wide leading-snug">
            CODEX
          </h1>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto px-2">
            The CODEX project aims to build a system and processes for
            standardizing and recording the use of terms across all
            applications. Any given term should carry the same meaning in every
            application.
          </p>
        </div>
      </div>

      <div className="flex justify-center pb-8 sm:pb-10 lg:pb-12 animate-bounce z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default CodexSection