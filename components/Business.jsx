import { AnimatedContent } from ".";
import { dashboardDesign, send, shield, star } from "../assets";
import { styles, layout } from "@/styles/style";

import { motion } from "framer-motion";
import Image from "next/image";

const FeatureCard = ({ icon, title, content, index, features }) => (
  <div
    className={`flex flex-row md:p-6 p-3 rounded-[20px] md:w-[45%] sm:w-[100%] xs:w-[100%] ${
      index !== features.length - 1 ? "sm:mb-2" : "sm:mb-2"
    } feature-card `}
  >
    <div
      className={`md:w-[64px] md:h-[64px]  sm:w-[64px] sm:h-[64px] w-[0] h-[0] rounded-full ${styles.flexCenter} bg-dimBlue `}
    >
      <Image
        src={icon}
        alt="star"
        className="w-[50%] h-[50%] object-contain"
        height="auto"
        width="auto"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gradient-dark text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-600 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = ({ features }) => (
  <>
    <section
      id="product"
      className={`${styles.flexCenter} flex-col flex-wrap sm:mb-5 mb-6 pt-10 gap-3  `}
    >
      <span className=" text-gradient-dark xl:text-[50px] lg:text-[48px] md:text-[40px] text-[30px]">
        Secure and intelligent conversational AI
      </span>
      <span className="text-slate-600 lg:text-[24px] text-[18px]">
        Advanced ML and NLP technologies continuously learning for improved
        understanding and personalized responses
      </span>
    </section>
    <AnimatedContent>
      <section id="features" className={`${layout.section} px-3 sm:flex-col`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`${layout.sectionInfo} md:w-[40%] sm:mb-4 `}
        >
          <Image
            src={dashboardDesign}
            alt="dashboard"
            height="auto"
            width="auto"
          />
        </motion.div>

        <div
          className={`${layout.sectionImg} md:w-[60%] sm:w-full   flex-row `}
        >
          {features?.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              index={index}
              features={features}
            />
          ))}
        </div>
      </section>
    </AnimatedContent>
  </>
);

export default Business;
