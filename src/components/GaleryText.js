
function GaleryText() {
    return (
      <div className="container mx-auto flex flex-col w-full ml-20 bg-[#f7f7f7]">
          <h2 className="text-[#0147FF] text-[21.5px]   font-robotoCondensed">Prezentacja firmy</h2>
          <h1 className="font-bebas text-[40px] text-[#1d1d1b]">ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h1>
  
          <div className="flex flex-row gap-10 mt-5">
              <h4 className="text-[#0147ff] text-[15px] font-robotoFlex font-semibold underline underline-offset-8 ">Samochody osobowe</h4>
              <h4 className=" text-[#000000] text-[15px] font-robotoFlex font-semibold" >Samochody dostawcze</h4>
          </div>
      </div>
    );
  }
  
  export default GaleryText;
  