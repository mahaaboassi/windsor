import HeroForDynamicPages from "../../components/heroForDynamicPages"
import { paymentMethodsData } from "../../data"
import Team from "../../sections/team"
import { useEffect } from "react"
import Contact from "../../sections/contactUS"
import Ready from "../../sections/ready"
import { motion } from "framer-motion";
import img from "../../assets/images/payment.webp"
import img_sm from "../../assets/images/payment_sm.webp"
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


const PaymentMethodsPage = ()=>{
    useEffect(()=>window.scrollTo({top:0}),[])
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages img={img} img_sm={img_sm} hint="Payment Options" title="Easy to Pay"
                            desc="We’re a dental practice that offers all aspects of dentistry, from preventive care and fillings to teeth whitening and wisdom teeth removal. Our team is dedicated to providing quality dental care in a relaxed and comfortable atmosphere."
                            link="/" label="Home" subLabel="Payment Options"
        />
        <div className="container-layout flex flex-col gap-10">
            <Heading desc="At Windsor Clinic, we believe quality dental care should be accessible to everyone. That’s why we provide a range of easy and affordable payment options, allowing you to focus on your smile without worrying about costs." 
                     title="Flexible ways to pay for your care" hint="Affordable dental solutions" />
            <motion.div
                className="grid sm:grid-cols-2 gap-5 md:gap-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {paymentMethodsData.map((item, idx) => (
                <motion.div
                    key={`PaymentMethod_${idx}`}
                    className="bg-white rounded-xl text-center shadow p-5 flex flex-col items-center gap-2 border border-[var(--main)] card-method"
                    variants={card}
                >
                    <div className="flex justify-center">
                    <img className="w-full xs:w-3/4" src={item.img} alt={item.title} />
                    </div>
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
export default PaymentMethodsPage