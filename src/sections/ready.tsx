import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Heading from "../components/heading";

const Ready = () => {
    return (
        <div className="container-layout ready">

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden content-ready rounded-xl"
            >
                <div className="relative z-1 flex flex-col justify-center items-center gap-3 py-10">
                    <Heading hint="" desc="" title="Ready to Smile Confidence?" isCenter={true} />
                    <p>
                        Discover your brightest smile with care that makes you feel
                        comfortable, confident, and radiant every day.
                    </p>

                    <Link target="_blank" to="https://appointments.praktika.net.au/online-booking/step1?Apikey=0d6cbe87-8f4d-4fa9-94a9-a54f847c5751">
                        <button className="btn flex justify-center items-center gap-2 !bg-[var(--light)] !text-[var(--main)]">
                            BOOK AN APPOINTMENT
                            <span>
                                {/* svg icon */}
                            </span>
                        </button>
                    </Link>
                </div>
            </motion.div>

        </div>
    );
};

export default Ready;
