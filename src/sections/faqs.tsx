import { useState, useRef } from "react"
import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

import img_1 from "../assets/images/logo_1.png"
import img_2 from "../assets/images/logo_2.png"
import img_3 from "../assets/images/logo_3.png"
import img_4 from "../assets/images/logo_4.png"
import img_5 from "../assets/images/logo_5.png"
import img_6 from "../assets/images/logo_6.png"
import img from "../assets/images/FAQs.png"

type ItemContact = {
  question: string
  answer: ReactNode
  options: string
}

const data: ItemContact[] = [
  {
    question: "Does your clinic accept health funds?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes, we accept all health funds. We will be able to provide you with
          the benefits from your health fund for all our dental services at our
          practice. We also use HICAPS machines for fast and automatic claims on
          the same day. We accept all health funds like:
        </p>
        <div className="flex flex-wrap gap-3">
          {[img_1, img_2, img_3, img_4, img_5, img_6].map((logo, i) => (
            <img key={i} className="w-16 h-auto" src={logo} alt="Health fund logo" />
          ))}
        </div>
      </div>
    ),
    options: "",
  },
  {
    question: "What Solutions Are Available for Anxiety or Fear During Dental Procedures?",
    answer: (
      <div className="space-y-2">
        <p>
          We at Windsor Dental Care recognize that dental visits can be daunting
          for some. It’s our priority to ensure you feel confident and at ease
          before your procedure.
        </p>
        <p>
          Our welcoming staff is dedicated to making you comfortable throughout
          your visit.
        </p>
        <p>
          Should you think General dentistry might be right for you, please let
          our team know or reach out to us at 02 4571 2720.
        </p>
      </div>
    ),
    options: "",
  },
  {
    question: "What Steps Should I Take to Get Ready for My Dental Visit?",
    answer: (
      <div className="space-y-2">
        <p>
          Preparing adequately for your dental visit is crucial, regardless of
          the type of treatment you’re receiving. Here are some tips to help you
          get ready for your next appointment:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Confirm your appointment’s date and time.</li>
          <li>Understand the purpose of your visit.</li>
          <li>Brush and floss before your visit.</li>
          <li>Arrive on time as a sign of respect for the schedule.</li>
          <li>Bring your personal and medical information if you’re new.</li>
          <li>Prepare questions about your dental health.</li>
        </ul>
      </div>
    ),
    options: "",
  },
  {
    question: "What Makes Regular Dental Examinations Crucial?",
    answer: (
      <div className="space-y-2">
        <p>
          During your dental check-up, the dentist will examine your teeth and
          gums for early signs of issues. This allows for preventive care and
          helps stop problems before they worsen.
        </p>
        <p>
          Regular visits help prevent tooth decay, remove plaque buildup, and
          ensure long-term oral health.
        </p>
        <p>
          Your dentist will also offer advice on improving your dental hygiene
          routine, which contributes to overall health and quality of life.
        </p>
      </div>
    ),
    options: "",
  },
]

const FAQs = () => {
  const ref = useRef<HTMLDivElement | null>(null); 
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 container-layout">
      <div className="hidden md:flex">
        <img src={img}  alt="Dentist" className="object-contain" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="sub-heading">
          <h2 className="">FREQUENTLY ASKED QUESTIONS</h2>
          <p>Find answers to the most common questions about our services, treatments, and patient care at Windsor Dental Care</p>
        </div>
        <div className="">
          {data.map((item, idx) => (
            <div key={idx} className="border-b border-[var(--light)] last:border-0">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex gap-2 bg-[var(--main)] cursor-pointer rounded text-left p-4 flex justify-between items-center gap-2 font-semibold text-[var(--light)]"
              >
                <div className="w-full">{item.question}</div>
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
                    <div ref={ref} className="p-4 text-sm">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs
