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
    <div className="flex flex-col sm:mt-7 md:mt-15 justify-center gap-6 bg-[url('/img/footer-wave.png')] text-primary bg-fit bg-center bg-no-repeat min-h-[500px]">
      <div className="logo">
        <img src="img/Logo.png" />
      </div>
      <span className="font-[26px]">
        <p className="text-[#ffffff]">
          Temper-proof, Blockchain-Backed Degrees
        </p>
        <p className="text-[#ffffff]">Verified in Real Time</p>
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
  );
}
