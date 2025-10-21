import HeroForDynamicPages from "../../components/heroForDynamicPages"
import Contact from "../../sections/contactUS"
import Ready from "../../sections/ready"
import { useEffect } from "react"
import type { ReactNode } from "react"
import shape from "../../assets/images/Vector.png"
import  { Link } from "react-router-dom"

type infoItem = {
  icon : ReactNode,
  value: string,
  title: string,
  link: string
}
const infoData: infoItem[] = [{
  icon : <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
  <path fill-rule="evenodd" clipRule="evenodd" d="M11.7435 0C13.9252 0 16.0578 0.645139 17.8718 1.85383C19.6858 3.06253 21.0996 4.78049 21.9345 6.79048C22.7694 8.80047 22.9878 11.0122 22.5622 13.146C22.1366 15.2798 21.086 17.2398 19.5434 18.7782C18.0007 20.3165 16.0352 21.3642 13.8955 21.7886C11.7558 22.2131 9.53787 21.9952 7.52229 21.1627C5.5067 20.3301 3.78395 18.9202 2.57189 17.1113C1.35983 15.3023 0.712891 13.1756 0.712891 11C0.712891 8.08262 1.87504 5.28472 3.94369 3.22182C6.01234 1.15893 8.81802 0 11.7435 0ZM10.2139 5.46419H11.5622C11.6811 5.46466 11.795 5.51197 11.8791 5.59581C11.9631 5.67965 12.0106 5.79322 12.011 5.91178V11.1003H16.7526C16.8715 11.1007 16.9853 11.148 17.0694 11.2319C17.1535 11.3157 17.2009 11.4293 17.2014 11.5478V12.8906C17.2009 13.0092 17.1535 13.1228 17.0694 13.2066C16.9853 13.2904 16.8715 13.3377 16.7526 13.3382H9.76326V5.9082C9.76373 5.78933 9.81142 5.67549 9.89588 5.5916C9.98034 5.50771 10.0947 5.46061 10.2139 5.46061V5.46419Z" fill="white"/>
  </svg>,
  title: "Opening Hours",
  value: "Mon-Fri 9:00 am - 6:00 pm",
  link: ""
},{
  icon : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
        <path d="M5.03906 2C5.11029 2 5.16132 2.01565 5.18262 2.02539L5.19629 2.03125L5.20898 2.03711C5.21055 2.0378 5.21256 2.03845 5.21387 2.03906L5.21777 2.04395L8.01367 5.80469L8.02246 5.81641C8.09641 5.91442 8.14965 5.99567 8.18848 6.06152C8.13418 6.12727 8.06026 6.20893 7.96094 6.30371L7.93359 6.33105L7.01758 7.23926L7.01855 7.24023C6.55446 7.69556 6.30161 8.26405 6.24512 8.8584L6.2334 9.11914L6.24023 9.33008C6.25472 9.5345 6.29006 9.7192 6.33496 9.89062L6.36426 10.0049L6.4082 10.1152C6.44512 10.2092 6.48149 10.292 6.49316 10.3184L6.53809 10.4473L6.62891 10.6064C6.94578 11.1608 7.42402 11.7745 7.99023 12.4131L7.99707 12.4209L8.00488 12.4297C8.56822 13.0509 9.17656 13.6918 9.83984 14.3369L9.85254 14.3496L9.86621 14.3623C10.5334 14.9872 11.1994 15.5874 11.8906 16.1475L11.8936 16.1494C12.5806 16.7041 13.2208 17.1425 13.8027 17.4365L13.8955 17.4834L13.9912 17.5195C13.9774 17.5142 13.9698 17.5115 13.9727 17.5127C13.9769 17.5145 13.9851 17.5176 14.0029 17.5254C14.0322 17.5382 14.0959 17.5665 14.165 17.5947L14.2061 17.6113L14.248 17.627C14.6265 17.7623 14.9673 17.789 15.2227 17.7891C15.9561 17.7891 16.6036 17.5124 17.0977 17.041L17.0967 17.04L18.0039 16.1875L18.0137 16.1787C18.2305 15.9718 18.356 15.8958 18.3916 15.8779L18.3984 15.874C18.4428 15.8929 18.4961 15.9168 18.5586 15.9502L18.8467 16.1221L22.7783 18.7861C22.7773 18.8836 22.7557 19.0037 22.6855 19.1455C22.5658 19.3874 22.4151 19.612 22.21 19.8281C21.8013 20.2579 21.3904 20.5295 20.9541 20.7002L20.9434 20.7041C20.4659 20.8939 19.9341 21 19.332 21C18.4043 20.9999 17.3471 20.7914 16.1572 20.3076C14.9208 19.8049 13.6639 19.1197 12.3994 18.2412H12.3984C11.259 17.4468 10.1708 16.577 9.125 15.624L8.67871 15.21C7.65918 14.2265 6.73031 13.2053 5.88965 12.1475L5.5332 11.6895C4.73606 10.6309 4.0935 9.59748 3.60742 8.59668L3.4082 8.16797C2.922 7.06428 2.71289 6.08767 2.71289 5.2207C2.71293 4.68799 2.81077 4.20487 2.99121 3.77441L2.99609 3.76367C3.16223 3.36085 3.43632 2.95878 3.87109 2.56738L3.88672 2.55371L3.90234 2.53906C4.36376 2.10565 4.73423 2.00007 5.03906 2Z" stroke="#A6CE38" strokeWidth="4" strokeMiterlimit="10"/>
        </svg>,
  title: "Call Us",
  value: "(02) 4571 2720",
  link: "tel:0245712720"
},{
  icon : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
      <path d="M14.2507 12.4959L25.0638 5.56875C24.6291 5.24358 24.1012 5.06613 23.5578 5.0625H4.94356C4.40014 5.06613 3.87223 5.24358 3.4375 5.56875L14.2507 12.4959Z" fill="#A6CE38"/>
      <path d="M14.7066 14.2091L14.5628 14.2766H14.4951C14.4172 14.3113 14.3344 14.3341 14.2497 14.3441C14.1795 14.3529 14.1084 14.3529 14.0382 14.3441H13.9705L13.8267 14.2766L2.48891 6.96973C2.43474 7.17353 2.40631 7.38327 2.4043 7.5941V19.4066C2.4043 20.0779 2.67172 20.7218 3.14775 21.1965C3.62377 21.6712 4.2694 21.9379 4.9426 21.9379H23.5568C24.23 21.9379 24.8756 21.6712 25.3517 21.1965C25.8277 20.7218 26.0951 20.0779 26.0951 19.4066V7.5941C26.0931 7.38327 26.0647 7.17353 26.0105 6.96973L14.7066 14.2091Z" fill="#A6CE38"/>
      </svg>,
  title: "Email Us",
  value: "reception@windsordentalcare.com.au",
  link: "mailto:reception@windsordentalcare.com.au"
}]
const ContactPage = ()=>{
    useEffect(()=>window.scrollTo({top:0}))
    return(<div className="flex flex-col gap-10 md:gap-20 ">
        <HeroForDynamicPages type="contact" hint="Get in Touch" title="Contact Us"
                            desc="Whether you’re ready to book an appointment, have a question about our dental services, or just want to learn more about Windsor Dental Care, we’re here to help. Reach out to our friendly team today — your smile is our priority."
                            link="/" label="Contact Us" subLabel="Home"
        />
        <div className="container-layout flex flex-col gap-10 items-center">
            <div className="heading relative">
                <div className="absolute -top-10 left-0 animate-moveAround"><img src={shape} alt="Shape" /></div>
                <h2>MAKE SCHEDULE EASIER AND SIMPLER FOR PATIENTS</h2>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-5 steps">
                {infoData.map((e,idx)=>(<div className={`steps-card flex flex-col gap-1 lg:gap-2 p-3 md:p-5 ${idx == 0 ? "bg-[var(--main)]" : "bg-[var(--light)]"}`} key={`Steps_${e.title}_${idx}`}>

                    <div className="flex justify-center">{e.icon}</div>
                    <h3 className={`flex justify-center ${idx == 0 ? "text-[var(--light)]" : "text-[var(--dark)]"}`}>{e.title}</h3>
                    <p  className={`flex break-all justify-center text-center ${idx == 0 ? "text-[var(--light)]" : "text-[var(--grey_1)]"}`}>
                        {e.title != "Opening Hours"? <Link to={e.link}>{e.value}</Link>:e.value}
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