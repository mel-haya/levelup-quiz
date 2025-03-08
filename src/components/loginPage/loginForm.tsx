'use client'

import { Funnel_Sans, Jost } from 'next/font/google';
import Image from 'next/image'
import logoWhite from '@/assets/logo_white.png'
import Link from 'next/link';
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Axios from "Axios"


const funnel = Funnel_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
})
const jost = Jost({
    weight: ['400', '700'],
    subsets: ['latin'],
})


export default function LoginForm() {

    const router = useRouter()
    const [error, setError] = useState(false)
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const formData = new FormData(e.currentTarget); // Extracts all form fields
        // Append the profile picture separately if needed
        const fileInput = e.currentTarget.profile_picture as HTMLInputElement;
        if (fileInput && fileInput.files?.[0]) {
            formData.append("profile_picture", fileInput.files[0]);
        }
        const csrfResponse = await axios.get(`/sanctum/csrf-cookie`);
        console.log("CSRF Token Set:", csrfResponse.status);
        try {
            const response = await axios.post(`/login`, formData);
            if(response.status === 200)
            router.push('/dashboard')
        }
        catch(error){
            if(Axios.isAxiosError(error) && error?.response?.status === 422)
                setError(true)
        }

    }

    return (

        <form onSubmit={handleSubmit} className={`${funnel.className} flex flex-col items-center gap-3 mt-[-50px] backdrop-blur-md p-4 rounded-md border-gray-500 border`}>
            <p className='text-red-500'>{error && 'Invalid credentials'}</p>
            <div className='mb-4 border-2 p-2'>
                <Image src={logoWhite} width={30} alt={'levelup logo'}  />
            </div>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center'>
                <input type="email" placeholder='Email' className='outline-none' name='email' />
            </div>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center mb-2'>
                <input type="password" placeholder='Password' className='outline-none' name='password' />
            </div>
            <button className={`${jost.className} py-1 px-8 rounded-full border-1`} type='submit'>Sign in</button>
            <Link href="/signup" className='text-sm underline cursor-pointer'>Create an account</Link>
        </form>
    );
}
