import React from "react";
import calender from "../../../public/assets/images/calender.png"
import Image from "next/image";
const Schedule = () => {
  return (
    <>
      <div className="container mx-auto lg:px-0 px-4 py-8">
        <div className="grid lg:grid-cols-2">
          <div>
            <h2 className="font-fontOutfit font-semibold lg:text-[26px] text-lg text-textHeading ">
              Create Your Schedule
            </h2>
            <p className="font-fontOutfit font-medium text-[#696969] lg:text-lg text-xs">
              Effortlessly plan your work hours with Tapygoo's scheduling
              feature!
            </p>
          </div>
          <Image src={calender} />
        </div>
      </div>
    </>
  );
};

export default Schedule;
