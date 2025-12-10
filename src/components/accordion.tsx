import { useState, useRef } from "react"
import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"


type Item = {
  question: string
  answer: ReactNode
  options?: string
}

type Props = { data: Item[] }

const Accordion = ({data}:Props) => {
  const ref = useRef<HTMLDivElement | null>(null); 
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (<div className="flex flex-col gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="border-b border-[var(--light)] last:border-0">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex gap-4 border border-[2px] border-[var(--main)] cursor-pointer rounded text-left p-4 flex justify-between items-center gap-2 font-semibold text-[var(--main)]"
              >
                <div className="w-full text-sm xs:text-base md:text-[1.1rem]">{item.question}</div>
                <span className="text-xl text-[var(--main)] flex justify-center items-center w-[25px] h-[25px] rounded-full bg-[var(--light)]">{activeIndex === idx ? "−" : "+"}</span>
              </button>

              <AnimatePresence mode="sync" >
                {activeIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: ref.current ? ref.current.scrollHeight : "auto",
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden shadow"
                  >
                    <div ref={ref} className="p-4 text-xs xs:text-sm ">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
  )
}

export default Accordion
