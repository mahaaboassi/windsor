import { useRef, useEffect, useState } from "react";
import Heading from "../components/heading";
import { motion } from "framer-motion";
import { paymentMethodsData } from "../data";

const PaymentMethods = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    // Calculate scroll width once images load
    useEffect(() => {
        if (sliderRef.current) {
            setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }
    }, []);

    return (
        <div className="container-layout flex flex-col gap-10 items-center">
            <Heading
                hint="Easy to Pay"
                title="Payment Options Available"
                desc="Choose from multiple secure and convenient payment options designed to make your dental visit simple, flexible, and stress-free."
                isCenter={true}
                withShape={true}
            />

            {/* AUTO-PLAY SLIDER */}
            <motion.div className="overflow-hidden w-full">
                <motion.div
                    ref={sliderRef}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-5 py-3"
                    animate={{ x: [-0, -width] }}
                    transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity
                    }}
                >
                    {/* Duplicate items to create seamless loop */}
                    {[...paymentMethodsData, ...paymentMethodsData].map((e, idx) => (
                        <motion.div
                            key={idx}
                            className="min-w-[200px] md:min-w-[260px] bg-white rounded-xl shadow p-5 flex flex-col gap-2 border border-[var(--main)]"
                        >
                            <div className="flex justify-center">
                                <img src={e.img} alt="" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PaymentMethods;
