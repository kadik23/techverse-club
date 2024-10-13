import Shot1 from "../../assets/images/Events/101-bootcamp/jeo.webp";
import Shot2 from "../../assets/images/Events/101-bootcamp/20240225_154126.jpg";
import Shot3 from "../../assets/images/Events/101-bootcamp/_MG_0277.jpg";
import Shot4 from "../../assets/images/Events/101-bootcamp/_MG_0308.jpg";
import Shot5 from "../../assets/images/Events/101-bootcamp/IMG_0310.jpg";
import Shot6 from "../../assets/images/Events/101-bootcamp/AGC_20240225_152344013.jpg";
import RoundedLogo from "../../assets/images/logo_bg.jpg";

import { useRef, } from "react";
import { AnimatedBeam } from "../ui/animated-beam";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

const MediumToLargeScreenShotsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLImageElement>(null);
  const div2Ref = useRef<HTMLImageElement>(null);
  const div3Ref = useRef<HTMLImageElement>(null);
  const div4Ref = useRef<HTMLImageElement>(null);
  const div5Ref = useRef<HTMLImageElement>(null);
  const div6Ref = useRef<HTMLImageElement>(null);
  const div7Ref = useRef<HTMLImageElement>(null);
  return (
    <div className="w-full flex lg:flex-row lg:gap-0 gap-2 flex-col md:h-[1000px] ">
      <div
        className="relative flex w-full items-center justify-center rounded-lg"
        ref={containerRef}
      >
        <div className="flex size-full flex-col w-[45rem] lg:max-w-[80rem] lg:w-[55rem] items-stretch justify-between gap-32">
          <div className="flex flex-row items-center justify-between z-10">
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div5Ref}
                  alt="shot1"
                  src={Shot1}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent ">
                <ModalContent>
                  <img
                    src={Shot1}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div1Ref}
                  alt="shot2"
                  src={Shot2}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot2}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
          <div className="flex flex-row items-center justify-between z-10">
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div2Ref}
                  alt="shot3"
                  src={Shot3}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot3}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>

            <img ref={div4Ref} alt="logo" src={RoundedLogo} className="w-24 rounded-full shadow-[0_0_15px_0px_rgba(0,0,0,0.1)] shadow-white/50" />
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div6Ref}
                  alt="shot4"
                  src={Shot4}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot4}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
          <div className="flex flex-row items-center justify-between z-10">
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div3Ref}
                  alt="shot5"
                  src={Shot5}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot5}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>

            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div7Ref}
                  alt="shot6"
                  src={Shot6}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot6}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-0}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={0}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={0}
          endYOffset={10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={0}
          endYOffset={10}
          reverse
        />
      </div>
    </div>
  );
};

const SmallScreenShotsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLImageElement>(null);
  const div2Ref = useRef<HTMLImageElement>(null);
  const div3Ref = useRef<HTMLImageElement>(null);
  const div4Ref = useRef<HTMLImageElement>(null);
  const div5Ref = useRef<HTMLImageElement>(null);
  const div6Ref = useRef<HTMLImageElement>(null);
  const div7Ref = useRef<HTMLImageElement>(null);
  return (
    <div className="w-full flex lg:flex-row lg:gap-0 gap-2 flex-col md:h-[1000px] ">
      <div
        className="relative flex w-full items-center justify-center rounded-lg"
        ref={containerRef}
      >
        <div className="flex size-full flex-col max-w-[55rem] items-stretch justify-between gap-32">
          <div className="flex flex-col items-center justify-between z-10 gap-16">
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div5Ref}
                  alt="shot1"
                  src={Shot1}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot1}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div1Ref}
                  alt="shot2"
                  src={Shot2}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot2}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div2Ref}
                  alt="shot3"
                  src={Shot3}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot3}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
            <img ref={div4Ref} alt="logo" src={RoundedLogo} className="w-24 rounded-full shadow-[0_0_15px_0px_rgba(0,0,0,0.1)] shadow-white/50" />
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div6Ref}
                  alt="shot4"
                  src={Shot4}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot4}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div3Ref}
                  alt="shot5"
                  src={Shot5}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot5}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div7Ref}
                  alt="shot6"
                  src={Shot6}
                  className="w-52 h-52 rounded-md"
                />
              </ModalTrigger>
              <ModalBody className="bg-transparent">
                <ModalContent>
                  <img
                    src={Shot6}
                    className="max-h-[80vh] sm:max-w-[90vw] max-w-[80vw] rounded-lg shadow-lg"
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </div>

        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div3Ref}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={0}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div5Ref}
          curvature={0}
          reverse
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          reverse
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          curvature={0}
          reverse
        />
      </div>
    </div>
  );
};

const ShotsSection = () => {
  return (
    <>
      <div className="hidden md:block"><MediumToLargeScreenShotsSection/></div>
      <div className="block md:hidden"><SmallScreenShotsSection/></div>
    </>
  );
};
export default ShotsSection;
