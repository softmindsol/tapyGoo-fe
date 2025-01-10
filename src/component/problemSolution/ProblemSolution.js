import React from "react";
import CustomHeading from "../common/customHeading";
import { TbSettingsCog } from "react-icons/tb";
const ProblemSolution = () => {
  const commonProblem = [
    {
      icon: <TbSettingsCog color="white" size={30} />,
      title: "Manual management of ",
      desc: "WhatsApp orders.",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-10">
        <CustomHeading
          headingText="Problem & Solution"
          fontSize={"lg:text-[26px] text-lg"}
          textAlign={"text-center"}
          fontWeight={"font-semibold"}
        />
        <p className="text-center font-fontOutfit text-base font-medium text-[#696969]">
          Why keep losing time and orders?
        </p>
        <div className="grid lg:grid-cols-3 mt-4">
          <div className="">
            <CustomHeading
              headingText="Common Problems"
              fontSize={"lg:text-[20px] text-lg"}
              textAlign={"text-left mb-4"}
              fontWeight={"font-semibold"}
            />
            {commonProblem?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-md shadow-lg border flex items-center gap-4"
              >
                <div className="bg-customDarkGreen rounded-full p-4">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg font-medium font-fontOutfit text-[#696969]">
                    {item.title}
                  </p>
                  <p className="text-lg font-medium font-fontOutfit text-[#696969]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemSolution;
