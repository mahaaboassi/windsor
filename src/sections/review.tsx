import Heading from "../components/heading"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ItemContact = {
    img?: string,
    name: string,
    date: string,
    desc: string,
}
const data: ItemContact[] = [{
        img: "",
        date: "5 months ago",
        name: "Mason Page",
        desc: "The team at Windsor dental care are incredible! Anosha is an expert at her craft. The first time ever I’ve had a pain free dental clean. Honestly if you want a stress free treatment with great advice and knowledge about oral care. These guys are it.",
    },{
        img: "",
        date: "3 months ago",
        name: "Aidan Collyer",
        desc: "Dr Anosha is a wonderful dentist, and the team are all very pleasant and welcoming. I'd highly recommend them for the professionalism and care, in addition to the overall approach to health and wellbeing.",
    },{
        img: "",
        date: "a month ago",
        name: "Nicole Sherry",
        desc: "Very relaxed and pain free clean and check up. Such a lovely clean and fresh practice with friendly staff. And best thing was the no gap clean for my first visit. Thank you.",
    },{
        img: "",
        date: "a year ago",
        name: "Maheen Baqai",
        desc: "I had a wonderful experience with Dr Anosha. She is very experienced and I would highly recommend her. She also made my 7 year old daughter comfortable for her check up and gave her stickers and toys. Overall we both were very satisfied with our treatment😊 …",
    },{
        img: "",
        date: "5 months ago",
        name: "Nihal",
        desc: "Thanks they did a comprehensive assessment no gap and clean. Clean was very easily done, she is very gentle. Dr Anosha.  I was very happy with the overall assessment  provided by the dentist. Will use again.",
    },{
        img: "",
        date: "8 months ago",
        name: "Mahesha Mahendran",
        desc: "Dr. Anosha is an exceptional dentist who genuinely cares about her patients. She always takes the time to provide the best treatment options. Her approach is both professional and compassionate, she keeps it straight while maintaining a caring and supportive demeanor.  The service at the clinic is top-notch, with a welcoming and efficient team that makes every visit a pleasant experience.",
    }]
    
const Reviews = ()=>{
    const [ desc, setDesc ] = useState<{desc:string,open:boolean}[]>([])
    useEffect(()=>{setDesc(data.map(e=>({
        desc: e.desc,
        open: false
    })))},[])
    return(<div className="container-layout ">
        <div className="flex flex-col gap-10 items-center">
            <Heading hint="Patient Stories" title="Real Experiences, Simple Scheduling"
                    desc=""
                    isCenter={true}
                    withShape={true}        
            />
            <Link to={"https://maps.app.goo.gl/7Yys1RebB6nSiiJo7"} target="_blank">
                <div className="flex flex-col items-center gap-1">
                    <div className="flex">Based on <div className="font-bold">&nbsp;(36 Reviews)</div></div>
                    <div className="flex gap-2">
                        {[...Array(5)].map((_,i)=>(<div key={`Star_${i}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 16 15" fill="none">
                                <g clipPath="url(#clip0_1801_1794)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.04654 0.551942C7.15327 0.222606 7.46025 0 7.80585 0C8.15145 0 8.45741 0.222606 8.56414 0.551942L9.90282 4.67676C9.94246 4.79772 10.0197 4.90343 10.1224 4.97865C10.2261 5.05387 10.3511 5.09454 10.4781 5.09454L14.8154 5.09249C15.161 5.09249 15.467 5.3151 15.5737 5.64444C15.6804 5.97276 15.5635 6.3326 15.284 6.53589L11.7752 9.08417C11.6715 9.15939 11.5942 9.2651 11.5546 9.38606C11.5149 9.50804 11.516 9.63917 11.5546 9.76013L12.8963 13.884C13.0031 14.2133 12.8862 14.5731 12.6066 14.7764C12.3271 14.9797 11.948 14.9797 11.6684 14.7764L8.16162 12.2261C8.05794 12.1509 7.93393 12.1102 7.80585 12.1102C7.67778 12.1102 7.55376 12.1509 7.45008 12.2261L3.94226 14.7764C3.66273 14.9797 3.28457 14.9797 3.00504 14.7764C2.7245 14.5731 2.60763 14.2133 2.71538 13.884L4.0561 9.76013C4.09574 9.63917 4.09574 9.50804 4.0561 9.38606C4.01747 9.2651 3.94022 9.15939 3.83654 9.08417L0.327688 6.53589C0.0481588 6.3326 -0.0697626 5.97276 0.0369667 5.64444C0.144713 5.3151 0.450679 5.09249 0.796279 5.09249L5.13253 5.09454C5.26061 5.09454 5.38564 5.05387 5.4883 4.97865C5.59198 4.90343 5.66924 4.79772 5.70786 4.67676L7.04654 0.551942Z" fill="#F6BB06"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1801_1794">
                                <rect width="16" height="15" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </div>))}
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="122" height="38" viewBox="0 0 122 38" fill="none">
                            <g clipPath="url(#clip0_1801_1786)">
                            <path d="M15.25 13.5342V17.604H25.0502C24.7633 19.8755 23.9984 21.5318 22.8033 22.7148C21.3691 24.1345 19.1223 25.6961 15.25 25.6961C9.22649 25.6961 4.49373 20.8692 4.49373 14.9066C4.49373 8.94396 9.17868 4.06974 15.25 4.06974C18.5008 4.06974 20.8911 5.34745 22.6599 6.95641L25.5282 4.11706C23.0901 1.79826 19.7915 0 15.25 0C6.97962 0 0 6.67248 0 14.8593C0 23.0461 6.97962 29.7186 15.25 29.7186C19.7437 29.7186 23.0901 28.2516 25.7194 25.5542C28.4444 22.8568 29.2571 19.1183 29.2571 16.0423C29.2571 15.0959 29.2092 14.2441 29.018 13.4869H15.25V13.5342Z" fill="#4285F4"/>
                            <path d="M41.5434 10.2207C36.1891 10.2207 31.791 14.2431 31.791 19.8272C31.791 25.3639 36.1413 29.4337 41.5434 29.4337C46.9454 29.4337 51.2957 25.3639 51.2957 19.8272C51.2479 14.2431 46.8976 10.2207 41.5434 10.2207ZM41.5434 25.6478C38.6272 25.6478 36.0935 23.2344 36.0935 19.8272C36.0935 16.3726 38.6272 14.0065 41.5434 14.0065C44.4595 14.0065 46.9932 16.3726 46.9932 19.8272C46.9932 23.2344 44.4595 25.6478 41.5434 25.6478Z" fill="#EA4335"/>
                            <path d="M89.205 12.3502H89.0616C88.1054 11.2145 86.2888 10.2207 83.9464 10.2207C79.118 10.2207 74.8633 14.3851 74.8633 19.8272C74.8633 25.2219 79.0702 29.4337 83.9464 29.4337C86.2888 29.4337 88.1054 28.3926 89.0616 27.2568H89.205V28.5818C89.205 32.2257 87.1971 34.2132 84.042 34.2132C81.4605 34.2132 79.8351 32.3677 79.1658 30.806L75.4847 32.3203C76.5365 34.8757 79.357 37.999 84.0898 37.999C89.0616 37.999 93.3163 35.1124 93.3163 28.014V10.7413H89.3006V12.3502H89.205ZM84.3288 25.6478C81.4126 25.6478 79.1658 23.1871 79.1658 19.8272C79.1658 16.42 81.4126 14.0065 84.3288 14.0065C87.2449 14.0065 89.4918 16.4673 89.4918 19.8745C89.5396 23.1871 87.2449 25.6478 84.3288 25.6478Z" fill="#4285F4"/>
                            <path d="M63.2465 10.2207C57.8923 10.2207 53.4941 14.2431 53.4941 19.8272C53.4941 25.3639 57.8445 29.4337 63.2465 29.4337C68.6485 29.4337 72.9988 25.3639 72.9988 19.8272C72.951 14.2431 68.6007 10.2207 63.2465 10.2207ZM63.2465 25.6478C60.3303 25.6478 57.7966 23.2344 57.7966 19.8272C57.7966 16.3726 60.3303 14.0065 63.2465 14.0065C66.1626 14.0065 68.6963 16.3726 68.6963 19.8272C68.6963 23.2344 66.1626 25.6478 63.2465 25.6478Z" fill="#FBBC05"/>
                            <path d="M96.6152 0.378906H100.822V29.3876H96.6152V0.378906Z" fill="#34A853"/>
                            <path d="M113.729 25.6494C111.578 25.6494 110.048 24.6556 109.044 22.7627L121.999 17.4626L121.569 16.3741C120.757 14.2446 118.318 10.2695 113.299 10.2695C108.327 10.2695 104.168 14.15 104.168 19.876C104.168 25.2708 108.279 29.4825 113.777 29.4825C118.223 29.4825 120.804 26.7851 121.856 25.2235L118.557 23.0466C117.41 24.5609 115.88 25.6494 113.729 25.6494ZM113.442 13.8187C115.163 13.8187 116.645 14.7178 117.123 15.9482L108.375 19.5447C108.327 15.475 111.243 13.8187 113.442 13.8187Z" fill="#EA4335"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1801_1786">
                            <rect width="122" height="38" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                    </div>
                </div>
            </Link>
        </div>
        
        <div className="overflow-hidden mt-5">
            <Swiper
                modules={[Navigation,Autoplay]}
                navigation
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                200: { slidesPerView: 1 },
                450: { slidesPerView: 2},
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 }
                }}
            >
                {data.map((e,idx)=>(<SwiperSlide key={`Steps_${e.name}_${idx}`}>
                    <div className={`flex flex-col gap-4 p-3 md:p-5 border border-[var(--main)] rounded-xl steps`} >
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full bg-[var(--main)] uppercase text-[var(--light)] flex justify-center items-center font-bold text-sm md:text-lg">{e.name.substring(0,2)}</div>
                            <div>
                                <h3 className={`flex justify-center !text-[16px]`}>{e.name}</h3>
                                <div className="text-xs text-zinc-500">{e.date}</div>
                            </div>
                        </div>
                        <div className={``}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.1H5.827L5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91C6.71 7.31 9.14 5.38 12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.07C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.93V16.94C3.99 20.53 7.7 23 12 23C14.97 23 17.46 22.02 19.28 20.34C21.36 18.42 22.56 15.6 22.56 12.25C22.56 11.47 22.49 10.72 22.36 10Z" fill="#FC4C53"/>
                                <mask id="mask0_1802_1821" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                                <path d="M22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.1H5.827L5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91C6.71 7.31 9.14 5.38 12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.07C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.93V16.94C3.99 20.53 7.7 23 12 23C14.97 23 17.46 22.02 19.28 20.34C21.36 18.42 22.56 15.6 22.56 12.25C22.56 11.47 22.49 10.72 22.36 10Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_1802_1821)">
                                <path d="M3.64563 24.0405C7.92859 24.0405 11.4006 19.3534 11.4006 13.5715C11.4006 7.78967 7.92859 3.10254 3.64563 3.10254C-0.637343 3.10254 -4.10938 7.78967 -4.10938 13.5715C-4.10938 19.3534 -0.637343 24.0405 3.64563 24.0405Z" fill="url(#paint0_radial_1802_1821)"/>
                                <path d="M17.0197 34.6615C25.6593 33.5824 31.9991 27.3919 31.1801 20.8348C30.361 14.2776 22.6932 9.83689 14.0536 10.9161C5.41396 11.9953 -0.925866 18.1857 -0.106808 24.7429C0.71225 31.3 8.38003 35.7407 17.0197 34.6615Z" fill="url(#paint1_radial_1802_1821)"/>
                                <path d="M11.1055 8.2793L11.5965 13.8753L12.2195 17.6223L19.5815 24.4703L28.1885 8.5733L11.1055 8.2793Z" fill="url(#paint2_linear_1802_1821)"/>
                                </g>
                                <defs>
                                <radialGradient id="paint0_radial_1802_1821" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.64656 13.5713) scale(7.7549 10.468)">
                                <stop offset="0.368" stop-color="#FFCF09"/>
                                <stop offset="0.718" stop-color="#FFCF09" stop-opacity="0.7"/>
                                <stop offset="1" stop-color="#FFCF09" stop-opacity="0"/>
                                </radialGradient>
                                <radialGradient id="paint1_radial_1802_1821" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.5369 22.7888) rotate(-7.12) scale(15.7645 11.9647)">
                                <stop offset="0.383" stop-color="#34A853"/>
                                <stop offset="0.706" stop-color="#34A853" stop-opacity="0.7"/>
                                <stop offset="1" stop-color="#34A853" stop-opacity="0"/>
                                </radialGradient>
                                <linearGradient id="paint2_linear_1802_1821" x1="23.5585" y1="6.2853" x2="12.1485" y2="20.2983" gradientUnits="userSpaceOnUse">
                                <stop offset="0.671" stop-color="#4285F4"/>
                                <stop offset="0.885" stop-color="#4285F4" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-center">
                        {[...Array(5)].map((_,i)=>(<div key={`Star_${i}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 16 15" fill="none">
                                <g clipPath="url(#clip0_1801_1794)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.04654 0.551942C7.15327 0.222606 7.46025 0 7.80585 0C8.15145 0 8.45741 0.222606 8.56414 0.551942L9.90282 4.67676C9.94246 4.79772 10.0197 4.90343 10.1224 4.97865C10.2261 5.05387 10.3511 5.09454 10.4781 5.09454L14.8154 5.09249C15.161 5.09249 15.467 5.3151 15.5737 5.64444C15.6804 5.97276 15.5635 6.3326 15.284 6.53589L11.7752 9.08417C11.6715 9.15939 11.5942 9.2651 11.5546 9.38606C11.5149 9.50804 11.516 9.63917 11.5546 9.76013L12.8963 13.884C13.0031 14.2133 12.8862 14.5731 12.6066 14.7764C12.3271 14.9797 11.948 14.9797 11.6684 14.7764L8.16162 12.2261C8.05794 12.1509 7.93393 12.1102 7.80585 12.1102C7.67778 12.1102 7.55376 12.1509 7.45008 12.2261L3.94226 14.7764C3.66273 14.9797 3.28457 14.9797 3.00504 14.7764C2.7245 14.5731 2.60763 14.2133 2.71538 13.884L4.0561 9.76013C4.09574 9.63917 4.09574 9.50804 4.0561 9.38606C4.01747 9.2651 3.94022 9.15939 3.83654 9.08417L0.327688 6.53589C0.0481588 6.3326 -0.0697626 5.97276 0.0369667 5.64444C0.144713 5.3151 0.450679 5.09249 0.796279 5.09249L5.13253 5.09454C5.26061 5.09454 5.38564 5.05387 5.4883 4.97865C5.59198 4.90343 5.66924 4.79772 5.70786 4.67676L7.04654 0.551942Z" fill="#F6BB06"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1801_1794">
                                <rect width="16" height="15" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </div>))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className={`flex justify-center text-center !font-normal`}>{desc[idx]?.open?desc[idx]?.desc:desc[idx]?.desc.substring(0,100)+"..."}</p>
                        
                        <Link className="text-[13px] m-auto text-[var(--main)]" target="_blank" to="https://maps.app.goo.gl/7Yys1RebB6nSiiJo7"><span>{desc[idx]?.open?"Read Less":"Read More"}</span></Link>
                        {/* {desc[idx]?.desc.length > 100 && <span onClick={()=>{
                            const temp = desc.map((element, index) => {
                                if (index === idx) {
                                    return { ...element, open: !element.open }
                                }
                                return element
                            })
                            setDesc(temp)
                        }} className="text-[13px] m-auto text-[var(--main)] cursor-pointer">{desc[idx]?.open?"Read Less":"Read More"}</span>} */}
                        <div className={`w-1/4 h-[3px] rounded m-auto line-card !bg-[var(--main)]`}></div>
                    </div>
                </div>
                </SwiperSlide>))}
            </Swiper>
           

        </div>

    </div>)
}
export default Reviews