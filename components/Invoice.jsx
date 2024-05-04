import { AnimatedContent } from ".";
import { InvoiceFlow, star } from "../assets";
import { layout } from "@/styles/style";
import { motion } from "framer-motion";
import Image from "next/image";
const motionAnimation = {
  whileHover: {
    transform: "translateX(100px)",
  },
};

const FeatureCard = ({ managementList, isMobile }) => (
  <motion.div
    {...(!isMobile ? motionAnimation : {})}
    className={`flex flex-row md:p-6 p-3 rounded-[20px] md:w-[100%] sm:w-[100%] xs:w-[100%] feature-card`}
  >
    <div className="flex-1 flex flex-col lg:ml-3 xl:ml-3 md:ml-2 sm:ml-2 ml-0 gap-5">
      <h4 className="font-poppins font-semibold text-gradient-dark lg:text-[35px] text-[30px]">
        Invoice
      </h4>
      <p className="text-[20px] text-slate-700">
        Qualify and Nurture your leads through a tailored journey
      </p>
      <div className="flex-col xl:gap-5 lg:gap-5 md:gap-3 sm:gap-3 gap-2 flex">
        {managementList?.map((item) => {
          return (
            <div className="flex-1 flex flex-row ml-3 gap-5" key={item?.id}>
              <Image
                src={star}
                style={{ width: "5%" }}
                height="auto"
                width="auto"
                alt="star"
              />
              <span className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] text-slate-500">
                {item?.content}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const Invoice = ({ managementList }) => (
  <AnimatedContent>
    <section
      id="resources"
      className={`${layout.section} w-[100%]   sm:m-auto gap-10 `}
    >
      <div
        className={`${layout.sectionImg} md:w-[33%] sm:w-full flex-row m-auto`}
      >
        <FeatureCard managementList={managementList} />
      </div>
      <div
        className={`${layout.sectionInfo} md:w-[70%] lg:w-[35%] w-[100%] sm:mb-4  `}
      >
        <Image
          src={InvoiceFlow}
          style={{ width: "100%", margin: "auto" }}
          height="auto"
          width="auto"
          alt="invoice"
        />
      </div>
    </section>
  </AnimatedContent>
);

export default Invoice;
