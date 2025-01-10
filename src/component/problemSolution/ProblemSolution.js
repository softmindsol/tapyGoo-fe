import React from "react";
import CustomHeading from "../common/customHeading";
import { TbSettingsCog } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import line from "../../../public/assets/images/line.png";
import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";
const ProblemSolution = () => {
  const commonProblem = [
    {
      icon: <MdMiscellaneousServices color="white" size={30} />,
      title: "Manual management of ",
      desc: "WhatsApp orders.",
    },
    {
      icon: <IoMdTimer color="white" size={30} />,
      title: "Wasting time transcribing  ",
      desc: "information to the POS.",
    },
    {
      icon: <SlBadge color="white" size={30} />,
      title: "Human errors affecting ",
      desc: "service quality. ",
    },
  ];
  const solution = [
    {
      icon: <TbSettingsCog color="white" size={30} />,
      title: "Direct integration with  ",
      desc: " POS.",
    },
    {
      icon: <IoMdTimer color="white" size={30} />,
      title: "Time savings and improved",
      desc: "accuracy..",
    },
    {
      icon: <MdVerifiedUser color="white" size={30} />,
      title: "Enhanced customer satisfaction with ",
      desc: "a seamless process.",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-10 lg:px-0 px-4">
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
                className="bg-white p-5 rounded-md shadow-lg flex items-center mb-4 gap-4"
              >
                <div className="bg-customDarkGreen rounded-full p-4">
                  {item.icon}
                </div>
                <div>
                  <p className="lg:text-lg text-base font-medium font-fontOutfit text-[#696969]">
                    {item.title}
                  </p>
                  <p className="lg:text-lg text-base font-medium font-fontOutfit text-[#696969]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:flex hidden flex-col items-center py-16 justify-between">
            <Image src={line} alt="liene" />
            <Image src={line} alt="liene" />
            <Image src={line} alt="liene"/>
          </div>
          <div className="">
            <CustomHeading
              headingText="Solutions"
              fontSize={"lg:text-[20px] text-lg"}
              textAlign={"text-left mb-4"}
              fontWeight={"font-semibold"}
            />
            {solution?.map((item, index) => (
              <div
                key={index}
                className="bg-customBgGray p-5 rounded-md shadow-lg flex items-center mb-4 gap-4"
              >
                <div className="bg-customDarkGreen rounded-full p-4">
                  {item.icon}
                </div>
                <div>
                  <p className="lg:text-lg text-base font-medium font-fontOutfit text-[#696969]">
                    {item.title}
                  </p>
                  <p className="lg:text-lg text-base font-medium font-fontOutfit text-[#696969]">
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
