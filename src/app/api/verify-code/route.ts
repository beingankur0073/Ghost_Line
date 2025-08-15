import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request:Request) {
    await dbConnect()
    try {
        const {username,code}=await request.json()
        const decodedUsername=decodeURIComponent(username)
        const user=await UserModel.findOne({username:decodedUsername})

        if(!user){
             return Response.json(
                {
                    success:false,
                    message:"User not found",
                },{
                    status:500,
                }
            )
        }


        const isCodeValid=username.verfiyCode===code
        const isCodeNotExpired=new Date(username.verifyCodeExpiry)>new Date()
        if(isCodeValid && isCodeNotExpired){
            user.isVerified=true
            user.save()
             return Response.json(
                {
                    success:false,
                    message:"Account verified successfully",
                },{
                    status:200,
                }
            )
        }else if(!isCodeNotExpired){
            return Response.json(
                {
                    success:false,
                    message:"Verification code has expired , please signup again to get a new code",
                },{
                    status:400,
                }
            )
        }else{
            return Response.json(
                {
                    success:false,
                    message:"Incorrect Verificatoon Code",
                },{
                    status:400,
                }
            )
        }

    } catch (error) {
            console.error('Error verifying user',error)
            return Response.json(
                {
                    success:false,
                    message:"Error verifying user",
                },{
                    status:500,
                }
            )
    }
}
