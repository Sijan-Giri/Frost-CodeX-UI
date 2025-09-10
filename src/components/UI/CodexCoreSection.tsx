import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const CodexCoreSection = () => {
  const terminologyRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [terminologyDotTop, setTerminologyDotTop] = useState("200px");
  const [headerBottom, setHeaderBottom] = useState("0px");

  const horizontalConnectorY = "400px";
  const taxonomyDotY = "600px";
  const leftLineX = "50px";
  const rightLineX = "calc(100% - 50px)";

  useEffect(() => {
    if (terminologyRef.current && mainRef.current && headerRef.current) {
      const terminologyRect = terminologyRef.current.getBoundingClientRect();
      const mainRect = mainRef.current.getBoundingClientRect();
      const headerRect = headerRef.current.getBoundingClientRect();
      const relativeTop = terminologyRect.top - mainRect.top + 49;
      const headerRelativeBottom = headerRect.bottom - mainRect.top;
      setTerminologyDotTop(`${relativeTop}px`);
      setHeaderBottom(`${headerRelativeBottom}px`);
    }
  }, []);

  return (
    <div className="bg-white font-sans min-h-screen relative overflow-x-hidden pb-20">
      <header
        ref={headerRef}
        className="py-4 sm:py-6 px-4 sm:px-6 lg:px-12 text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B4D8B] max-w-full"
      >
        CODEX - Core concepts
      </header>

      <main
        ref={mainRef}
        className="container max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-0 overflow-x-hidden"
      >
        <div
          className="absolute w-1 bg-blue-100 z-0 hidden lg:block"
          style={{
            left: leftLineX,
            top: headerBottom,
            height: `calc(${terminologyDotTop} - ${headerBottom})`,
          }}
        ></div>

        <div
          className="absolute w-6 h-6 rounded-full bg-blue-500 items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex"
          style={{ left: leftLineX, top: terminologyDotTop }}
        >
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>

        <div
          className="absolute w-1 z-0 hidden lg:block bg-gradient-to-b from-blue-500 via-purple-400 to-orange-400"
          style={{
            left: leftLineX,
            top: terminologyDotTop,
            height: `calc(${horizontalConnectorY} - ${terminologyDotTop})`,
          }}
        ></div>

        <div
          className="absolute w-1 z-0 hidden lg:block bg-gradient-to-b from-orange-400 via-purple-400 to-blue-500"
          style={{
            left: rightLineX,
            top: horizontalConnectorY,
            height: `calc(${taxonomyDotY} - ${horizontalConnectorY})`,
          }}
        ></div>

        <div
          className="absolute w-6 h-6 rounded-full bg-orange-500 items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex"
          style={{ left: rightLineX, top: taxonomyDotY }}
        >
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>

        <div
          className="absolute bottom-0 w-1 bg-orange-100 z-0 hidden lg:block"
          style={{
            left: rightLineX,
            top: taxonomyDotY,
            height: `calc(100% - ${taxonomyDotY})`,
          }}
        ></div>

        <div
          className="absolute h-1 z-0 hidden lg:block bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-500"
          style={{
            left: leftLineX,
            right: `calc(100% - ${rightLineX})`,
            top: horizontalConnectorY,
          }}
        ></div>

        <div
          ref={terminologyRef}
          className="relative flex flex-col lg:flex-row items-start py-6 sm:py-8 lg:pl-[calc(50px+2rem)] lg:pr-12 mt-6 sm:mt-8 lg:mt-12"
        >
          <div className="w-full lg:w-1/2 lg:pr-12 mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-gradient">
              Terminology
            </h2>
            <p className="mb-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Terminology refers to the list of unique terms that can be used
              within a given source. Sources are logical groups like "Frost
              Opportunity Universe", "Frost Radar", etc. Within each source, a
              unique list of terms is generated.
            </p>
            <p className="mb-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              For each term, a three-letter acronym and a special number are
              given to make it unique across all sources.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This combination of the three-letter acronym and the number is
              called CODEX.
            </p>
            <div className="mt-4 text-blue-500 cursor-pointer flex items-center">
              <ChevronDown className="w-4 h-4 mr-1" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start lg:pl-12 p-4 sm:p-6 lg:p-10 lg:pt-11">
            <img
              src="/src/assets/terminology-img.png"
              alt="Terminology Screenshot"
              className="img-responsive"
            />
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row items-start py-6 sm:py-8 lg:pr-[calc(50px+2rem)] lg:pl-12 mt-10 mb-2.5">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 flex justify-center items-center mb-6 lg:mb-0 p-4 sm:p-6">
            <img
              src="/src/assets/Taxonomy.png"
              alt="Taxonomy Diagram"
              className="img-responsive"
            />
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-gradient">
              Taxonomy
            </h2>
            <p className="mb-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              By chaining various terms together, a taxonomy is built. This
              illustrates the hierarchy and represents the relationships
              between the terms.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Within a taxonomy, each term is used only once.
            </p>
            <div className="mt-4 text-orange-500 cursor-pointer flex items-center">
              <ChevronDown className="w-4 h-4 mr-1" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodexCoreSection;
