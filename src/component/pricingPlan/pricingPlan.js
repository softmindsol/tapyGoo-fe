import React from "react";
import CustomHeading from "../common/customHeading";
import pricing from "../../../public/assets/images/pricing.png";
import Image from "next/image";
const PricingPlan = () => {
  const pricingPlan = [
    {
      title: "Basic Plan",
      price: "$9.99",
      features: [
        "Unlimited Users",
        "50 GB Storage",
        "24/7 Support",
        "500 Emails/Month",
      ],
      btnText: "Start Free Trial",
    },
    {
      title: "Professional Plan",
      price: "$19.99",
      features: [
        "Unlimited Users",
        "100 GB Storage",
        "24/7 Support",
        "1000 Emails/Month",
      ],
      btnText: "Start My Plan",
    },
    {
      title: "Custom Plan",
      price: "$29.99",
      features: [
        "Unlimited Users",
        "200 GB Storage",
        "24/7 Support",
        "2000 Emails/Month",
      ],
      btnText: "Upgrade My Plan",
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-0 px-4 py-6">
        <CustomHeading
          headingText="Pricing Plan"
          fontSize={"lg:text-[42px] text-[22px]"}
          textAlign={"text-center"}
          fontWeight={"font-semibold"}
        />
        <div className="grid lg:grid-cols-3 gap-3 mt-6">
          {pricingPlan.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-xl bg-white">
              <div
                className={`py-8 h-[168px] ${
                  index === 1 || index === 3
                    ? "bg-customOrange"
                    : "bg-customDarkGreen"
                } rounded-lg`}
              >
                <h2 className="text-white font-fontOutfit text-[28px] text-center font-semibold">
                  {item.title}
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <div className=" -mt-20 bg-white shadow-xl rounded-full p-6">
                  <Image src={pricing} alt="pricing" />
                </div>
              </div>
              <div className="px-10 mt-8">
                <h2 className="text-[48px] font-fontOutfit font-semibold">
                  {item.price}
                  <span className="text-base text-[#696969]">/Monthly</span>
                </h2>
                {item?.features.map((subitem, subindex) =>(
                    <div key={subindex} className="flex items-center gap-5">
                        
                        </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
