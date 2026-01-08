import HeroForDynamicPages from "../../components/heroForDynamicPages";
import { offersData } from "../../data";
import Team from "../../sections/team";
import { useEffect, useState } from "react";
import Contact from "../../sections/contactUS";
import Ready from "../../sections/ready";
import { motion } from "framer-motion";
import img from "../../assets/images/offers.webp";
import img_sm from "../../assets/images/offers_sm.webp";
import Heading from "../../components/heading";
import { Link } from "react-router-dom";

/* =======================
   Animations
======================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card: any = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const hoverBase: any = {
  initial: { opacity: 1, y: 0 },
  hover: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const hoverDetails: any = {
  initial: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =======================
   Component
======================= */

const SpecialOffers = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="flex flex-col gap-10 md:gap-20 dynamic-pages offers">
      <HeroForDynamicPages
        img={img}
        img_sm={img_sm}
        hint="Special Offers"
        title="Quality Care, Smart Prices"
        desc="We’re a dental practice that offers all aspects of dentistry, from preventive care and fillings to teeth whitening and wisdom teeth removal. Our team is dedicated to providing quality dental care in a relaxed and comfortable atmosphere."
        link="/"
        label="Home"
        subLabel="Special Offers"
      />

      <div className="container-layout flex flex-col gap-10">
        <Heading
          hint="Affordable Dental Solutions"
          title="Exclusive Offers to Make Your Care More Accessible"
          desc="At Windsor Clinic, we’re committed to making high-quality dental care easier and more affordable. Our special offers are designed to help you receive the treatments you need while staying within your budget — so you can focus on a healthier, brighter smile without the stress."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {offersData.map((item, idx) => {
            const isActive = activeCard === idx;

            return (
              <motion.div
                key={`Offer_${idx}`}
                variants={card}
                className="relative bg-white rounded-xl shadow p-5 flex flex-col items-center gap-4 border border-[var(--main)] overflow-hidden cursor-pointer"
                onClick={() => {
                  if (isMobile) {
                    setActiveCard(isActive ? null : idx);
                  }
                }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1,
                        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.09)",
                      }
                    : undefined
                }
              >
                {/* Base Content */}
                <motion.div
                  variants={hoverBase}
                  initial="initial"
                  animate={isMobile && isActive ? "hover" : "initial"}
                  whileHover={!isMobile ? "hover" : undefined}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[var(--main)] shadow-xl flex items-center justify-center">
                    {item.img}
                  </div>

                  <h3 className="text-[1rem] sm:text-[1.3rem] font-bold text-[var(--main)]">
                    {item.title}
                  </h3>

                  <p className="md:hidden text-[0.65rem] text-zinc-400">
                    Tap to view details
                  </p>
                </motion.div>

                {/* Details */}
                <motion.div
                  variants={hoverDetails}
                  initial="initial"
                  animate={isMobile && isActive ? "hover" : "initial"}
                  whileHover={!isMobile ? "hover" : undefined}
                  className="absolute inset-0 flex flex-col gap-2 bg-white/95 backdrop-blur-md p-5 rounded-xl"
                >
                  <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
                    {item.desc}
                  </p>

                  <h4 className="md:mt-2 font-semibold text-[var(--main)]">
                    {item.title2}
                  </h4>

                  <ul className="space-y-1">
                    {item.options?.map((opt, i) => (
                      <li
                        key={i}
                        className="text-[0.7rem] sm:text-[0.8rem]"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>

                  <Link to='https://appointments.praktika.net.au/online-booking/step1?Apikey=0d6cbe87-8f4d-4fa9-94a9-a54f847c5751' target="_blank">
                    <button className="btn mt-auto !py-1 md:!py-2 !text-xs md:!text-sm">
                      Book Now
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Ready />
      <Team />
      <Contact />
    </div>
  );
};

export default SpecialOffers;
