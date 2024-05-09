import { styles, layout } from "@/styles/style";

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";
const Footer = () => (
  <section
    className={`flex py-5  xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col   bg-blue-gradient px-5 items-center justify-between`}
  >
    <div className="flex xl:flex-row lg:flex-row md:flex-row   sm:flex-row flex-col items-center">
      <Image
        src={logo}
        alt="hoobank"
        className="w-[150px] h-[50px] object-contain m-auto"
        height="auto"
        width="auto"
      />
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-slate-500 flex items-center mt-2">
        Copyright Ⓒ 2022 Otipy. All Rights Reserved.
      </p>
    </div>

    <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
        <Image
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer ${
            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
          }`}
          onClick={() => window.open(social.link)}
          height="auto"
          width="auto"
        />
      ))}
    </div>
  </section>
);

export default Footer;
