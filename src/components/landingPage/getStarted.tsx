
import { Funnel_Sans } from 'next/font/google';
import "./hero.css";

const funnel = Funnel_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Hero() {
  return (
      <main className={`px-6 py-3 rounded-full text-xl bg-blue-500 cursor-pointer ${funnel.className}`}>
        Get started
      </main>
  );
}
