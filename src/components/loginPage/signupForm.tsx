'use client'

import { Funnel_Sans, Jost } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import axios from '@/lib/axios'


const funnel = Funnel_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
})
const jost = Jost({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function SignupForm() {

    const [imagePath, setImagePath] = useState<string>("")
    function changeImage(e:ChangeEvent<HTMLInputElement>){
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImagePath(URL.createObjectURL(file));
        }
    }

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
        const response = await axios.post(`/register`, formData);

        console.log(response.data);
    }

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit} className={`${funnel.className} flex flex-col items-center gap-3 mt-[-50px] backdrop-blur-md p-4 rounded-md border-gray-500 border`}>
            <label htmlFor='profile_picture' className='bg-gray-400 w-16 h-16 flex items-center justify-center rounded-full overflow-hidden'>
                {imagePath ? <Image src={imagePath} alt={'User profile'} width={64} height={64} /> :<i className="fa-solid fa-user text-gray-500 text-2xl"></i>}
            </label>
            <input type="file" name="profile_picture" id="profile_picture" accept="image/*" className='hidden' onChange={changeImage}/>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center'>
                <input type="text" placeholder='Type a username' className='outline-none' id='name' name='name'/>
            </div>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center'>
                <input type="email" placeholder='Type your email' className='outline-none' id='email' name='email'/>
            </div>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center'>
                <input type="password" placeholder='Type your password' className='outline-none' id='password' name='password'/>
            </div>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center mb-2'>
                <input type="password" placeholder='Confirm your password' className='outline-none' id='password_confirmation' name='password_confirmation'/>
            </div>
            
            <button className={`${jost.className} py-1 px-8 rounded-full border-1`} type='submit'>Sign up</button>
            <Link href="/login" className='text-sm underline cursor-pointer'>I already have an account</Link>
        </form>
    );
}
