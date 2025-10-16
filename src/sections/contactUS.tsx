import img from "../assets/images/tooth.png"


const Contact = ()=>{
    return(<div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-2 container-layout">
        <form className="flex flex-col !w-full rounded-xl gap-8 p-10 bg-[var(--main)]   ">
                <div className="grid grid-cols-2 gap-8">
                    <div><input className="w-full" placeholder="First Name" /></div>
                    <div><input className="w-full" placeholder="Last Name" /></div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div><input className="w-full" placeholder="Email" /></div>
                    <div><input className="w-full" placeholder="Phone" /></div>
                </div>
                <div>
                    <textarea className="w-full" placeholder="Message"/>
                </div>
                <div className="w-full">
                    <button className="btn flex justify-center items-center gap-2 !bg-[var(--light)] !text-[var(--main)] !w-full">
                        Submit
                    </button>
                </div>
            </form>
            <div className="relative z-1   flex  justify-center items-center">
                <div className="flex flex-col items-center justify-center p-5  md:p-8 gap-5 shadow-lg  rounded-xl !my-10 h-[200px] ">
                    <div className="heading w-full">
                        <h2 className="">MAKE AN APPOINTMENT</h2>
                    </div>
                    <p className="text-sm text-center">
                    Book your visit easily and take the first step toward a healthier, brighter smile. Our friendly team is ready to welcome you and provide the care you deserve. 
                    </p>
                    <div className="flex justify-center">
                    <img src={img} alt="" />
                </div>
                </div>
                
            </div>
       
        
    </div>)
}
export default Contact