import React from "react";
import arrow from "../HomePage/arrow_right.png";

const HomeBanner1 = () => {
  return (
    <div className="flex h-[530px] items-start justify-center bg-[url(/public/images/banner1_bg.png)] bg-cover bg-no-repeat py-[100px] md:h-auto md:py-5">
      <div className=" container-xs mb-5 flex justify-center md:px-5">
        <div className=" flex w-full flex-col items-center gap-4">
          <p className=" mt-1.5 text-white sm:text-[36px] text-[46px] text-center font-semibold  md:text-[39px]">
            “Electricity is the backbone of modern living"
          </p>
          <div className=" flex flex-col items-center gap-[54px] self-stretch sm:gap-[72px]">
            <p className=" text-[20px] sm:text-[17px] self-stretch text-center !font-light text-white leading-[190%] mx-[110px] sm:mx-0">
              Electricity is fundamental to our daily lives, powering everything
              from our homes and workplaces to essential services and
              technological advancements. It drives the conveniences we often
              take for granted, such as lighting, heating, cooling, and
              electronic devices, making modern living more efficient and
              connected. Without electricity, much of the progress and comfort
              we enjoy today would not be possible.
            </p>
          </div>
          <div className=" flex flex-row justify-center items-center cursor-pointer  whitespace-nowrap bg-primary rounded h-[56px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              {" "}
              View all products
            </p>
            <img className=" w-6 h-6 mx-5" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner1;
