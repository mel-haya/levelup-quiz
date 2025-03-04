'use client';


import quiz from '../../assets/quiz.json'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function QuizAnimation() {

    return (
        <Lottie className='w-100 z-10 hidden md:block' animationData={quiz} />
    );
}
