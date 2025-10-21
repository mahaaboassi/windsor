import HeroForDynamicPages from "../../components/heroForDynamicPages"
import { useEffect } from "react"
import Ready from "../../sections/ready"

const Terms = ()=>{
    useEffect(()=>window.scrollTo({top:0}))
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages type="terms" hint="Please Read Carefully" title="Terms & Conditions"
                            desc="By accessing and using Windsor Dental Care’s website, you agree to the following terms and conditions. These outline your rights, responsibilities, and the guidelines for using our services and content."
                            link="/" label="Terms & conditions" subLabel="Home"
        />
        <div className="container-layout">
            <div className="flex flex-col gap-3">
                <p>At Windsor Dental Care, we prioritize making high-quality dental services both accessible and affordable. On this page, you’ll discover a comprehensive list of our latest promotions and offers, each tailored to meet your dental health needs.</p>
                <p>Before you take advantage of these excellent opportunities, please review the terms and conditions for each offer. Understanding these details is essential for a smooth and advantageous experience with our promotions. Whether you are visiting us for the first time or are a returning patient, these terms will guide you through the specifics of our special offers, including scope, eligibility, and any necessary requirements.</p>
                <p>We value transparency and clarity, and we have provided all the information you need on this page. Should you have any questions or require additional clarification, our friendly team is always on hand to help.</p>
            </div>
            <div>
                <h2>Opening Specials – $149 or Gap Free</h2>
                <ul className="flex flex-col gap-1">
                    <li><strong>Offer Details: </strong>This special promotion at Windsor Dental Care includes a thorough dental examination, two bitewing x-rays, a professional cleaning with scale and polish, and a fluoride treatment.</li>
                    <li><strong>Eligibility:</strong> This offer is exclusively for new patients at Windsor Dental Care.</li>
                    <li><strong>Booking Requirements:</strong> To utilize this offer, you must be a new patient and reference this promotion when booking your appointment.</li>
                    <li><strong>Pricing and Payment:</strong> The promotional price for the check-up and cleaning is $149. If you have dental insurance through a private health insurer, you might qualify for the ‘No-Gap’ option, which could eliminate any out-of-pocket expenses depending on your insurance plan.</li>
                    <li><strong>Insurance Verification:</strong> We advise patients to bring their private health insurance membership card to the appointment for verification and processing.</li>
                    <li><strong>Limitations and Exclusions:</strong> This offer cannot be combined with any other promotions or discounts. It is subject to availability and can be withdrawn or modified at the discretion of Windsor Dental Care.</li>
                    <li><strong>Rescheduling and Cancellation Policy: </strong> Please be mindful of our standard policies for rescheduling and cancellation when making your booking.</li>
                    <li><strong>Use of Offer:</strong> This promotion is for personal use only and is non-transferable.</li>
                    <li><strong>UConsent and Agreement:</strong>  By taking advantage of this offer, the patient agrees to the terms and conditions stated.</li>
                </ul>

            </div>
            <div>
                <h2>Teeth Whitening – $499</h2>
                <ul className="flex flex-col gap-1">
                    <li><strong>Offer Description:</strong>  Save $250 on our premium in-chair teeth whitening services. Enhance the brightness and whiteness of your smile with our state-of-the-art whitening technology and products.</li>
                    <li><strong>Eligibility:</strong> This promotion is available to both new and existing patients at Windsor Dental Care.</li>
                    <li><strong>Scheduling:</strong> Please mention this offer when scheduling your appointment to receive the discounted teeth whitening service.</li>
                    <li><strong>Treatment Suitability:</strong> A dental consultation will be conducted prior to the whitening treatment to confirm if the treatment is appropriate for each patient.</li>
                    <li><strong>Limitations and Exclusions:</strong> This offer cannot be combined with any other promotions or discounts. Availability is subject to change and the offer may be withdrawn or altered at Windsor Dental Care’s discretion.</li>
                    <li><strong>Health Considerations:</strong> Patients with specific dental conditions or undergoing certain treatments may not be suitable for teeth whitening. The final decision rests with the attending dentist, based on the patient’s oral health.</li>
                    <li><strong>Cancellation Policy:</strong> Standard cancellation and rescheduling policies apply to this offer.</li>
                    <li><strong>Consent and Agreement:</strong> By taking advantage of this offer, patients agree to the terms and conditions outlined.</li>
                    <li><strong>Promotion Period:</strong> This offer is available for a limited time. Please verify the validity and exact discount when booking your appointment.</li>
                </ul>
            </div>
        </div>
        <Ready/>
    </div>)
}
export default Terms