import React from "react";
import CustomHeading from "../common/customHeading";
import Image from "next/image";
import integration from "../../../public/assets/images/integration.png";
import order from "../../../public/assets/images/order.png";
import bell from "../../../public/assets/images/bell.png";
import analytics from "../../../public/assets/images/analytics.png";

import featureVideo from "../../../public/assets/images/featureVideo.png";
const ProductFeatures = () => {
  const feature = [
    {
      img: integration,
      title: "East integration",
      description: "Compatible with major POS systems.",
    },
    {
      img: order,
      title: "Automated Orders",
      description: "Whatsapp orders go directly your POS.",
    },
    {
      img: bell,
      title: "Real-Time Notifications",
      description: "Never miss an order.",
    },
    {
      img: analytics,
      title: "Analytics and Reports",
      description: "Gain Insights to make better decisions.",
    },
  ];
  return (
    <>
      <div className="bg-customBgGray">
        <div className="container mx-auto grid lg:grid-cols-2 py-10 lg:px-0 px-3">
          <div className="lg:order-1 order-2 lg:mt-0 mt-6">
            <CustomHeading
              headingText="Product Features"
              fontSize={"lg:text-[26px] text-lg"}
              fontWeight={"font-semibold"}
            />
            <p className="lg:text-base text-xs font-medium font-fontOutfit text-[#696969]">
              Everything you Need in One Place
            </p>
            <div className="mt-4">
              {feature?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b-[1px] border-customDarkGreen py-5 lg:mr-28"
                >
                  <Image
                    src={item.img}
                    className="w-[40px] object-cover"
                    alt="video image"
                  />
                  <div>
                    <h2 className="lg:text-lg text-base font-semibold font-fontOutfit text-textHeading capitalize">
                      {item.title}
                    </h2>
                    <p className=" font-fontOutfit lg:text-base text-xs font-medium text-[#696969]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:order-2 order-1 flex lg:items-end items-center lg:justify-end justify-center">
            <Image
              src={featureVideo}
              className="lg:w-[510px] w-[295px] lg:h-[500px] h-[295px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFeatures;
