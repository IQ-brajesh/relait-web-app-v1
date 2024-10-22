"use client";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/img/relait.png";
import { GoogleIcon, LinkedinIcon } from "../../components/icons";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex-1 py-8">
      <div className="flex mb-8">
        <div className="flex-1">
          <h1 className="inline-block text-xl md:text-2xl xl:text-3xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-6px] before:bg-primary-500 before:right-0">
            Login
          </h1>
        </div>
        <div>
          <Link href="/planit">
            <Image src={Logo} alt="Relait" />
          </Link>
        </div>
      </div>
      <Button
        size="md"
        variant="outlined"
        color="brown"
        className="flex items-center justify-center gap-3 mt-3"
        fullWidth
      >
        <GoogleIcon className="h-5 w-5" />
        Continue with Google
      </Button>
      <Button
        size="md"
        variant="outlined"
        color="brown"
        className="flex items-center justify-center gap-3 mt-3"
        fullWidth
      >
        <LinkedinIcon className="h-5 w-5" />
        Continue with LinkedIn
      </Button>
      <div className="text-center mt-4">
        Dont have an account ?{" "}
        <Link
          href="/signup"
          className="inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all text-primary-400 hover:before:right-[0]"
        >
          Signup
        </Link>
      </div>
      <div className="relative">
        <div className="inline-block px-3 bg-white z-[1] absolute left-[50%] top-0 mt-[-8px] ms-[-20px] leading-4 uppercase text-base-800/50">
          or
        </div>
        <hr className="my-8" />
      </div>
      <div className="mt-3">
        <Input label="Email or Mobile Number" size="lg" />
      </div>
      <div className="mt-3">
        <Input
          type={showPassword ? "text" : "password"}
          label="Password"
          size="lg"
          icon={
            <i
              className={`fa-regular text-base-800/50 hover:text-base-800 transition-all cursor-pointer ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              }`}
              onClick={() => handlePassword()}
            />
          }
        />
      </div>

      <div className="mt-3">
        <Button size="md" color="amber" fullWidth className="text-white">
          Login
        </Button>
      </div>
      <div className="flex items-center mt-3">
        <div className="flex-1">
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" color="amber" />
          </div>
        </div>
        <div>
          <Link
            href="/forgot-password"
            className="inline-block relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[0] before:bg-base-800 before:transition-all text-base-800 hover:text-primary-500 hover:before:bg-primary-500"
          >
            Forgot Password ?
          </Link>
        </div>
      </div>
    </div>
  );
}
