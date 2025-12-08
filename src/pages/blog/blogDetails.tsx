import HeroForDynamicPages from "../../components/heroForDynamicPages"
import { blogData } from "../../data"
import { useEffect } from "react"
import Contact from "../../sections/contactUS"
import Ready from "../../sections/ready"
import { motion } from "framer-motion";
import img from "../../assets/images/blog.png"
import img_sm from "../../assets/images/blog_sm.png"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card:any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


const DetailsBlog = ()=>{
    useEffect(()=>window.scrollTo({top:0}),[])
    const [ currrntBlog ] = blogData.filter(item=>window.location.href.includes(item.link || ""))
    return(<div className="flex flex-col gap-10 md:gap-20 dynamic-pages">
        <HeroForDynamicPages  img={img} img_sm={img_sm} title="" hint={currrntBlog?.title || ""}
                            desc=""
                            isDetailsBlog={true}
                            link="/" label="Home" subLabel="Blog"
        />
        <div className="container-layout flex flex-col gap-10">
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-3 lg:col-span-2 flex flex-col gap-5">
                  <div>
                    <div className="h-[350px]">
                      <img src={currrntBlog?.img} alt={currrntBlog?.title} className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg mb-5"/>
                    </div>
                     <div className="xs:flex xs:justify-between items-center bg-[var(--main)] text-[var(--light)] font-semibold p-3 ">
                      <h3 className="text-lg">{currrntBlog?.title || ""}</h3>
                      <div className="text-sm flex justify-end">{currrntBlog?.date}</div>
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
                      <p>{currrntBlog?.desc}</p>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[1.2rem] font-bold">{currrntBlog?.ques_1.content}</h3>
                        <ul className="list-disc list-inside">
                          {currrntBlog?.ques_1.options?.map((item, idx)=>(
                            <li key={`list_item_${idx}`} className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
                              <span className="text-[var(--main)] mt-1">•</span>
                              {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[1.2rem] font-bold">{currrntBlog?.ques_2.content}</h3>
                        <ul className="list-disc list-inside">
                          {currrntBlog?.ques_1.options?.map((item, idx)=>(
                            <li key={`list_item_${idx}`} className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
                               <span className="text-[var(--main)] mt-1">•</span>
                              {item}</li>
                          ))}
                        </ul>
                      </div>
                      {currrntBlog?.ques_3 && <div className="flex flex-col gap-1">
                        <h3 className="text-[1.2rem] font-bold">{currrntBlog?.ques_3.content}</h3>
                        <ul className="list-disc list-inside">
                          {currrntBlog?.ques_3.options?.map((item, idx)=>(
                            <li key={`list_item_${idx}`} className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
                              <span className="text-[var(--main)] mt-1">•</span>
                              {item}</li>
                          ))}
                        </ul>
                      </div>}
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-1">
                  <motion.div
                      className="flex flex-col gap-2"
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                  >
                      {blogData.map((item, idx) => (
                      <motion.a
                          href={item.link || "#"}
                          key={`PaymentMethod_${idx}`}
                          className="bg-white rounded-xl overflow-hidden group shadow flex flex-col items-center gap-2 "
                          variants={card}
                      > 
                      <div className="grid grid-cols-3 ">
                          <div className="col-span-1 h-[100px] lg:h-full"><img className="object-cover w-full lg:h-full " src={item.img} alt={item.title} /></div>
                          <div className="col-span-2 p-2 flex flex-col gap-1">
                            <h4 className="text-[0.8rem] xs:text-[1rem] font-bold text-[var(--main)] group-hover:text-[var(--grey_1)] transition-transform duration-300">{item.title}</h4>
                            <div className="text-xs font-semibold flex justify-end">{item.date}</div>
                          </div>
                      </div>
                      </motion.a>
                      ))}
                  </motion.div>
                </div>
              </div>
            
        </div>
        <Ready/>
        <Contact/>
    </div>)
}
export default DetailsBlog