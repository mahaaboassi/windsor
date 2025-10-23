import HeroForDynamicPages from "../../components/heroForDynamicPages"
import Contact from "../../sections/contactUS"
import Ready from "../../sections/ready"
import { useEffect } from "react"
import type { ReactNode } from "react"
import shape from "../../assets/images/Vector.png"
import  { Link } from "react-router-dom"
import { contactInfo } from "../../data"

import contact from "../../assets/images/contact.png"
import contact_sm from "../../assets/images/contact_small.png"

type infoItem = {
  icon : ReactNode,
  value: string,
  title: string,
  link: string
}

const ContactPage = ()=>{
    useEffect(()=>window.scrollTo({top:0}))
    return(<div className="flex flex-col gap-10 md:gap-20 ">
        <HeroForDynamicPages img={contact} img_sm={contact_sm} type="contact" hint="Get in Touch" title="Contact Us"
                            desc="Whether you’re ready to book an appointment, have a question about our dental services, or just want to learn more about Windsor Dental Care, we’re here to help. Reach out to our friendly team today your smile is our priority."
                            link="/" label="Contact Us" subLabel="Home"
        />
        <div className="container-layout flex flex-col gap-10 items-center">
            <div className="heading relative">
                <div className="absolute -top-10 left-0 animate-moveAround"><img src={shape} alt="Shape" /></div>
                <h2>MAKE SCHEDULE EASIER AND SIMPLER FOR PATIENTS</h2>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 steps">
                {contactInfo.map((e:infoItem,idx)=>(<div className={`contact-card flex flex-col gap-1 lg:gap-2 p-3 md:p-5`} key={`Steps_${e.title}_${idx}`}>

                    <div className="flex justify-center">{e.icon}</div>
                    <h3 className={`flex justify-center`}>{e.title}</h3>
                    <p className={`flex break-all justify-center text-center `}>
                        {e.title != "Opening Hours"? <Link target="_blank" to={e.link}>{e.value}</Link>:e.value}
                    </p>
                    <div className={`w-1/4 h-[3px] rounded m-auto  ${idx == 0 ? "bg-[var(--light)]" : "bg-[var(--grey_1)]"}`}></div>
                </div>))}

            </div>

        </div>
        <Contact/>
        <Ready/>
    </div>)
}
export default ContactPage