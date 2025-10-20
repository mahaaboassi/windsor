import HeroForDynamicPages from "../../components/heroForDynamicPages"
// Images
import img_1 from "../../assets/images/img.png"
import img_2 from "../../assets/images/about.png"
import { aboutData, services } from "../../data"
import { useParams } from "react-router-dom"
import { useEffect, useState, type ReactNode } from "react"
import FAQs from "../../sections/faqs"


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
    category: string;
    link: string;
    label: string;
    subLabel: string;
};

type Item = {
    id: number;
    link: string;
    hero: Hero;
    sections: Section[];
};

const Service = ()=>{
    const { category, link} = useParams()
    const [ data, setData ] = useState<Item | undefined>(undefined)
    useEffect(()=>{
        setData(services.find(e=> e.link == `${category}/${link}`))
        console.log(link);
        
    },[link])
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages hint={data?.hero?.hint ?? ""} title={data?.hero?.title ?? ""}
                            desc={data?.hero?.desc ?? ""}
                            link={data?.hero?.link ?? ""} label={data?.hero?.label ?? ""} subLabel={data?.hero?.subLabel ?? ""}
        />
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 container-layout">
            <div className="flex flex-col gap-5 md:gap-10">
                <div className="content-heading">
                    <span>{data?.sections[0].hint}</span>
                    <h2 className="uppercase">{data?.sections[0].title}</h2>
                </div>
                <div>{data?.sections[0].desc_1}</div>
            </div>
            <div><img className="" src={img_1} alt="Image" /></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container-layout">
            <div className="relative">
                <div className="sticky top-30"><img src={img_2} alt="Image" /></div>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
                <div className="content-heading">
                    <span>{data?.sections[1].hint}</span>
                    <h2 className="uppercase">{data?.sections[1].title}</h2>
                </div>
                <div>{data?.sections[1].desc_1}</div>
                <div className="flex flex-col gap-3">
                    {
                        data?.sections[1].service?.map((e,idx)=>(
                            <div key={`${e.title}_${idx}`} className="flex gap-3">
                                <div className="w-[20px] h-[20px] border border-[2px] border-[var(--grey_2)] rounded-full bg-[var(--main)] flex justify-center items-center"></div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="title">{e.title}</div>
                                    <p>{e.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            
        </div>
        <FAQs/>
    </div>)
}
export default Service