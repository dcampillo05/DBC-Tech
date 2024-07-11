"use client"

import { Avatar, CustomFlowbiteTheme, FloatingLabel } from "flowbite-react";
import Link from "next/link";
import "../../styles/styles.css"
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

const customLabel: CustomFlowbiteTheme["floatingLabel"] = {
    label: {
        default: {
            outlined: {
                sm: "bg-pink"
            }
        }
    }
}



const FormLogin = () => {

    const [data, setData] = useState<{
        email: string,
        password: string
    }>({
        email: '',
        password: ''
    })

    const router = useRouter()

    const loginGoogle = async () => {
        try {
            let { data, error } = await supabase
                .auth
                .signInWithOAuth({
                    provider: 'google'
                })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const login = async () => {
        try {
            let { data: dataUser, error } = await supabase
                .auth
                .signInWithPassword({
                    email: data.email,
                    password: data.password
                })
            if (dataUser) {
                router.push("/");
                console.log(dataUser)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCharge = (e: any) => {
        const { name, value } = e.target;
        setData((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <main>
            <div className=" w-full bg-black flex flex-col justify-between px-5 py-6 rounded-2xl mt-[150px] ml-0 h-[]">
                <div className="text-[#d6d9db] w-full flex justify-center items-center relative">
                    <Link href={"/"}><img src="/close.png" className="absolute text-xl px-[11px] py-[7px] rounded-[50%] left-0 top-0 "></img></Link>
                    <img src="Logo.png" alt="" className="" width={100} height={80} />
                </div>

                <div className="w-[300px] text-center mx-auto">
                    <h1 className="my-[28px]">Bem-vindo ao DBC Tech</h1>

                    <div className="flex flex-col gap-6 mt-9">
                        <button onClick={loginGoogle} className="w-full text-[15px] font-medium px-4 py-2 rounded-[20px] flex items-center justify-center gap-2 bg-white text-[#0f1419] hover:bg-[#e6e6e6]">
                            <img src="google.png" alt="" width={25} height={25} />
                            <span>Sign In with Google</span>
                        </button>
                    </div>

                    <div className="w-full relative my-[20px]">
                        <p className="relative">
                            <span className="content-empty absolute w-[45%] h-px bg-[#333639] top-1/2 -translate-y-1/2 left-0"></span>
                            <span>Ou</span>
                            <span className="content-empty absolute w-[45%] h-px bg-[#333639] top-1/2 -translate-y-1/2 right-0"></span>
                        </p>
                    </div>

                    <div className="w-full relative pb-1">

                        <FloatingLabel variant="outlined" label="Email" type="text" name="email" value={data.email} onChange={handleCharge} />
                    </div>
                    <div className="w-full relative pb-3">
                        <FloatingLabel variant="outlined" label="Senha" type="password" name="password" value={data.password} onChange={handleCharge} />
                    </div>
                    <div>
                        <button className="w-full text-[15px] font-medium px-0 py-2 rounded-[20px] bg-white text-[#0f1419] hover:bg-[#e6e6e6] mb-3">Entrar</button>
                        <button className="w-full text-[15px] font-medium px-0 py-2 rounded-[20px] bg-transparent text-white border border-solid border-[#536471] hover:bg-[#181919]">Esqueceu a senha?</button>
                    </div>
                    <div className="font-light text-center mt-8">
                        <p>Não possui conta? <a className="text-[#1d9bf0] hover:underline hover:decoration-[#1d9bf0]" href="/SignUp">Cadastre-se</a></p>
                    </div>
                </div>
            </div >
        </main>
    )

}

export default FormLogin;