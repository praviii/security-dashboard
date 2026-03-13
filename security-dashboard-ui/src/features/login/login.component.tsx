import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router"
import { useForm } from 'react-hook-form'
import { login } from "./login.api";

function LoginComponent() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<{email: string, password: string}>();

    const onSubmit = async (data: { email: string, password: string }) => {
        try {
            const res = await login(data);
            if(res){
                localStorage.setItem("token",res.token);
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="w-full h-full flex items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
            <Card className="min-w-120">
                <CardHeader>
                    <div className="flex items-center gap-1 font-bold text-primary">
                        <span className="bg-primary p-1 rounded-md font-bold text-white">STERNA</span> SELYEK
                    </div>
                    <CardTitle className="font-bold">Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email & password/OTP to login
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email <span className="text-destructive">*</span> </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                {...register("email")}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password <span className="text-destructive">*</span> </Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" placeholder="Enter password" {...register("password")} />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full cursor-pointer">
                        Login using password
                    </Button>
                    <Button variant="outline" className="w-full cursor-pointer">
                        Login using OTP
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default LoginComponent