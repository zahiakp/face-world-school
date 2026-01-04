"use client";

import { useState } from "react";
import { toast } from "sonner";
import { adminLogin } from "@/app/actions/authActions";
import { useRouter } from "next/navigation";

import Image from "next/image";

import TailspinLoader from "@/components/common/TailspinLoader";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await adminLogin(formData);

    if (result.success) {
      toast.success("Login Successful");
      router.replace("/admin");
    } else {
      toast.error(result.error);
      setLoading(false);
    }
  }

  return (
    <form
      className="h-full md:h-fit bg-white overflow-hidden md:rounded-2xl border border-zinc-200 
             items-center justify-center w-full max-w-[600px] grid grid-cols-5"
      onSubmit={handleSubmit}
    >
      <div className="bg-green p-14 w-full h-full flex items-center justify-center col-span-2 shadow-inner">
        {/* <div className="size-40 flex items-center justify-center ring-1 ring-offset-8 ring-offset-green ring-white/10 bg-white/5 p-5 rounded-full"> */}
        <Image
          src="/images/logo green light.png"
          width={208}
          height={208}
          className="w-52 h-auto"
          alt="FACEx Logo"
          priority
        />
        {/* </div> */}
      </div>
      <div className="flex flex-col col-span-3 px-14 p-10 w-full">
        <h1 className="text-2xl font-bold my-3 text-zinc-900">
          <span className="font-[400] ">Login to</span>{" "}
          <span className="text-green">Panel</span>
        </h1>

        <div className="w-full">
          <input
            type="text"
            name="email"
            required
            className="px-4 py-3 rounded-lg border text-zinc-900 border-zinc-200 focus:border-green focus:ring-4 focus:ring-green/10 outline-none my-2 w-full transition-all"
            placeholder="Email"
          />
        </div>

        <div className="w-full">
          <input
            type="password"
            name="password"
            required
            className="px-4 py-3 rounded-lg border text-zinc-900 border-zinc-200 focus:border-green focus:ring-4 focus:ring-green/10 outline-none my-2 w-full transition-all"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="py-3 px-7 w-full mt-4 mb-2 h-[52px] flex items-center justify-center cursor-pointer bg-green hover:bg-green-200 active:scale-95 rounded-lg text-white text-lg font-semibold duration-300 shadow-lg shadow-green/20"
          disabled={loading}
        >
          {loading ? (
            <TailspinLoader size="20" color="white" speed="1.2" />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
