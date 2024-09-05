import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';

function Footer() {
  return (
    <div className="mx-auto flex flex-col gap-[48px]  justify-center align-middle items-center w-full h-full bg-[#282828]">
        <div className="flex flex-row gap-12 ml-24 mt-32">
          <div className="flex flex-col gap-20 ">
               <h1 className="max-w-[80%] text-white text-[25px] font-bebas">Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h1>
               <h4 className="max-w-[78%] text-white text-[14px] font-bebas">Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</h4>
               <div className="flex flex-row gap-2 relative">
                    <h4 className="text-white text-[14px] font-bebas">Rozwiń</h4>
                    <ArrowIcon />
                    <div className="absolute top-6 left-0 w-14 h-[2px] bg-white"></div>
               </div>
          </div>
          <div className="flex flex-col gap-20 ">
               <h1 className="max-w-[80%] text-white text-[25px] font-bebas">Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h1>
               <h4 className="max-w-[78%] text-white text-[14px] font-bebas">Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</h4>
               <div className="flex flex-row gap-2 relative">
                    <h4 className="text-white text-[14px] font-bebas">Rozwiń</h4>
                    <ArrowIcon />
                    <div className="absolute top-6 left-0 w-14 h-[2px] bg-white"></div>
               </div>
               
          </div>

        </div>
        <div className=" w-full flex flex-row self-center mt-10 gap-10">
           <div className='absolute bot-6 left-0 w-full h-[2px] bg-white'/>
           <div className='w-full flex flex-row justify-between px-24 py-5'>
               <h4 className='text-white font-bold font-robotoCondensed text-[16px]'>Cars Spot</h4>
               <h4 className='text-white font-bold font-robotoCondensed text-[16px] underline underline-offset-4' >Poltiyka prywatności</h4>
           </div>
        </div>
    </div>
  );
}

export default Footer;
