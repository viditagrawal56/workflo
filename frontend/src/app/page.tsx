import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export default function Login() {
  return (
    // <div className="flex justify-center min-h-screen bg-gradient-to-b from-white to-[#AFA3FF]">
    //   <div className="w-full max-w-md mt-32 h-96 p-8 space-y-8 bg-[#F7F7F7] rounded-lg">
    //     <div className="text-center">
    //       <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mb-4">
    //         Welcome to <span className="text-[#4534AC]">Workflo</span>!
    //       </h1>
    //     </div>
    <AuthForm type="login" />
    //     <div className="text-center text-neutral-600 text-sm max-w-sm dark:text-neutral-300">
    //       {"Don't have account? Create a "}
    //       <Link className="text-blue-500" href="/register">
    //         new account
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
