import Hero from "../../components/hero"
import About from "../../sections/about"
import Contact from "../../sections/contactUS"
import FAQs from "../../sections/faqs"
import Gallery from "../../sections/gallery"
import Ready from "../../sections/ready"
import Steps from "../../sections/steps"
import Team from "../../sections/team"
import Treatment from "../../sections/treatment"

const Home = ()=>{
  return (
    <div className="flex flex-col gap-10 md:gap-20">
        <Hero/>
        <About/>
        <Steps/>
        <Treatment/>
        <Gallery/>
        <Team/>
        <Ready/>
        <FAQs/>
        <Contact/>
        
    </div>
  )
}
export default Home