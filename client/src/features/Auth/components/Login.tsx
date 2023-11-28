import { Chrome, Github } from "lucide-react";

import Logo from "../../../components/Logo";
import SignInButton from "./SignInButton";

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-20 justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-slate-500 font-extrabold text-6xl md:text-8xl lowercase">
          Welcome to
        </span>
        <Logo />
      </div>
      <div className="flex gap-4 items-center">
        <SignInButton
          icon={<Chrome />}
          variant="red"
          text="Sign In with Google"
        />
      </div>
    </div>
  );
};

export default Login;
