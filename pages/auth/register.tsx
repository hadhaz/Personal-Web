import Link from "next/link";

const Register: React.FC = () => {
  return (
    <div className='py-12'>
      <form className='w-[400px] md:w-[500px] mx-auto flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            className='border-2 bg-transparent border-yellow-custom dark:border-blue-gray w-full outline-none py-1 px-2'
            placeholder='Achmad Hadzami Setiawan'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='gender'>Gender</label>
          <select
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
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Password Confirmation</label>
          <input
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
