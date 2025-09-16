import useCaseBg from "../../assets/UseCase01-background-img.jpg";
import diagram1 from "../../assets/UseCase03-diagram1.png";
import bioTechImg from "../../assets/BioTechnology-img.png";

const UseCase03 = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center md:min-h-[1200px] min-h-[550px]"
      style={{ backgroundImage: `url(${useCaseBg})` }}
    >
      <div className="bg-overlay"></div>

      <div className="w-full z-10 text-white px-3 sm:px-6 md:px-12 lg:px-20">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center max-w-[1400px] mx-auto -mt-4 sm:-mt-6 md:-mt-8 lg:mt-0">

          <div className="text-center lg:text-left lg:col-span-2 self-start mt-20 sm:-mt-2 md:mt-10 lg:-mt-28">
            <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
              USE CASE 03 – Search Using Prompts
            </h2>
          </div>

          <div className="flex justify-center lg:justify-start order-1 lg:order-none mt-4 sm:mt-6 md:mt-8 lg:mt-0">
            <img
              src={diagram1}
              alt="Network Diagram"
              className="img-responsive sm:max-h-[250px] md:max-h-[300px] lg:max-h-[400px] w-auto"
            />
          </div>

          <div className="text-center lg:text-left self-start order-2 lg:order-none">
            <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-snug sm:leading-relaxed lg:leading-relaxed md:max-w-3xl md:mx-auto lg:max-w-[650px]">
              Users can search using natural language and receive a graph of the results. For example: What language does
              James Allen speak, and which industry does he work in?
            </p>
          </div>

          <div className="text-center lg:text-left self-start lg:col-start-1 lg:row-start-3 lg:mt-16 order-4 lg:order-none mb-6 sm:mb-8 md:mb-10 lg:mb-0">
            <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-snug sm:leading-relaxed lg:leading-relaxed md:max-w-3xl md:mx-auto lg:max-w-lg">
              Who are the experts working in biotechnology, with work experience in Africa, and who have issued invoices
              since last year?
            </p>
          </div>

          <div className="flex justify-center lg:justify-end lg:col-start-2 lg:row-start-3 order-3 lg:order-none mt-4 sm:mt-6 md:mt-8 lg:mt-0">
            <img
              src={bioTechImg}
              alt="Biotechnology Network Diagram"
              className="img-responsive sm:max-h-[250px] md:max-h-[300px] lg:max-h-[400px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase03;
