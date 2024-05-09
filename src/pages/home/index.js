import { styles } from "@/styles/style";
import { Business, Navbar, Hero, Support, Footer } from "../../../components";
import { useEffect, useRef, useState } from "react";
import { ZenomLogo } from "../../../assets";
import Management from "../../../components/Management";
import ContactManagement from "../../../components/ContactManagement";
import Opportunity from "../../../components/Opportunity";
import Invoice from "../../../components/Invoice";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";

const Home = (props) => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [loader, setLoader] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 800px)");

  const { features, managementList, supportFeature } = props;

  useEffect(() => {
    setLoader(false);
    window.addEventListener("scroll", function (event) {
      handleScroll();
    });
  }, []);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 800);
    }
  }, [loader]);

  function handleScroll() {
    const scrolledToTop = window.scrollY === 0;
    setChangeHeader(!scrolledToTop);
  }

  return loader ? (
    <div className="center_div">
      <Image
        src={ZenomLogo}
        alt="Zenome"
        className={`w-[30vw] h-[30%] bg-black`}
        loading="eager"
        height="auto"
        width="auto"
      />
    </div>
  ) : (
    <div className="bg-primary w-full  relative">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${
          changeHeader ? "bg-blue-gradient" : "bg-white"
        } fixed_header`}
      >
        <div className={`w-full`}>
          <Navbar changeHeader={changeHeader} />
        </div>
      </div>
      <div className={` ${styles.flexStart} hero_bg `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxwrapperWidth}  `}>
          <Business isMobile={isMobile} features={features} />
          <Support isMobile={isMobile} supportFeature={supportFeature} />
          <Management isMobile={isMobile} managementList={managementList} />
          <ContactManagement
            isMobile={isMobile}
            managementList={managementList}
          />
          <Opportunity isMobile={isMobile} managementList={managementList} />
          <Invoice isMobile={isMobile} managementList={managementList} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export async function getServerSideProps({ req }) {
  const baseUrl = req ? `${req.headers.host}` : "";
  const completeUrl = `http://${baseUrl}/api/info`;

  const res = await fetch(completeUrl);
  const data = await res?.json();

  return {
    props: {
      ...data?.data,
    },
  };
}
