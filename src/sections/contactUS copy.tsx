

const Contact = ()=>{
    return(<div className="flex justify-end relative">
        <form className="flex flex-col gap-8 p-10 pl-30 ">
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
                <button className="btn !w-full">
                    Submit
                </button>
            </div>
        </form>

        <div className="absolute top-1/2 card-contact -translate-y-1/2 bg-[var(--main)] p-5 text-white rounded-xl shadow-lg flex flex-col gap-5 justify-center items-center">
            <div className="heading w-full">
                <h2 className="">MAKE AN APPOINTMENT</h2>
            </div>
            <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
        </div>
      
    </div>)
}
export default Contact