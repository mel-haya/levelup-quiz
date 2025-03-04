
import "./hero.css";
import QuizAnimation from "./quizAnimation"
import Button from "./getStarted"
import { Funnel_Sans } from 'next/font/google';

const funnel = Funnel_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Hero() {
  return (
      <main className=" relative overflow-hidden flex items-center justify-center grow">
        <div className="absolute inset-0 flex justify-center top-14 pt-30">
            <div className=" bg-purple-600 w-[300px] h-[300px] rounded-full opacity-50 blur-[90px] relative anime1"></div>
            <div className=" bg-cyan-400 w-[300px] h-[300px] rounded-full opacity-50 blur-[90px] relative anime2"></div>
        </div>
        <div className='flex flex-col md:flex-row items-center'>
          <div className="flex gap-4 items-center z-10 px-4 flex-col">
              <h1 className={`text-3xl font-bold text-center ${funnel.className}`} >Generate Your Own Quiz in Seconds</h1>
              <h2 className={`text-center ${funnel.className}`} >Create personalized quizzes effortlessly. Just describe what you need, and we’ll handle the rest!</h2>
              <Button/>
          </div>
          <QuizAnimation/>
        </div>
      </main>
  );
}
