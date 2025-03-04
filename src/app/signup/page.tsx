import Header from "@/components/landingPage/header"
import SignupForm from "@/components/loginPage/signupForm";

export default function Home() {
  return (
    <div className="flex flex-col p-0 loginBg relative h-screen">
        <Header />
        <div className="grow flex items-center justify-center">
            <SignupForm />
        </div>

    </div>
  );
}
