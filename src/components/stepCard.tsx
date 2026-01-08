    import { useEffect, useState } from "react";
import Heading from "../components/heading"
    import { motion,  } from "framer-motion";

    const container = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.18, 
        delayChildren: 0.1, 
        },
    },
    };

    const item = {
    hidden: { opacity: 0, x: -40, filter: "blur(2px)" },         
    show: { opacity: 1, x: 0, filter: "blur(0px)",         
        transition: {
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as any,
        },
    },
    };

    type ItemContact = {
        icon?: React.ReactNode ;
        title: string,
        content: string,
    }
    type Props = {
        data: ItemContact[],
        title: string,
        hint: string,
        desc?: string,
        isCenter?: boolean,
        withShape?: boolean,
        type: string,
    }
    const StepsCard = ({type, data, title, hint, desc, isCenter=true, withShape=true }:Props)=>{
        const [ items, setItems ] =  useState<ItemContact[]>([])
        useEffect(()=>{
            setItems(data);
        },[data])
        return(<div className="container-layout flex flex-col gap-10 items-center">
            <Heading hint={hint} title={title}
                    desc={desc || ""}
                    isCenter={isCenter}
                    withShape={withShape}        
            />
            <div >
                <motion.div 
                    key={type}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true, amount: 0.2 }} 
                    className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 steps "
                >
                    {items.map((e, idx) => (
                    <motion.div
                        key={`Steps_${e.title}_${idx}`}
                        variants={item}
                        className={`steps-card flex flex-col gap-1 lg:gap-2 p-3 md:p-5 `} 
                    >
                        <div className={`num flex justify-center items-center`}>
                            <div>{idx+1}</div>
                        </div>
                        <div className="flex  justify-center">{e.icon}</div>
                        <h3 className={`flex justify-center text-center`}>{e.title}</h3>
                        <p className={`flex justify-center text-center`}>{e.content}</p>
                        <div className={`w-1/4 h-[3px] rounded m-auto line-card`}></div>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>)
    }
    export default StepsCard