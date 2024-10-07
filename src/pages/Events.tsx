import Bootcamp from "../assets/images/Events/101-bootcamp/101-bootcamp.jpg";
import LeftArrow from "../assets/images/Events/arrow-left.png";
import DownArrow from "../assets/images/Events/down-arrow.png";
import { bootcampSpeakers, bootcampStat } from "../assets/events";

const Events = () => {
  return (
    <div className="flex flex-col gap-28 w-full px-16 py-40">
      <div className="flex flex-col items-center gap-[65px]">
        <div className="flex flex-col gap-4 items-end w-full">
          <div className="relative w-full">
            <img
              src={LeftArrow}
              alt="left arrow"
              className="absolute -right-10 -top-10 rotate-180"
            />

            <img
              src={Bootcamp}
              alt="bootcamp 101"
              className="w-full rounded-[12px]"
            />
            <img
              src={LeftArrow}
              alt="left arrow"
              className="absolute -left-10 -bottom-10"
            />
          </div>

          <div className="flex flex-col items-end gap-4">
            <span className="text-light_purple font-medium text-[28px] font-geist">
              1st Edition
            </span>
            <div className="flex items-center gap-6">
              <span className="text-white text-[22px] font-semibold leading-[28.13px] font-geist">
                08th-16th April, 2024
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M9 1.125C9 0.826631 8.88147 0.540483 8.6705 0.329505C8.45952 0.118526 8.17337 0 7.875 0C7.57663 0 7.29048 0.118526 7.0795 0.329505C6.86853 0.540483 6.75 0.826631 6.75 1.125V2.25H4.5C3.30653 2.25 2.16193 2.72411 1.31802 3.56802C0.474106 4.41193 0 5.55653 0 6.75L0 9H36V6.75C36 5.55653 35.5259 4.41193 34.682 3.56802C33.8381 2.72411 32.6935 2.25 31.5 2.25H29.25V1.125C29.25 0.826631 29.1315 0.540483 28.9205 0.329505C28.7095 0.118526 28.4234 0 28.125 0C27.8266 0 27.5405 0.118526 27.3295 0.329505C27.1185 0.540483 27 0.826631 27 1.125V2.25H9V1.125ZM21.1545 23.0535C22.5608 23.0535 23.8185 21.9645 23.8185 20.3985C23.8185 18.5265 22.6327 17.631 21.2085 17.631C19.89 17.631 18.5805 18.5017 18.5805 20.3535C18.5805 22.1917 19.8023 23.0535 21.1545 23.0535Z"
                  fill="#8B3889"
                />
                <path
                  d="M36 31.5V11.25H0V31.5C0 32.6935 0.474106 33.8381 1.31802 34.682C2.16193 35.5259 3.30653 36 4.5 36H31.5C32.6935 36 33.8381 35.5259 34.682 34.682C35.5259 33.8381 36 32.6935 36 31.5ZM21.006 28.7775C18.5085 28.7775 17.28 27.0518 17.1742 25.6118H18.711C18.8078 26.4443 19.5817 27.4568 21.0757 27.4568C22.9747 27.4568 24.003 25.5487 24.012 22.5877H23.9513C23.607 23.5192 22.518 24.3653 20.8395 24.3653C18.9225 24.3653 17.0685 22.9928 17.0685 20.3827C17.0685 17.8245 19.0283 16.3125 21.1118 16.3125C23.7488 16.3125 25.506 17.964 25.506 22.3155C25.506 26.3767 23.8365 28.7752 21.006 28.7752V28.7775ZM14.5035 16.5487V28.5457H12.9825V18.1778H12.9555C12.303 18.5288 10.9688 19.3477 10.125 19.926V18.36C11.0731 17.6984 12.0596 17.0936 13.0793 16.5487H14.5035Z"
                  fill="#8B3889"
                />
              </svg>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white text-[22px] font-semibold leading-[28.13px] font-geist">
                University Medea - wezera.
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 36 36"
                fill="none"
              >
                <g clip-path="url(#clip0_375_1533)">
                  <path
                    d="M0 0L10.8 7.2L25.2 0L36 7.2V36L25.2 28.8L10.8 36L0 28.8V0ZM12.6 10.8V30.6L23.4 25.2V5.4L12.6 10.8Z"
                    fill="#8B3889"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_375_1533">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-[28px] font-geist font-semibold text-center text-light_purple leading-[35px]">
            {" "}
            know more about <br /> the event
          </span>
          <img src={DownArrow} alt="down-arrow" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-14 w-full">
        <h1 className="font-geist text-[48px] font-bold text-white">
          Speakers :
        </h1>
        <div className="flex items-center gap-7 w-full lg:flex-nowrap flex-wrap ">
          {bootcampSpeakers.map((speaker, index) => {
            return (
              <div
                key={index}
                className="w-[275px] h-[330px] px-[26px] py-5 flex flex-col items-center gap-2 bg-gradient-to-b from-[#87028380] to-[#21002080] rounded-[10px] shadow-lg"
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="border-[3px] border-secondary w-full h-[250px] object-cover rounded-[8px] shadow-md"
                />
                <span className="text-white text-[22px] whitespace-nowrap font-medium font-geist leading-[32px]">
                  {speaker.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-14 w-full">
        <h1 className="font-geist text-[48px] font-bold text-white">
          Statistics :
        </h1>
        <div className="flex items-center gap-[60px] flex-wrap">
          {bootcampStat.map((stat, index) => {
            return (
              <div
                key={index}
                className="w-[300px] lg:flex-grow-0 flex-grow flex flex-col items-center gap-2 bg-gradient-to-b from-[#87028390] to-[#21002040] px-[26px] py-[41px] rounded-[10px]"
              >
                <span className="text-white text-[48px] font-geist font-bold leading-[62px]">
                  +{stat.count}
                </span>
                <span className="text-white text-[36px] font-medium font-geist leading-[46px]">
                  {stat.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-14 w-full">
        <h1 className="font-geist text-[48px] font-bold text-white">
          Event Shots :
        </h1>
        <div className=""></div>
      </div>
      <div className="flex flex-col items-center gap-14 w-full">
        <div className="flex flex-col items-center gap-10">
          <span className="font-geist text-[28px] font-semibold text-light_purple text-center">
            Want to know <br /> more?
          </span>
          <a href="https://bootcamp-101.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button className="py-2 px-14 rounded-[10px] border-[2px] border-white font-geist text-[30px] leading-[41px] text-white border-opacity-40">
            Check Website
          </button>
          </a>

        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Events;
