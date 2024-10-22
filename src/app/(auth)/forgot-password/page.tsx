"use client";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/img/relait.png";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex-1 py-8">
      <div className="flex mb-8">
        <div className="flex-1">
          <h1 className="inline-block text-lg md:text-xl xl:text-2xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-6px] before:bg-primary-500 before:right-0">
            Forgot Password?
          </h1>
        </div>
        <div>
          <Link href="/planit">
            <Image src={Logo} alt="Relait" />
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <Input label="Email or Mobile Number" size="lg" />
      </div>
      <div className="mt-3">
        <Button size="md" color="amber" className="text-white" fullWidth>
          Resend Link
        </Button>
      </div>
      <div className="text-center mt-3">
        If remember password please{" "}
        <Link
          href="/login"
          className="inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all text-primary-400 hover:before:right-[0]"
        >
          Login
        </Link>{" "}
        or{" "}
        <Link
          href="/signup"
          className="inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all text-primary-400 hover:before:right-[0]"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
