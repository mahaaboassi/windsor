import Heading from "../components/heading"
import Accordion from "../components/accordion"
import { faqsData } from "../data"
 

const FAQs = () => {

  return (
    <div className="relative container-layout faqs">

      <div className="flex flex-col gap-5">
        <Heading hint="Ask Away" desc="Find answers to the most common questions about our services, treatments, and patient care at Windsor Dental Care"
                  title="FREQUENTLY ASKED QUESTIONS" isfullDescriptionWidth={true} isCenter={true}
        />

        <div className="flex flex-col gap-4">
          <Accordion data={faqsData || []} />
        </div>
      </div>
    </div>
  )
}

export default FAQs
