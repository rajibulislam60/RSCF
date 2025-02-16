import React from "react";
import Container from "./Container";
import bannarImage from "../images/bannarlogo.png";

const Bannar = () => {
  return (
    <div>
      <Container>
        <div className="mt-4 font-[sans-serif] overflow-hidden">
          <div className="grid sm:grid-cols-2 items-center">
            <div className="text-center p-6 flex flex-col justify-center items-center">
              <h3 className="font-extrabold text-5xl text-black leading-tight">
                Build Skills unlock your potential with
                <span className="text-yellow-600">
                  {" "}
                  RSCF - Rise Students Career Forum
                </span>
              </h3>
              <h6 className="text-lg text-gray-800 mt-8">
                Preparing Collage, University students for the challenges of
                tomorrow with a focus on essential skills, career guidance, and
                connections to professionals and educators.
              </h6>
              <button
                type="button"
                className="bg-gray-600 hover:bg-yellow-600 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
              >
                Get Started
              </button>
            </div>
            <div className="flex justify-end items-center p-2 w-full h-full">
              <div className="p-5">
                <img
                  src={bannarImage}
                  className="w-full mr-[100px] h-full object-cover border-white"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bannar;
