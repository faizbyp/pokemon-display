"use client";
import Loading from "@/components/Loading";
import TextField from "@/components/TextField";
import useFetch from "@/hooks/useFetch";
import { Params, PokeOverview } from "@/types/type";
import { capitalize } from "@/utils/helper";
import Image from "next/image";
import { use } from "react";
import { useForm } from "react-hook-form";

// Login Page
export default function Login() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="my-8">Login</h1>
      <div className="max-w-sm">
        <TextField
          label="Username"
          name="username"
          control={control}
          rules={{ required: "This field is required." }}
        />
        <TextField
          label="Password"
          password
          name="password"
          control={control}
          rules={{ required: "This field is required." }}
        />
        <div className="text-end">
          <button
            className="px-2 py-1 bg-slate-600 text-white rounded hover:bg-slate-700 active:bg-slate-950 transition-all"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
