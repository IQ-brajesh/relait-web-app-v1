"use client";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCountries } from "use-react-countries";
import Logo from "../../assets/img/relait.png";

export default function Signup() {
  const { countries } = useCountries();
  return (
    <div className="flex-1 py-8">
      <div className="flex mb-8">
        <div className="flex-1">
          <h1 className="inline-block text-xl md:text-2xl xl:text-3xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-6px] before:bg-primary-500 before:right-0">
            Signup
          </h1>
        </div>
        <div>
          <Link href="/planit">
            <Image src={Logo} alt="Relait" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-6">
          <Input
            label="First Name"
            size="lg"
            containerProps={{
              className: "!min-w-[100%]",
            }}
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Input
            label="Last Name"
            size="lg"
            containerProps={{
              className: "!min-w-[100%]",
            }}
          />
        </div>
      </div>
      <div className="mt-3">
        <Input label="Mobile Number" size="lg" />
      </div>
      <div className="mt-3">
        <Input label="Email Address" size="lg" />
      </div>
      <div className="mt-3">
        <Input label="Address" size="lg" />
      </div>
      <div className="grid grid-cols-12 gap-3 mt-3">
        <div className="col-span-12 lg:col-span-6">
          <Input
            label="City"
            size="lg"
            containerProps={{
              className: "!min-w-[100%]",
            }}
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Input
            label="Pin Code"
            size="lg"
            containerProps={{
              className: "!min-w-[100%]",
            }}
          />
        </div>
      </div>
      <div className="mt-3">
        <Select
          size="lg"
          label="Select Country"
          selected={(element) =>
            element &&
            React.cloneElement(element, {
              disabled: true,
              className:
                "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
            })
          }
        >
          {countries.map(({ name, flags }) => (
            <Option key={name} value={name} className="flex items-center gap-2">
              <img
                src={flags.svg}
                alt={name}
                className="h-5 w-5 rounded-full object-cover"
              />
              {name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="mt-3">
        <Button size="md" color="amber" fullWidth className="text-white">
          Signup
        </Button>
      </div>
      <div className="text-center mt-3">
        If already have an account then please{" "}
        <Link
          href="/login"
          className="inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all text-primary-400 hover:before:right-[0]"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
