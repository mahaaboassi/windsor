import type React from "react"
import shape from "../assets/images/Vector.png"
type Item = {
    hint: string,
    title: string,
    desc: string,
    isCenter?: boolean,
    withShape?: boolean,
    isWhite?: boolean,
    isfullDescriptionWidth?: boolean
}

const Heading: React.FC<Item> = ({hint,title,desc,isCenter,withShape,isWhite,isfullDescriptionWidth})=>{
    return(<div className={`headings relative flex flex-col gap-5 ${isCenter ? "text-center items-center":""}`}>
        { withShape && <div className="absolute top-0 left-0 animate-moveAround"><img src={shape} alt="Shape" /></div> }
        <div className={`flex flex-col gap-0.5 ${isCenter ?"items-center":''}`}>
            <h2 className="uppercase">{hint}</h2>
            <h3 className={`uppercase ${isWhite ? "!text-[var(--light)]" : ""}`}>{title}</h3>
        </div>
        {desc != "" && <p className={`${isfullDescriptionWidth?'!w-full':""}`}>{desc}</p>}
    </div>)
}
export default Heading