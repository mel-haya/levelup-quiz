import Header from "@/components/landingPage/header"
import LoginForm from "@/components/loginPage/loginForm";

export default function Login() {
  return (
    <div className="flex flex-col p-0 loginBg relative h-screen">
        <Header />
        <div className="grow flex items-center justify-center">
            <LoginForm />
        </div>

    </div>
  );
}
