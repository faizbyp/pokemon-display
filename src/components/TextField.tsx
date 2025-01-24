import { Controller } from "react-hook-form";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  password?: boolean;
  name: string;
  control: any;
  rules?: any;
}

const TextField = ({ label, placeholder, password, name, control, rules }: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className="w-full max-w-sm min-w-[200px] mb-2">
            <label className="block mb-2 text-sm text-slate-700">{label}</label>
            <input
              {...field}
              type={password ? "password" : "text"}
              className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-500 shadow-sm focus:shadow ${
                error && "border-red-600"
              }`}
              placeholder={placeholder}
            />
            {error && (
              <p className="flex items-start mt-2 text-xs text-red-600">{error?.message}</p>
            )}
          </div>
        </>
      )}
    />
  );
};
export default TextField;
