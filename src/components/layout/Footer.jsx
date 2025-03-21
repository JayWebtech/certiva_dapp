import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { RiDiscordLine, RiTwitterXFill } from "react-icons/ri";

const socials = [
  { Icon: <RiTwitterXFill />, Link: "#" },
  { Icon: <TbBrandFacebook />, Link: "#" },
  { Icon: <RiDiscordLine />, Link: "#" },
];

export default function Footer() {
  return (
    <div className="bg-[url('/img/footer-wave.png')]">
    <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5 ">
    <div className="flex flex-col sm:mt-7 md:mt-15 justify-center gap-6  text-primary bg-fit bg-center bg-no-repeat min-h-[500px]">
      <div className="logo">
        <img src="img/logo.svg" />
      </div>
      <span className="font-[26px]">
        <p className="text-white">
          Temper-proof, Blockchain-Backed Degrees
        </p>
        <p className="text-white">Verified in Real Time</p>
      </span>
      <div className="flex gap-4">
        {socials.map((social, index) => (
          <a
            href={social?.Link}
            key={index}
            className="bg-primary text-secondary text-4xl h-[70px] w-[70px] rounded-full flex justify-center items-center"
          >
            {social?.Icon}
          </a>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}
