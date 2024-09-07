import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

function FooterText() {
  const titleText = "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.";
  const descriptionText = "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]";
  const expandText = "Rozwiń";

  return (
    <div className="flex flex-col gap-20 mm:text-center md:text-start md:items-start mm:items-center">
        <h1 className="max-w-[80%] text-white mm:text-[20px] md:text-[25px] font-bebas">
            {titleText}
        </h1>
        <h4 className="max-w-[78%] text-white text-[14px] font-bebas">
            {descriptionText}
        </h4>
        <div className="flex flex-row gap-2 relative">
            <h4 className="text-white text-[14px] font-bebas">
                {expandText}
            </h4>
            <ArrowIcon />
            <div className="absolute top-6 left-0 w-14 h-[2px] bg-white"></div>
        </div>
    </div>
  );
}

export default FooterText;