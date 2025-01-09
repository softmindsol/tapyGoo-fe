import React from "react";
import { RiMailFill } from "react-icons/ri";
import { FaPhoneAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import Link from "next/link";

const HeaderBar = () => {
  return (
    <div className="bg-customDarkGreen h-[48px]">
      <div className="container mx-auto lg:px-0 px-2">
        <div className="flex items-center justify-between py-3">
          {/* Contact Info */}
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="flex items-center gap-1">
              <RiMailFill className="text-customOrange lg:text-xl text-base" />
              <span className="font-fontOutfit text-white font-normal lg:text-sm text-xs">
                tapygoo148@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-customOrange lg:text-lg text-sm" />
              <span className="font-fontOutfit text-white font-normal lg:text-sm text-xs">
                +0123 456 7890
              </span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2 lg:gap-3">
            {[
              { icon: FaFacebook, href: "#" },
              { icon: BiLogoInstagramAlt, href: "#" },
              { icon: FaLinkedinIn, href: "#" },
              { icon: FaXTwitter, href: "#" },
              { icon: GrYoutube, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <Link key={index} href={href}>
                <Icon className="text-white hover:text-customOrange lg:text-lg text-sm" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
