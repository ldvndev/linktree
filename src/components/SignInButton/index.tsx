import { ButtonHTMLAttributes } from "react";

interface SignInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
  
export function SignInButton(props: SignInButtonProps) {
  return(
    <button {...props} className="border-0 h-9 rounded-md outline-none text-gray-300
      px-2 mt-2 text-base bg-purple-900  hover:bg-purple-950">
      Sign in 
    </button>
  );
}