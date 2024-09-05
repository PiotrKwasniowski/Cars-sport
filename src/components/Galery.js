import alfa from '../assets/alfa.png';
import audi from '../assets/audi.png';
import masserrati from '../assets/masserati.png';

function Galery() {
  return (
    <div className=" mt-16 mx-auto flex flex-col max-w-full overflow-hidden ml-20 bg-[#f7f7f7]">
        <div className=" mx-auto flex max-w-full overflow-hidden  flex-row w-full  gap-20 bg-[#f7f7f7]">
            <img className='w-[41%] h-[100%]' src={alfa}/>
            <img className='w-[41%] h-[100%]' src={masserrati}/>
            <img className='w-[41%] h-[100%]' src={audi}/>
            
        </div>
        <div className="align-middle gap-5 flex flex-row self-center mt-10">
            <div className="text-[20px] text-[#0147ff]">•</div>
            <div className="text-[20px] text-[#ededed]">•</div>
            <div className="text-[20px] text-[#ededed]">•</div>
            <div className="text-[20px] text-[#ededed]">•</div>
            <div className="text-[20px] text-[#ededed]">•</div>
        </div>
    </div>
  );
}

export default Galery;
