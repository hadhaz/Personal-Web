import { useRouter } from "next/router";
import { Grid } from "@mui/material";

const Hack: React.FC = () => {
  const router = useRouter();
  const loginHandler = () => {
    router.push("/auth/login");
  };
  const registerHandler = () => {
    router.push("/auth/register");
  };
  const helpHandler = () => {
    router.push("/help");
  };

  return (
    <Grid container padding={2} rowGap={2} className=' font-semibold'>
      <h1 className='text-lg'>Hack Feature</h1>
      <Grid
        container
        item
        onClick={loginHandler}
        className='hover:text-slate-900 dark:text-white justify-center dark:hover:text-slate-700 bg-yellow-transparent hover:bg-yellow-custom py-2 px-4 rounded-sm'
      >
        <button>Login</button>
      </Grid>
      <Grid
        container
        item
        onClick={registerHandler}
        className='hover:text-slate-900 dark:text-white justify-center dark:hover:text-slate-700 bg-yellow-transparent hover:bg-yellow-custom py-2 px-4 rounded-sm'
      >
        <button>Register</button>
      </Grid>
      <Grid
        container
        item
        onClick={helpHandler}
        className='hover:text-slate-900 dark:text-white justify-center dark:hover:text-slate-700 bg-yellow-transparent hover:bg-yellow-custom py-2 px-4 rounded-sm'
      >
        <button>Help Center</button>
      </Grid>
    </Grid>
  );
};

export default Hack;
