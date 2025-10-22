import type React from "react";
import img from "../assets/images/about.png"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Heading from "../components/heading";

type MetricItem = {
  number: number;
  signal?: string;
  desc: string;
};

const data: MetricItem[] = [
  { number: 875, signal: "+", desc: "Happy Patients" },
  { number: 115, signal: "+", desc: "Experts Doctors" },
  { number: 95,  signal: "+", desc: "Hospital Room" },
  { number: 79,  signal: "+", desc: "Award Winner" },
];
const About: React.FC =()=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return(<div id="about" className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 container-layout">
        <div className="flex flex-col gap-4 md:gap-10 relative">
            <Heading withShape={true} hint="About" title="ABOUT US AT WINDSOR DENTAL CARE" isfullDescriptionWidth={true}
                     desc="Welcome to Windsor Dental Care where advanced technology meets compassionate care. We’re dedicated to making every smile healthy, beautiful, and affordable."
            />
            <motion.div
                ref={ref}
                className="grid grid-cols-2 gap-3 md:gap-5 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                {data.map((e, idx) => (
                    <div
                    key={`Metrics_${e.desc}_${idx}`}
                    className="card-metrics w-full p-4 sm:p-8 flex flex-col justify-center items-center text-center gap-1 sm:gap-2"
                    >
                    <div className="content-metrics flex gap-1 items-end justify-center">
                        <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold ">
                        {isInView ? (
                            <CountUp end={e.number} duration={2.5} />
                        ) : (
                            0
                        )}
                        {e.signal && <span className="text-xl">{e.signal}</span>}
                        </h3>
                    </div>
                    <p className="text-gray-100 text-lg ">{e.desc}</p>
                    </div>
                ))}
            </motion.div>
        </div>
        <div className="flex items-center">
            <img src={img} alt="about" />
        </div>
    </div>)
}
export default About