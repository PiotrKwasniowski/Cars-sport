function GaleryText() {

  const companyPresentationText = "Prezentacja firmy";
  const galleryTitleText = "ZOBACZ NASZĄ GALERIĘ ZDJĘĆ";
  const carCategory1 = "Samochody osobowe";
  const carCategory2 = "Samochody dostawcze";

  return (
    <div className="container overflow-hidden mx-auto mm:text-center sm:text-left flex flex-col max-w-[90%] sm:ml-20 bg-[#f7f7f7]">
      <h2 className="text-[#0147FF] text-[21.5px] font-robotoCondensed">
        {companyPresentationText}
      </h2>
      <h1 className="font-bebas text-[40px] text-[#1d1d1b]">
        {galleryTitleText}
      </h1>

      <div className="mm:text-center flex flex-row gap-10 mt-5">
        <h4 className="text-[#adbbdd] text-[15px] font-robotoFlex font-semibold underline md:underline-offset-8">
          {carCategory1}
        </h4>
        <h4 className="text-[#000000] text-[15px] font-robotoFlex font-semibold">
          {carCategory2}
        </h4>
      </div>
    </div>
  );
}

export default GaleryText;