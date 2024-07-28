"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { signup, login } from "../lib/api";
import {
  loginSchema,
  signupSchema,
  LoginInput,
  SignupInput,
} from "../schema/authSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface AuthFormProps {
  type: "signup" | "login";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { login: authLogin } = useAuth();

  const form = useForm<LoginInput | SignupInput>({
    resolver: zodResolver(type === "signup" ? signupSchema : loginSchema),
    defaultValues:
      type === "signup"
        ? { name: "", email: "", password: "" }
        : { email: "", password: "" },
  });

  const onSubmit = async (data: LoginInput | SignupInput) => {
    setIsSubmitting(true);
    try {
      if (type === "signup") {
        const { token, name } = await signup(
          (data as SignupInput).name,
          (data as SignupInput).email,
          (data as SignupInput).password
        );
        authLogin(token, name);
      } else {
        console.log("Attempting login...");
        const { token, name } = await login(
          (data as LoginInput).email,
          (data as LoginInput).password
        );
        console.log("Calling authLogin with:", token, name);
        authLogin(token, name);
      }
      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-b from-white to-[#AFA3FF]">
      <div className="w-full max-w-md mt-32 h-96 p-8 space-y-8 bg-[#F7F7F7] rounded-lg border-[#CECECE] border-[1px]">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mb-4">
            Welcome to <span className="text-[#4534AC]">Workflo</span>!
          </h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* --------Name Field--------- */}

            {type === "signup" && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-[#EBEBEB]"
                        placeholder="Full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {/* --------Email Field--------- */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-[#EBEBEB]"
                      placeholder="Your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* --------Password Field--------- */}

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-[#EBEBEB]"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
              ) : type === "signup" ? (
                "Sign Up"
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </Form>
        <div className="text-center text-neutral-600 text-sm max-w-sm dark:text-neutral-300">
          {type == "signup"
            ? "Already have an account? "
            : "Don't have account? Create a "}
          <Link
            className="text-blue-500"
            href={type == "signup" ? "/" : "/register"}
          >
            {type == "signup" ? "Login" : "new account"}
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
