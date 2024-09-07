import { ReactComponent as Logo } from '../../assets/logo.svg';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

function Header() {
  const [isOpen, setOpen] = useState(false);

  const galleryText = "Galeria zdjęć";
  const faqText = "FAQ";
  const callUsText = "Zadzwoń do nas";

  return (
    <div className="container mx-auto flex md:flex-row mm:flex-col justify-between py-5 px-10 align-middle items-center">
      <div className='flex flex-row items-center gap-10'>
        <Logo />
        <div className="mm:flex md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>


      <div className="mm:hidden flex-row gap-10 items-center md:flex">
        <h2 className="font-normal font-robotoFlex text-accent">{galleryText}</h2>
        <h2 className="font-normal font-robotoFlex text-accent">{faqText}</h2>
      </div>


      <button className="bg-secondary md:flex mm:hidden text-[15px] z-10  text-white font-bold py-2 px-4 rounded transition-all font-robotoFlex">
        {callUsText}
      </button>


      <div className={isOpen ? 'flex' : 'hidden md:hidden flex-row'}>
        <div className="flex flex-row gap-5 items-center">
          <h2 className="font-normal font-robotoFlex text-accent">{galleryText}</h2>
          <h2 className="font-normal font-robotoFlex text-accent">{faqText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;