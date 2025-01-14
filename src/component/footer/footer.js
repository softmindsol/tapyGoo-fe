import React from "react";
import { FaPhoneAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      list: [
        {
          pagename: "Home",
        },
        {
          pagename: "About Us",
        },
        {
          pagename: "Product Feature",
        },
        {
          pagename: "Pricing",
        },
        {
          pagename: "FAQs",
        },
        {
          pagename: "Contact Us",
        },
      ],
    },
    {
      title: "Policy",
      list: [
        {
          pagename: "Terms & Conditions",
        },
        {
          pagename: "Privacy Policy",
        },
        {
          pagename: "Accessibility",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-customDarkGreen ">
        <div className="container mx-auto lg:px-0 px-4 py-16">
          <div className="grid lg:grid-cols-2">
            <div>
              <h2 className="lg:text-[26px] text-[20px] text-white font-fontOutfit font-bold">
                TapyGoo
              </h2>
              <p className="font-fontOutfit lg:text-lg text-xs text-white pt-2 lg:pr-48">
                With TapyGoo, connect your WhatsApp orders directly to your POS.
                Simple, fast, and hassle-free.
              </p>
              <div className="flex items-center my-7 gap-2 lg:gap-3">
                {[
                  { icon: FaFacebook, href: "#" },
                  { icon: BiLogoInstagramAlt, href: "#" },
                  { icon: FaLinkedinIn, href: "#" },
                  { icon: FaXTwitter, href: "#" },
                  { icon: GrYoutube, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <Link key={index} href={href}>
                    <div className="bg-white hover:bg-customOrange rounded-full p-2">
                      <Icon className="text-black hover:text-white lg:text-lg text-sm" />
                    </div>
                  </Link>
                ))}
              </div>
              <h2 className="lg:text-[22px] font-fontOutfit font-bold text-white mt-10">
                Subscribe Newsletter
              </h2>
              <div className="bg-[#1c1c1c] flex items-center justify-between rounded-[36px] px-4 py-2 lg:w-[40%] mt-4">
                <input
                  type="email"
                  placeholder="Email..."
                  className="outline-none placeholder:font-fontOutfit placeholder:text-white font-fontOutfit bg-transparent font-medium"
                />
                <div className="bg-customOrange rounded-full p-2">
                  <FaArrowRightLong color="white" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              {footerLinks.map((item, index) => (
                <div key={index}>
                  <h2 className="font-fontOutfit text-white font-bold lg:text-[26px] text-lg py-6">
                    {item.title}
                  </h2>
                  {item.list.map((subitem, subindex) => (
                    <ul>
                      <li
                        className="text-white font-fontOutfit lg:text-lg text-xs py-1"
                        key={subindex}
                      >
                        {subitem.pagename}
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-[1px] py-7">
          <h2 className="lg:text-lg text-sm font-fontOutfit font-medium text-center text-white">
            Copyright ©2025 TapyGoo, All rights reserved.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
