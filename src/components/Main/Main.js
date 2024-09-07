import Cars from "../../assets/cars.png"
import Lines from "../../assets/lines.png"

function Main() {
  const mainHeading1 = "SPRZEDAJEMY SAMOCHODY Z EUROPY";
  const mainHeading2 = "Z EUROPY";
  const subHeading1 = "Kup komfortowy pojazd, aby każda podróż ";
  const subHeading2 = "była wyjątkowym przeżyciem";
  const seePhotosButtonText = "Zobacz zdjęcia";
  const callUsButtonText = "Zadzwoń do nas";
  return (
    <div className=" mx-auto flex flex-col  w-full  bg-primary">
        <div className="mm:text-center  md:text-left md:ml-20 w-[83] h-[41] flex flex-col gap-10">
            <h1 className="font-bebas font-normal mm:text-[50px] lg:text-[76px] text-accent z-10">
              {mainHeading1}
              <br /> 
              {mainHeading2}
            </h1>
            <h2 className="font-robotoCondensed font-normal text-[16px] text-accent z-10">
              {subHeading1}
              <br/>
              {subHeading2}
            </h2>
            <div className="flex mm:justify-center md:justify-start flex-row gap-5">
                <button className="font-robotoCondensed font-semibold text-[15px] text-primary bg-secondary  px-[25px] py-[12px]  rounded-[10px] align-middle self-center z-20">
                  {seePhotosButtonText}
                </button>
                <button className="font-robotoCondensed font-semibold text-[15px] text-secondary bg-primary  px-[25px] py-[12px]  border-[1px] border-secondary rounded-[10px] align-middle self-center z-20">
                  {callUsButtonText}
                </button>
            </div>
        </div>
        <img className="mm:hidden lg:flex  w-[45%] h-[73%]  align-bottom self-end px-0 py-0 absolute top-0 z-0 mr-[48px]"src={Lines}/>
        <img className="mm:hidden lg:flex w-[70%] h-[45%] align-bottom self-end px-0 py-0 mt-[-120px] z-10 "  src={Cars}/>
    </div>
  );
}

export default Main;
