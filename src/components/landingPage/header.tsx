import Image from "next/image";
import Link from 'next/link'
import { Jost } from 'next/font/google';

const jost = Jost({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
      <header className="flex justify-between px-8 py-4 top-0 sticky">
        <div className="flex gap-2 items-center">
            <Image src={"/logo.png"} alt={""} width="50" height="50" />
        </div>
        <nav className="flex gap-6 items-center">
            <Link className={jost.className} href={"/about"}>About</Link>
            <Link className={jost.className}  href={"/contact"}>Contact us</Link>
            <Link className={jost.className} href={"/login"}>Login</Link>
        </nav>
      </header>
  );
}
