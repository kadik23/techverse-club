import Shot1 from "../../assets/images/Events/101-bootcamp/jeo.webp";
import RoundedLogo from "../../assets/images/rounded-logo.png";
import Raduis from "../../assets/images/Events/raduis.png";
import Raduis1 from "../../assets/images/Events/raduis 1.png";
import Raduis2 from "../../assets/images/Events/raduis 2.png";
import Raduis3 from "../../assets/images/Events/raduis 3.png";
import { useState } from "react";

const ShotsSection = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  return (
    <div className="w-full flex lg:flex-row lg:gap-0 gap-2 flex-col md:h-[900px] lg:h-[1100px]">
      <div className="flex lg:flex-col md:flex-row flex-col items-center justify-between md:gap-0 gap-5 lg:w-[25%] w-full">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div className="flex flex-col items-center gap-3">
              <img
                key={index}
                src={Shot1}
                alt="shot1"
                className="object-cover rounded-[10px] shadow-md lg:h-[250px] lg:w-[260px] md:h-[175px] md:w-[190px]"
                onClick={() => {
                  setImgSrc(Shot1);
                }}
              />
              {index + 1 !== 3 && (
                <div className="border-dashed border-[2px] border-white w-1 h-[150px] md:hidden" />
              )}
            </div>
          );
        })}
      </div>
      <div className=" flex-col items-center justify-center flex-grow lg:flex hidden">
        <div className="flex  items-stretch relative top-12 w-full">
          <img
            src={Raduis1}
            alt="shape"
            className="lg:scale-[0.85] scale-75 lg:w-[50%] w-[40%] relative right-8"
          />
          <img
            src={Raduis}
            alt="shape"
            className="lg:scale-[0.85] scale-75 lg:w-[50%] w-[40%] relative left-8"
          />
        </div>
        <div className="flex items-center lg:flex-row flex-col w-full gap-3">
          <div className="flex-grow border-[2px] border-dashed border-white" />
          <img
            src={RoundedLogo}
            alt="rounded logo"
            className="shadow-md shadow-slate-200 rounded-full"
          />
          <div className="flex-grow border-[2px] border-dashed border-white h-1 w-1" />
        </div>
        <div className="flex justify-between items-stretch relative bottom-12 w-full">
          <img
            src={Raduis2}
            alt="shape"
            className="lg:scale-[0.85] scale-75 lg:w-[50%] w-[40%] relative right-8"
          />
          <img
            src={Raduis3}
            alt="shape"
            className="lg:scale-[0.85] scale-75 lg:w-[50%] w-[40%] relative left-8"
          />
        </div>
      </div>
      <div className=" w-full justify-center flex-grow lg:hidden md:flex hidden">
        <div className="flex flex-col items-center">
          <img src={Raduis1} alt="curve line" className="scale-90" />
          <img src={Raduis2} alt="curve line" className="scale-90" />
        </div>
        <div className="h-full flex flex-col items-center gap-2">
          <div className="w-1 flex-grow border-dashed border-[2px] border-white" />
          <img
            src={RoundedLogo}
            alt="rounded-logo"
            className="rounded-full shadow-md shadow-slate-200"
          />
          <div className="w-1 flex-grow border-dashed border-[2px] border-white" />
        </div>
        <div className="flex flex-col">
          <img src={Raduis} alt="curve line" className="scale-90" />
          <img src={Raduis3} alt="curve line" className="scale-90" />
        </div>
      </div>
      <div className="hidden md:flex lg:flex-col items-center justify-between lg:w-[25%] w-full">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <img
              key={index}
              src={Shot1}
              alt="shot1"
              className="object-cover rounded-[10px] shadow-md lg:h-[250px] lg:w-[260px] h-[175px] w-[190px]"
              onClick={() => {
                setImgSrc(Shot1);
              }}
            />
          );
        })}
      </div>

      {/* Image Modal Dialog */}
      {imgSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close button */}
            <button
              className="absolute -top-8 -right-8 text-white text-[40px] hover:text-slate-300 rounded-full"
              onClick={() => {
                setImgSrc(null);
              }}
            >
              &times;
            </button>

            {/* Display the clicked image in larger size */}
            <img
              src={imgSrc}
              alt="Enlarged view"
              className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShotsSection;
