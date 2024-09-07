import alfa from '../../assets/alfa.png';
import audi from '../../assets/audi.png';
import masserrati from '../../assets/masserati.png';
import Dot from './Dot';

function Galery() {
  return (
    <div className=" mt-16 mx-auto flex flex-col max-w-full mm:overflow-hidden mm:ml-0 sm:ml-20 bg-[#f7f7f7]">
        <div className=" mx-auto flex max-w-full overflow-hidden mm:ml-8 md:ml-0  flex-row w-full  gap-20 bg-[#f7f7f7]">
            <img className='mm:w-[80%] md:w-[41%] h-[100%]' src={alfa}/>
            <img className='mm:w-[80%  md:w-[41%] h-[100%]' src={masserrati}/>
            <img className='mm:w-[80%] md:w-[41%] h-[100%]' src={audi}/>
            
        </div>
        <div className="align-middle gap-5 flex flex-row  self-center mt-10">
            <Dot color="#0147ff"/>
            <Dot color="#ededed"/>
            <Dot color="#ededed"/>
            <Dot color="#ededed"/>
            <Dot color="#ededed"/>
        </div>
    </div>
  );
}

export default Galery;
