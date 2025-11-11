import img from "../assets/images/tooth.webp"
import Heading from "../components/heading"
import { ToastContainer, toast } from 'react-toastify';
//  form validation
import { useForm ,type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";



// Define validation schema with Yup
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().nullable().default(""),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().nullable().default(""),
  message: yup.string().required("Message is required"),
}).required();


type FormData = yup.InferType<typeof schema>; 

const Contact = ()=>{
    const notify = (msg:string) => toast(msg);
    const [loading, setLoading] =  useState<boolean>(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit : SubmitHandler<FormData> = async (data: FormData) => {
        setLoading(true);
        try {
        const response = await fetch("https://windsordentalcare.com.au/send-email.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.success) {
            notify("Email sent successfully!");
            reset();
        } else {
            notify("Email failed: " + (result.error || "Unknown error"));
        }
        } catch (err: any) {
            notify("An error occurred while sending the email.");
        } finally {
            setLoading(false);
            }
    };
    return(<div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-2 container-layout">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col !w-full rounded-xl gap-2 md:gap-8 p-6 md:p-10 bg-[var(--main)]   ">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 md:gap-8">
                    <div>
                        <input {...register("firstName")} className="w-full" placeholder="First Name" />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <input {...register("lastName")} className="w-full" placeholder="Last Name" />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 md:gap-8">
                    <div>
                        <input {...register("email")} className="w-full" placeholder="Email" />
                        {errors.email && <p className="text-red-500 text-sm ">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input {...register("phone")} className="w-full" placeholder="Phone" />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>
                </div>
                <div>
                    <textarea {...register("message")} className="w-full" placeholder="Message"/>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <div className="w-full">
                    <button disabled={loading} className="btn flex justify-center items-center gap-2 !bg-[var(--light)] !text-[var(--main)] !w-full">
                        {loading?<div className="w-5 h-5 border-4 border-t-[var(--main)] border-gray-200 rounded-full animate-spin"></div>:"Submit"}
                    </button>
                </div>
            </form>
            <div className="relative z-1   flex  justify-center items-center">
                <div className="flex flex-col items-center justify-center p-5  md:p-8 gap-5 shadow-lg  rounded-xl !my-10 h-[200px] ">
                    <Heading hint="Say Hello" title="MAKE AN APPOINTMENT"  desc="Book your visit easily and take the first step toward a healthier, brighter smile. Our friendly team is ready to welcome you and provide the care you deserve." 
                            isCenter={true} isfullDescriptionWidth={true}
                    />
                    <div className="flex justify-center">
                    <img src={img} alt="" />
                </div>
                </div>
                
            </div>
       
        <ToastContainer />
    </div>)
}
export default Contact