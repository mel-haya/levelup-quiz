import Image from "next/image";
import Link from 'next/link'
import { Jost } from 'next/font/google';

const jost = Jost({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
      <header className="flex justify-between px-8 py-8 top-0 sticky text-white text-2xl">
        <Link className="flex items-end gap-1" href='/'>
            <Image src={"/logo.png"} alt={""} width="20" height="20" />
            <h1>evelup</h1>
        </Link>
        <nav className="flex gap-6 items-center">
            <Link className={jost.className} href={"/about"}>About</Link>
            <Link className={jost.className}  href={"/contact"}>Contact us</Link>
            <Link className={jost.className} href={"/login"}>Login</Link>
        </nav>
      </header>
  );
}
