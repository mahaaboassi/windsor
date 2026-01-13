import { useState } from "react"
import shape from "../assets/images/Vector.webp"
import img_1 from "../assets/images/doc_1.png"
import img_2 from "../assets/images/doc_2.png"
import Heading from "../components/heading"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"
import { bookLink } from "../data"

type ItemContact = {
    img: string,
    name: string,
    desc: string,
    desc_1: string,
    desc_2: string,
    desc_3: string,
    desc_4: string,
}
const data: ItemContact[] = [{
        img: img_1,
        name: "Dr Anosha Baqai",
        desc: "Female General Dentist",
        desc_1: "Dr. Anosha Baqai is a highly skilled and dedicated general dentist committed to providing comprehensive and patient-centered dental care. She obtained her Bachelor of Dental Surgery in 2008 and has since built a strong foundation in clinical dentistry. After completing her Australian Dental Council (ADC) registration in 2018, she has continued to expand her expertise through advanced education and training.",
        desc_2: "With a gentle approach and a strong focus on patient comfort, Dr. Anosha emphasizes clear communication and personalized treatment planning. She holds a Diploma in Orthodontics and Dentofacial Orthopaedics from Universitat Jaume I (2023) and is currently pursuing a Postgraduate Diploma in Dental Implants, reflecting her commitment to delivering high-quality, modern dental solutions.",
        desc_3: "Dr. Anosha has completed extensive professional training, including medical emergency management, first aid, CEREC jumpstart for dental crowns and bridgework, and dentures in general practice. She has also undertaken multiple implant-related courses, ensuring her skills remain aligned with the latest advancements in dental technology and techniques.",
        desc_4: "Outside of her clinical practice, Dr. Anosha values continuous learning and professional development. She is passionate about enhancing patient experiences and takes pride in helping her patients achieve healthy, confident smiles."
    },{
        img: img_2,
        name: "Dr. Loveleen Kaur Garcha",
        desc: "Female General Dentist",
        desc_1: "Dr. Loveleen Kaur Garcha is a dedicated and compassionate dentist committed to delivering exceptional dental care to families. She graduated her Bachelor of Dental Surgery (BDS) from India in 2015 and has since been actively practising dentistry. After successfully passing the Australian Dental Examinations, she continued her professional journey in Australia.",
        desc_2: "With excellent communication skills and a gentle approach, Dr. Loveleen fosters positive relationships with her patients, ensuring their comfort throughout treatment. She places a strong emphasis on patient education and well-being, striving to provide the highest standard of care.",
        desc_3: "Fluent in English, Punjabi, and Hindi, Dr. Loveleen is able to connect with a diverse range of patients, enhancing their experience and comfort during visits. She is also committed to staying up-to-date with the latest advancements in dental practice to continuously improve her skills.",
        desc_4: "Outside of her professional commitments, Dr. Garcha enjoys spending quality time with her family and friends."
    },]

const Team = ()=>{
    const [openPopup, setOpenPopup] = useState<ItemContact | null>(null);
    return(<div className="container-layout flex flex-col gap-10 items-center">
        <div className="absolute top-0 z-1 right-10 animate-moveAround"><img src={shape} alt="Shape" /></div>
        <Heading isCenter={true} hint="OUR TEAM" title="MEET OUR AMAZING DOCTORS"
                 desc="Our skilled dentists are dedicated to creating healthy, beautiful smiles. Combining advanced techniques with gentle care, they ensure every visit is comfortable, safe, and personalized just for you."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 md:mb-10">
           {data.map((e,idx)=>( <div key={`Doctor_${e.name}_${idx}`} className="md:mb-0 mb-20">
                <div className="relative ">
                    <img src={e.img} alt={e.name} />

                    {/* Animated Info Card */}
                    <motion.div
                    className="absolute -bottom-20 left-5 right-5 bg-[var(--light)] shadow-lg rounded-lg flex flex-col justify-center items-center p-3 gap-2"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                    <div className="text-center">
                        <h2 className="font-semibold text-lg">{e.name}</h2>
                        <p className="text-sm">{e.desc}</p>
                        <span
                        onClick={() => setOpenPopup(e)}
                        className="block mt-1 text-sm cursor-pointer hover:text-[var(--main)] transition"
                        >
                        See More
                        </span>
                    </div>

                    <Link target="_blank" to={bookLink}>
                        <button className="btn !w-full !text-sm">
                            BOOK AN APPOINTMENT
                        </button>
                    </Link>
                    </motion.div>
                </div>
                
            </div>))}
            
        </div>
        <AnimatePresence>
            {openPopup && (
                <motion.div
                className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenPopup(null)}
                >
                <motion.div
                    className="relative bg-white max-w-2xl w-full rounded-xl shadow-xl p-6 overflow-y-auto max-h-[90vh]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                    onClick={() => setOpenPopup(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-[var(--main)] cursor-pointer text-xl"
                    >
                    ✕
                    </button>

                    {/* Content */}
                    <div className="flex flex-col gap-4">
                    <img
                        src={openPopup.img}
                        alt={openPopup.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                    />

                    <div className="text-center">
                        <h2 className="text-xl font-semibold">{openPopup.name}</h2>
                        <p className="text-sm text-gray-500">{openPopup.desc}</p>
                    </div>

                    <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
                        <p>{openPopup.desc_1}</p>
                        <p>{openPopup.desc_2}</p>
                        <p>{openPopup.desc_3}</p>
                        <p>{openPopup.desc_4}</p>
                    </div>

                    <div className="w-full">
                        <Link target="_blank" to={bookLink}>
                            <button className="btn mt-4 !text-sm !w-full">
                                BOOK AN APPOINTMENT
                            </button>
                        </Link>
                    </div>
                    </div>
                </motion.div>
                </motion.div>
            )}
            </AnimatePresence>

    </div>)
}
export default Team