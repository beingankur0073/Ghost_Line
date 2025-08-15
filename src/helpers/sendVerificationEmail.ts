import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email:string,
    username:string,
    verfiyCode:string,
):Promise<ApiResponse>{
    try{
       resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Ghost gram | Verification Code',
            react: VerificationEmail({username,otp:verfiyCode}),
        });

        return {success:true,message:"Verification email sent successfully"}
    }catch(emailError){
        console.log("Error sending vetification email",emailError)
        return {success:false,message:"Failed to send verification email"}
    }
}