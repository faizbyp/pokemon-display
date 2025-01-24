"use client";
import TextField from "@/components/TextField";
import useUserStore from "@/hooks/useUserStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Login Page
export default function Login() {
  const router = useRouter();
  const setCredentials = useUserStore((state) => state.setCredentials);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
    setCredentials(values.username, values.password);
    router.replace("/");
  };

  return (
    <>
      <h1 className="my-8">Login</h1>
      <form className="max-w-sm">
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
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
