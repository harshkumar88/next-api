import { card } from "../assets";
import { styles, layout } from "@/styles/style";

import Button from "./Button";
import Image from "next/image";
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <Image
        src={card}
        alt="billing"
        className="w-[100%] h-[100%]"
        height="auto"
        width="auto"
      />
    </div>
  </section>
);

export default CardDeal;
