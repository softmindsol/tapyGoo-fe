"use client";

import React, { useState } from "react";
import CustomHeading from "../common/customHeading";
import Comma from "../../../public/assets/images/Comma.png";
import user1 from "../../../public/assets/images/user1.png";
import user2 from "../../../public/assets/images/user2.png";
import user3 from "../../../public/assets/images/user3.png";
import user4 from "../../../public/assets/images/user4.png";
import user5 from "../../../public/assets/images/user5.png";
import res1 from "../../../public/assets/images/res1.png";
import res2 from "../../../public/assets/images/res2.png";
import res3 from "../../../public/assets/images/res3.png";
import res4 from "../../../public/assets/images/res4.png";
import res5 from "../../../public/assets/images/res5.png";
import res6 from "../../../public/assets/images/res6.png";

import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      img: user1,
      name: "Emily Carter",
      position: "Marketing Director, Google INC.",
      content:
        "Working with Tapygoo was a game-changer for us. Their professionalism and attention to detail ensured the success of our project. We couldn't be happier with the results!",
    },
    {
      img: user2,
      name: "John Doe",
      position: "CEO, Apple",
      content:
        "Tapygoo's innovative solutions exceeded our expectations. Their team was highly collaborative, making the entire process seamless.",
    },
    {
      img: user3,
      name: "Sarah Wilson",
      position: "CTO, Microsoft",
      content:
        "Partnering with Tapygoo was the best decision we made. Their expertise and dedication brought our vision to life.",
    },
    {
      img: user4,
      name: "David Smith",
      position: "Founder, Amazon",
      content:
        "The team at Tapygoo consistently delivered high-quality results. Their attention to detail and creativity set them apart.",
    },
    {
      img: user5,
      name: "Jessica Brown",
      position: "Manager, Facebook",
      content:
        "We are thrilled with the outcome of our collaboration with Tapygoo. Their solutions were both innovative and effective.",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(testimonials[0]);

  return (
    <div className="container mx-auto lg:py-14 py-6 lg:px-0 px-4">
      <CustomHeading
        headingText="Testimonials"
        textColor={"text-textHeading"}
        fontSize={"lg:text-[26px] text-lg"}
        textAlign={"text-center"}
        fontWeight={"font-semibold"}
      />
      <p className="lg:text-base text-xs text-center text-[#696969] font-fontOutfit">
        Restaurants Already Trust TapyGoo
      </p>
      <div className="flex items-center justify-center lg:py-8 py-4">
        <Image src={Comma} alt="comma" />
      </div>
      <div className="2xl:px-24 lg:px-16">
        <p className="lg:text-[22px] lg:px-14 lg:leading-7 text-xs font-medium text-textHeading font-fontOutfit text-center">
          {selectedUser.content}
        </p>
        <CustomHeading
          headingText={selectedUser.name}
          textColor={"text-textHeading lg:mt-10 mt-5"}
          fontSize={"lg:text-[22px] text-base"}
          textAlign={"text-center"}
          fontWeight={"font-semibold"}
        />
        <p className="lg:text-base text-xs text-center text-[#696969] font-fontOutfit">
          {selectedUser.position}
        </p>
        <div className="userpics flex items-center justify-center lg:gap-4 gap-2 mt-5">
          {testimonials.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={item.name}
              className={`cursor-pointer ${
                selectedUser.img === item.img
                  ? "border-2  rounded-full border-customDarkGreen"
                  : ""
              }`}
              onClick={() => setSelectedUser(item)}
            />
          ))}
        </div>
      </div>
      <CustomHeading
        headingText="Restaurants"
        textColor={"text-textHeading mt-14"}
        fontSize={"lg:text-[28px] text-lg"}
        textAlign={"text-center"}
        fontWeight={"font-semibold"}
      />
      <div className="flex items-center lg:justify-between mt-8 flex-wrap gap-4">
        <Image src={res1} className="lg:w-auto w-[58px]" />
        <Image src={res2} className="lg:w-auto w-[58px]" />

        <Image src={res3} className="lg:w-auto w-[58px]" />
        <Image src={res4} className="lg:w-auto w-[58px]" />
        <Image src={res5} className="lg:w-auto w-[58px]" />
        <Image src={res6} className="lg:w-auto w-[58px]" />
      </div>
    </div>
  );
};

export default Testimonial;
