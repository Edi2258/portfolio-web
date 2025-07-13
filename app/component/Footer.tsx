import { socialMedia } from "@/data";
import Buttons from "./ui/Buttons";

const Footer = () => {
  return (
<footer className="w-full pt-20 pb-10 relative overflow-hidden bg-white dark:bg-darkBlue" id="contact">
  {/* Radial background grid */}
  <div className="w-full absolute left-0 -bottom-32 min-h-[28rem]">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 [background-size:60px_60px] opacity-60 
      [background-image:radial-gradient(#b0b0b0_1.5px,transparent_1.5px)] 
      dark:[background-image:radial-gradient(#505050_1.5px,transparent_1.5px)]"
    />
    {/* Soft overlay */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/40 dark:bg-darkBlue/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  </div>

  {/* Main footer content */}
  <div className="relative z-10 flex flex-col items-center">
    <p className="text-white-200 md:mt-10 my-5 text-center">
      Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
    </p>
    <a
  href={`mailto:edijunaedi3617@gmail.com?subject=Let%27s%20Connect&body=Hi%20Edi,%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20more.%0D%0A`}
>
  <Buttons
            title="Let's get in touch"
            position="center" icon={undefined}  />
</a>

  </div>

  {/* Footer bottom */}
  <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center">
    <p className="md:text-base text-sm md:font-normal font-light">
      © 2025 Edi Junaedi.
    </p>

    <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
      {socialMedia.map((info) => (
        <div
          key={info.id}
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <img src={info.img} alt="icons" width={20} height={20} />
        </div>
      ))}
    </div>
  </div>
</footer>
  );
};

export default Footer;