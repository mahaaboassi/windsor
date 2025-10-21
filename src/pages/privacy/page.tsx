import HeroForDynamicPages from "../../components/heroForDynamicPages"
import { useEffect } from "react"
import Ready from "../../sections/ready"

const Privacy = ()=>{
    useEffect(()=>window.scrollTo({top:0}))
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages type="terms" hint="Our Commitment to You" title="Privacy Policy"
                            desc="Your privacy is important to us. At Windsor Dental Care, we are committed to protecting your personal information and ensuring that your experience with us is safe, secure, and confidential. Learn how we collect, use, and safeguard your data."
                            link="/" label="Privacy Policy" subLabel="Home"
        />

        <Ready/>
    </div>)
}
export default Privacy