import { styles, layout } from "@/styles/style";

import { robot } from "../assets";
import GetStarted from "./GetStarted";
import { AnimatedContent } from ".";
import Image from "next/image";
const Hero = () => {
  return (
    <AnimatedContent>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Tool.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Resolve issues, tailor conversations, collaborate with ease—and
            build great customer relationships
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative h-[68vh]`}
        >
          <Image
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
            loading="eager"
            height="auto"
            width="auto"
            priority
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
    </AnimatedContent>
  );
};

export default Hero;
