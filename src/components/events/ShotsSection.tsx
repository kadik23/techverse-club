import Shot1 from "../../assets/images/Events/101-bootcamp/jeo.webp";
import Shot2 from "../../assets/images/Events/101-bootcamp/20240225_154126.jpg";
import Shot3 from "../../assets/images/Events/101-bootcamp/_MG_0277.jpg";
import Shot4 from "../../assets/images/Events/101-bootcamp/_MG_0308.jpg";
import Shot5 from "../../assets/images/Events/101-bootcamp/IMG_0310.jpg";
import Shot6 from "../../assets/images/Events/101-bootcamp/AGC_20240225_152344013.jpg";
import RoundedLogo from "../../assets/images/rounded-logo.png";

import { useRef, useState } from "react";
import { AnimatedBeam } from "../ui/animated-beam";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

const ShotsSection = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
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
          <div className="flex flex-row items-center justify-between z-10">
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div5Ref}
                  alt=""
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
                  alt=""
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
                  alt=""
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

            <img ref={div4Ref} alt="" src={RoundedLogo} className="w-24" />
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  ref={div6Ref}
                  alt=""
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
                  alt=""
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
                  alt=""
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
