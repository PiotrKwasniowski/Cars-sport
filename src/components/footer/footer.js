import FooterText from "./footerText";

function Footer() {
     const brandName = "Cars Spot";
     const privacyPolicyText = "Polityka prywatności";
     
     return (
       <div className="flex flex-col gap-[48px] justify-center align-middle items-center w-full h-full bg-accent">
         <div className="flex mm:flex-col md:flex-row mm:gap-20 md:gap-12 md:ml-24 mt-32">
           <FooterText/>
           <FooterText/>
         </div>
         <div className="w-full flex flex-row self-center mt-10 gap-10">
           <div className='absolute bot-6 left-0 w-full h-[2px] bg-white'/>
           <div className='w-full flex flex-row justify-between mm:px-5 md:px-24 py-5'>
               <h4 className='text-white font-bold font-robotoCondensed text-[16px]'>
                    {brandName}
               </h4>
               <h4 className='text-white font-bold font-robotoCondensed text-[16px] underline underline-offset-4'>
                    {privacyPolicyText}
               </h4>
           </div>
         </div>
       </div>
     );
   }
   
   export default Footer;
   