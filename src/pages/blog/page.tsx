import HeroForDynamicPages from "../../components/heroForDynamicPages"
import { blogData } from "../../data"
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


const Blog = ()=>{
    useEffect(()=>window.scrollTo({top:0}),[])
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages img={img} img_sm={img_sm} hint="BLogs" title="Latest Updates"
                            desc=""
                            link="/" label="Home" subLabel="Blog"
        />
        <div className="container-layout flex flex-col gap-10">
            <Heading desc="" 
                     title="Explore Our Latest Blog Updates" hint="Updates" />
            <motion.div
                className="grid sm:grid-cols-3 gap-5 md:gap-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {blogData.map((item, idx) => (
                <motion.a
                    href={item.link || "#"}
                    key={`PaymentMethod_${idx}`}
                    className="bg-white rounded-xl overflow-hidden group shadow flex flex-col items-center gap-2 "
                    variants={card}
                >
                    <div className="flex justify-center w-full h-[200px] ">
                      <img className="h-full object-cover w-full group-hover:scale-110 transition-transform duration-300" src={item.img} alt={item.title} />
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                      <div className="text-sm font-bold">{item.date}</div>
                      <h3 className="text-[0.8rem] sm:text-[1.2rem] font-black text-[var(--main)]">{item.title}</h3>
                      <p className="text-[0.7rem] sm:text-[0.8rem]">{item.desc.substring(0,150)}...</p>
                    </div>
                </motion.a>
                ))}
            </motion.div>
        </div>
        <Ready/>
        <Contact/>
    </div>)
}
export default Blog