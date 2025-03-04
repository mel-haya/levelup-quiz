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
        <div className="flex items-end gap-1">
            <Image src={"/logo.png"} alt={""} width="20" height="20" />
            <h1>evelup</h1>
        </div>
        <nav className="flex gap-6 items-center">
            <Link className={jost.className} href={"/about"}>About</Link>
            <Link className={jost.className}  href={"/contact"}>Contact us</Link>
            <Link className={jost.className} href={"/login"}>Login</Link>
        </nav>
      </header>
  );
}
