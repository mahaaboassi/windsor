import HeroForDynamicPages from "../../components/heroForDynamicPages"
// Images
import img_1 from "../../assets/images/test.png"
import img_2 from "../../assets/images/test_1.png"
import { categories, whyChooseUsData } from "../../data"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState, type ReactNode } from "react"
import Ready from "../../sections/ready"
import Heading from "../../components/heading"
import Reviews from "../../sections/review"
import Consultation from "../../sections/consultation"
import PaymentMethods from "../../sections/paymentMethods"
import Accordion from "../../components/accordion"
import StepsCard from "../../components/stepCard"

type Service = {
    icon: string;
    link?: string;
    title: string;
    desc: string;
};

type Section = {
    img: string;
    hint: string;
    title: string;
    desc_1: ReactNode;
    desc_2?: ReactNode;
    service?: Partial<Service>[];
};

type Hero = {
    hint: string;
    title: string;
    desc: string;
    subLabel: string;
};
type Services = {
    id: number;
    link: string,
    hero: Hero;
    sections: Section[];
    faqs?: {
        question: string;
        answer: ReactNode;
        options?: string;
    }[]
}
type ItemContact = {
    icon?: string | undefined;
    title: string,
    content: string,
}
type Item = {
    id: number;
    link: string;
    category : string;
    services : Services[],
    img: string,
    img_sm: string,
    desc?: ReactNode;
    section?: {
        desc?: ReactNode;
        options: {
            title?: string; 
            content: string; 
            link: string;
        }[];
        img: string;
    },
    chooseUs?: ItemContact[],

};
type ItemWhyChoose = {
    icon?: string | undefined;
    title: string,
    content: string,
}
const Service = ()=>{
    const navigate = useNavigate()
    const { category, link} = useParams()
    const [ data, setData ] = useState<Services | undefined>(undefined)
    const [ dataWhyUs, setDataWhyUs ] = useState<ItemWhyChoose[] | undefined>(undefined)
    const [cat, setCat] = useState<Item | undefined>(undefined);
    useEffect(()=>{
        if (!category || !link) return;
        window.scrollTo({top:0})
        const catValue = categories.find(e => e.link === `/${category}`);
        const service = catValue?.services.find(e => e.link === `${category}/${link}`);
        if(!catValue) navigate("/")
        if(catValue && !service) navigate(`${catValue?.link}`)
        if(!catValue && !service) navigate("/")
        setCat(catValue)
        setData(service);
        // Why choose us data
        const randomItems = [...whyChooseUsData]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
        setDataWhyUs(randomItems)    
    },[link])
    return( <div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages img={cat?.img ?? ""} img_sm={cat?.img_sm ?? ""} hint={data?.hero?.hint ?? ""} title={data?.hero?.title ?? ""}
                            desc={data?.hero?.desc ?? ""}
                            link={cat?.link ?? ""} label={cat?.category ?? ""} subLabel={data?.hero?.subLabel ?? ""}
        />
        <Reviews/>
        <Consultation/>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 container-layout">
            <div className="flex flex-col gap-5 md:gap-10">
                <Heading desc="" title={data?.sections[0].title ?? ""} hint={data?.sections[0].hint ?? ""} />
                <div className="desc">{data?.sections[0].desc_1}</div>
            </div>
            <div className="relative">
                <div className="sticky top-50 flex justify-center"><img className="max-h-[300px] xs:max-h-[400px] md:max-h-[500px] object-contain" src={data?.sections[0].img? data?.sections[0].img:img_2} alt="Image" /></div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container-layout">
            <div className="relative">
                <div className="sticky top-50 flex justify-center"><img className="max-h-[300px] xs:max-h-[400px] md:max-h-[500px] object-contain" src={data?.sections[1].img? data?.sections[1].img:img_1} alt="Image" /></div>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
                <Heading desc="" title={data?.sections[1].title ?? ""} hint={data?.sections[1].hint ?? ""} />
                <div className="desc">{data?.sections[1].desc_1}</div>
                <div className="flex flex-col gap-3">
                    {
                        data?.sections[1].service?.map((e,idx)=>(
                            <div key={`${e.title}_${idx}`} className="flex gap-3 option">
                                <div className="w-[20px] h-[20px] border border-[2px] border-[var(--grey_2)] rounded-full bg-[var(--main)] flex justify-center items-center"></div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="title">{e.title}</div>
                                    <p className="">{e.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 container-layout">
            <div className="flex flex-col gap-5 md:gap-10">
                <Heading desc="" title={data?.sections[2].title ?? ""} hint={data?.sections[2].hint ?? ""} />
                <div className="desc">{data?.sections[2].desc_1}</div>
                <div className="flex flex-col gap-3">
                    {
                        data?.sections[2].service?.map((e,idx)=>(
                            <div key={`${e.title}_${idx}`} className="flex gap-3 option">
                                <div className="w-[20px] h-[20px] border border-[2px] border-[var(--grey_2)] rounded-full bg-[var(--main)] flex justify-center items-center"></div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="title">{e.title}</div>
                                    <p className="">{e.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="relative">
                <div className="sticky top-50 flex justify-center"><img className="max-h-[300px] xs:max-h-[400px] md:max-h-[500px] object-contain" src={data?.sections[2].img? data?.sections[2].img:img_2} alt="Image" /></div>
            </div>
        </div>
        {  dataWhyUs && dataWhyUs.length> 0 && <StepsCard type={link || ""} data={dataWhyUs||[]} hint="Why Us" title={`Why Choose WINDSOR DENTAL`} />}
        <div className="flex flex-col gap-5 container-layout">
            <Heading hint="Ask Away" desc="Find answers to the most common questions"
                title="FREQUENTLY ASKED QUESTIONS" isfullDescriptionWidth={true} isCenter={true}
            />
            <Accordion data={data?.faqs || []} />
        </div>
        
        <Ready/>
        <PaymentMethods/>
    </div>)
}
export default Service