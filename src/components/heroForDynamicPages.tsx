import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import img_bg from "../assets/images/dynamic_banner.png"
import img_small from "../assets/images/dynamic_banner_sm.png"

type Item = {
  hint:string,
  title:string,
  desc:string,
  link:string,
  label:string,
  subLabel:string,
  type?: string,
  img?:string,
  img_sm?: string,
  isDetailsBlog?: boolean,
}

const HeroForDynamicPages = ({hint,title,link,label,subLabel, img, img_sm,isDetailsBlog}:Item) => {
  return (
    <section className="hero-small container-layout flex flex-col gap-5 overflow-hidden relative dynamic-pages">
      {/* Animated Background */}
      <AnimatePresence mode="sync">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${window.innerWidth<1000 ?(img_sm ? img_sm: img_small):(img ? img:img_bg)})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative flex flex-col gap-2 mid:gap-5 z-10">
        <div>
          <span className="uppercase">{title}</span>
          <h1 className={`uppercase ${isDetailsBlog ? "text-center" : ""}`}>{hint }</h1>
          {/* <h2>TAKE CARE OF YOUR SMILE</h2> */}
        </div>
    
      </div>
      {!isDetailsBlog && <div className="absolute bottom-0 layout-container-left flex gap-2 z-50">
        <div className="flex gap-2 text-md items-center">
            <Link className="text-[var(--main)]" to={link}><strong>{label}</strong></Link>
            <div className="text-[var(--grey_1)]">/</div>
            <div className="text-[var(--grey_1)] text-sm">{subLabel}</div>
        </div>
      </div>}
    </section>
  );
};

export default HeroForDynamicPages;
