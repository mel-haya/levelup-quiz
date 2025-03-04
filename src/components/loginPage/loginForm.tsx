import { Funnel_Sans, Jost } from 'next/font/google';
import Image from 'next/image'
import logoWhite from '@/assets/logo_white.png'
import Link from 'next/link';


const funnel = Funnel_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
})
const jost = Jost({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function LoginForm() {
    return (

        <form className={`${funnel.className} flex flex-col items-center gap-3 mt-[-50px] backdrop-blur-md p-4 rounded-md border-gray-500 border`}>
            <div className='mb-4 border-2 p-2'>
                <Image src={logoWhite} width={30} alt={'levelup logo'}  />

            </div>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center'>
                <input type="text" placeholder='Username' className='outline-none' />
            </div>
            <div className='py-1 px-4 bg-white/10 rounded-full flex gap-2 items-center mb-2'>
                <input type="password" placeholder='Password' className='outline-none' />
            </div>
            <button className={`${jost.className} py-1 px-8 rounded-full border-1`} type='submit'>Sign in</button>
            <Link href="/signup" className='text-sm underline cursor-pointer'>Create an account</Link>
        </form>
    );
}
