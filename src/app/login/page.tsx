"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

import { useState } from "react"
import FormLogin from "./_Components/login"

export default function Login() {

    const [data, setData] = useState<{
        email: string,
        password: string
    }>({
        email: '',
        password: ''
    })

    const router = useRouter()

    const login = async () => {
        try {
            let { data: dataUser, error } = await supabase
                .auth
                .signInWithPassword({
                    email: data.email,
                    password: data.password
                })
            if (dataUser) {
                router.refresh();
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
        <div className="container mx-auto w-[600px]">
            <FormLogin />
        </div>
    )
}