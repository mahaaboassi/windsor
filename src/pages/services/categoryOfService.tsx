import HeroForDynamicPages from "../../components/heroForDynamicPages"
// Images
import { categories } from "../../data"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState, type ReactNode } from "react"
import Ready from "../../sections/ready"
import Heading from "../../components/heading"
import Reviews from "../../sections/review"
import Consultation from "../../sections/consultation"
import PaymentMethods from "../../sections/paymentMethods"
import StepsCard from "../../components/stepCard"
import Contact from "../../sections/contactUS"


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

const CategoryOfService = ()=>{
    const navigate = useNavigate()
    const { category} = useParams()
    // const [ data, setData ] = useState<Services[] | undefined>(undefined)
    const [cat, setCat] = useState<Item | undefined>(undefined);
    useEffect(()=>{
        if (!category) return;
        window.scrollTo({top:0})
        const catValue = categories.find(e => e.link === `/${category}`);
        if(!catValue) navigate("/")
        setCat(catValue)
    },[category])
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages img={cat?.img ?? ""} img_sm={cat?.img_sm ?? ""}  hint={cat?.category ?? ""} title={"In Windsor"}
                            desc={""}
                            link={"/"} label={"Home"} subLabel={cat?.category ??  ""}
        />
        <Reviews/>
        <Consultation/>
        <div className="container-layout flex flex-col gap-5">
            <Heading hint={`Overview`} title={`${cat?.category || ""} `} desc=""/>
                <div className="desc">{cat?.desc}</div>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 container-layout">
            <div className="flex flex-col gap-5">
                <Heading hint={"Foundational Dental Services"} title={`What ${cat?.category} Covers`} desc=""/>
                <div className="flex flex-col gap-2 ">{
                    cat?.section?.options.map((e,idx)=>{
                        return(<div style={{background: "linear-gradient(180deg, #eeeeee, white, #dedddd)"}} className=" p-3 rounded-xl flex flex-col gap-3" key={`${e.content}_${idx}`}>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-lg">{e.title}</h4>
                                <div className="desc">{e.content}</div>
                            </div>
                            <Link className="w-fit" to={e.link}>
                                <div className="text-[var(--main)] font-bold !text-md">Learn More</div>
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
            <div className="relative">
                <div className="sticky top-30"><img src={cat?.section?.img || ""} alt="Image" /></div>
            </div>
        </div>

        <StepsCard type={cat?.category || ""} data={cat?.chooseUs ?? []} hint="Why Us  " title="Why Choose Our Dental Clinic" />
        <Ready/>
        <PaymentMethods/>
        <Contact/>
    </div>)
}
export default CategoryOfService