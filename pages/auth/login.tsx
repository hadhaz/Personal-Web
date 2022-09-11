import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React from "react";

interface State {
  password: string;
  showPassword: boolean;
}
const Login: React.FC = () => {
  return (
    <div className='h-full py-12'>
      <form className='w-[350px] md:w-[500px] mx-auto flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
            placeholder='hadzami@example.com'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
            placeholder='Secret Password'
          />
        </div>
        <button className='bg-yellow-custom dark:bg-blue-gray p-2 dark:text-sky-900 font-bold rounded-sm mt-2'>
          Login
        </button>
        <div>
          <p>
            Don&apos;t have an account?{" "}
            <Link href='/auth/register'><strong className="cursor-pointer">Register</strong></Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
