import Header from "@/components/landingPage/header"
import Hero from "@/components/landingPage/Hero"

export default function Home() {
  return (
    <div className="flex flex-col p-0 hero-gradient relative h-screen">
      <Header />
      <Hero />
    </div>
  );
}
