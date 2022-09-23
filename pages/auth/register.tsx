import React, { useRef } from "react";
import Link from "next/link";
import { Password } from "@mui/icons-material";

const Register: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const passConfirmRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const gender = genderRef.current?.value;
    const email = emailRef.current?.value;
    const pass = passRef.current?.value;
    const passConfirm = passConfirmRef.current?.value;
    const URL = process.env.NEXT_PUBLIC_FIREBASE_URL;

    console.log(URL);

    if (pass != passConfirm) {
      alert("Password did not match");
      return;
    }

    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ password: pass, email, name, gender }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className='py-12'>
      <form
        className='w-[350px] md:w-[500px] mx-auto flex flex-col gap-2'
        onSubmit={submitHandler}
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'>Name</label>
          <input
            ref={nameRef}
            type='text'
            id='name'
            className='border-2 bg-transparent border-yellow-custom dark:border-blue-gray w-full outline-none py-1 px-2'
            placeholder='Achmad Hadzami Setiawan'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='gender'>Gender</label>
          <select
            ref={genderRef}
            defaultValue='other'
            className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none py-[6px] px-2'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>Email</label>
          <input
            ref={emailRef}
            type='email'
            id='email'
            className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
            placeholder='hadzami@example.com'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Password</label>
          <input
            ref={passRef}
            type='password'
            id='password'
            className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
            placeholder='Secret Password'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Password Confirmation</label>
          <input
            ref={passConfirmRef}
            type='password'
            id='password'
            className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
            placeholder='Secret Password'
          />
        </div>
        <button className='bg-yellow-custom dark:bg-blue-gray p-2 dark:text-sky-900 font-bold rounded-sm mt-2'>
          Register
        </button>
        <div>
          <p>
            You have an account?{" "}
            <Link href='/auth/login'>
              <strong className='cursor-pointer'>Login</strong>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
