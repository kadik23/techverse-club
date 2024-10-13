import Images from '../../../consts/images';
import { cn } from "../../../lib/utils";

function Header() {
  return (
    <div
      style={{ backgroundImage: `url(${Images.HeaderPixels})` }}
      className="w-full h-[1000px]  bg-cover bg-center absolute top-0 left-0 flex flex-col justify-center items-center overflow-hidden "
    >
      <img src={Images.linesfrom} alt="lines" className='absolute w-[85%]  h-[800px] bg-center   top-0 bg-cover left-0 ' />
      <div className="z-10 flex min-h-64 items-center justify-center text-geist  text-[64px] uppercase mb-[100px]">
        <span
          className={cn(
            `text-geistMono inline animate-text-gradient bg-clip-text text-transparent text-center`
          )}
        >
          Welcome to <br /> Techverse Club
        </span>
      </div>
      <div className='w-[256px]  '> 
      <img src={Images.Squares} alt="Squares" className=' absolute w-[320px] h-[600px] left-[812px] top-[100px]' />
      <img src={Images.logo} alt="logo"   className='w-full' />
      </div>
    </div>
  );
}

export default Header;
