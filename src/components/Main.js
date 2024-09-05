import Cars from "../assets/cars.png"
import Lines from "../assets/lines.png"

function Main() {
  return (
    <div className="  mx-auto flex flex-col justify-center w-full  bg-[#F7F7F7]">
        <div className="ml-20 md:ml-20 w-[83] h-[41] flex flex-col gap-10">
            <h1 className="font-bebas font-normal text-[76px] text-[#282828] z-10">SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY</h1>
            <h2 className="font-robotoCondensed font-normal text-[16px] text-[#282828] z-10">Kup komfortowy pojazd, aby każda podróż <br/>była wyjątkowym przeżyciem</h2>
            <div className="flex flex-row gap-5">
                <button className="font-robotoCondensed font-semibold text-[15px] text-white bg-[#0137FF]  px-[25px] py-[12px]  rounded-[10px] align-middle self-center z-20">Zobacz zdjęcia</button>
                <button className="font-robotoCondensed font-semibold text-[15px] text-[#0137FF] bg-white  px-[25px] py-[12px]  border-[1px] border-[#0137FF] rounded-[10px] align-middle self-center z-20">Zadzwoń do nas</button>
            </div>
        </div>
        <img className="w-[45%] h-[73%] align-bottom self-end px-0 py-0 absolute top-0 z-0 mr-[48px]"src={Lines}/>
        <img className="w-[70%] h-[45%] align-bottom self-end px-0 py-0 mt-[-120px] z-10 "  src={Cars}/>
    </div>
  );
}

export default Main;
