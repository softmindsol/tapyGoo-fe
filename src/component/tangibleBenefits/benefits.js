import React from "react";
import benefitsimg from "../../../public/assets/images/benefits.png";
import Image from "next/image";
import CustomHeading from "../common/customHeading";
const Benefits = () => {
  const benefits = [
    { benefit: "Managing Orders", percentage: "75%", width: 75 },
    { benefit: "Human Errors", percentage: "90%", width: 90 },
    { benefit: "Current POS System", percentage: "60%", width: 60 },
  ];
  return (
    <>
      <div className="bg-customDarkGreen py-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-3 lg:px-0 px-4">
          <div className="lg:order-1 order-2 2xl:pt-24 lg:pt-16 pt-10">
            <CustomHeading
              headingText="Tangible Benefits"
              textColor={"text-white"}
              fontSize={"lg:text-[26px] text-lg"}
              textAlign={"text-left"}
              fontWeight={"font-semibold"}
            />
            <p className="lg:text-base text-xs text-white font-fontOutfit pt-2 lg:mb-10 mb-5">
              More Efficiency for Your Team, More Happiness for Your Customers
            </p>

            {benefits?.map((item, index) => (
              <div key={index} className="lg:mb-8 mb-5 lg:mr-24">
                <div className="flex items-center justify-between">
                  <h2 className="lg:text-base text-sm text-white font-fontOutfit font-medium">
                    {item.benefit}
                  </h2>
                  <h2 className="lg:text-base text-sm text-white font-fontOutfit font-medium">
                    {item.percentage}
                  </h2>
                </div>
                <div className="w-full bg-gray-300 rounded-lg h-1 overflow-hidden mt-2">
                  <div
                    className="h-full bg-customOrange transition-all duration-300"
                    style={{ width: `${item.width}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:order-2 order-1">
            <Image src={benefitsimg} alt="benefitss" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
