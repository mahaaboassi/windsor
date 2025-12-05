import HeroForDynamicPages from "../../components/heroForDynamicPages"
import { offersData} from "../../data"
import Team from "../../sections/team"
import { useEffect } from "react"
import Contact from "../../sections/contactUS"
import Ready from "../../sections/ready"
import { motion } from "framer-motion";
import img from "../../assets/images/about_.webp"
import img_sm from "../../assets/images/about_sm.webp"
import Heading from "../../components/heading"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card:any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


const SpecialOffers = ()=>{
    useEffect(()=>window.scrollTo({top:0}),[])
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages offers">
        <HeroForDynamicPages img={img} img_sm={img_sm} hint="Special Offers" title="Quality Care, Smart Prices"
                            desc="We’re a dental practice that offers all aspects of dentistry, from preventive care and fillings to teeth whitening and wisdom teeth removal. Our team is dedicated to providing quality dental care in a relaxed and comfortable atmosphere."
                            link="/" label="Home" subLabel="Special Offers"
        />
        <div className="container-layout flex flex-col gap-10">
            <Heading desc="At Windsor Clinic, we’re committed to making high-quality dental care easier and more affordable. Our special offers are designed to help you receive the treatments you need while staying within your budget — so you can focus on a healthier, brighter smile without the stress." 
                     title="Exclusive Offers to Make Your Care More Accessible" hint="Affordable Dental Solutions" />
            <motion.div
                className="grid sm:grid-cols-2 gap-5 md:gap-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {offersData.map((item, idx) => (
                <motion.div
                    key={`PaymentMethod_${idx}`}
                    className="bg-white rounded-xl text-center shadow p-5 flex flex-col items-center gap-2 border border-[var(--main)] card-method"
                    variants={card}
                >
                    <div className="flex justify-center w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-[var(--main)] shadow-xl flex items-center justify-center">{item.img}</div>
                    <h3 className="text-[1rem] sm:text-[1.5rem] font-black text-[var(--main)]">{item.title}</h3>
                    <p className="text-[0.8rem] sm:text-[0.9rem]">{item.desc}</p>
                </motion.div>
                ))}
            </motion.div>
        </div>

        <Ready/>
        <Team/>
        <Contact/>
    </div>)
}
export default SpecialOffers