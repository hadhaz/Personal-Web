import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Grid } from "@mui/material";
import { Transition } from "react-transition-group";
import { Close, DarkMode, LightMode } from "@mui/icons-material";
import NavLink from "../../../navlink";
import { useUI } from "../../../ui/context";

const DesktopNav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hacked, setHacked] = useState(false);
  const router = useRouter();
  const { toggleFab, isFabActive } = useUI();

  useEffect(() => {
    setMounted(true);
  }, []);

  const hackHandler = () => {
    setHacked(true);
  };

  const loginHandler = () => {
    setHacked(false);
    router.push("/auth/login");
  };

  const registerHandler = () => {
    setHacked(false);
    router.push("/auth/register");
  };

  const helpHandler = () => {
    setHacked(false);
    setTimeout(() => {
      router.push("/help");
    }, 400);
  };

  return (
    <div className='px-10 py-5 hidden md:flex bg-primary dark:bg-slate-900'>
      <div className='basis-1/3'>
        <h1 className='tracking-[0.15em] font-semibold'>
          <Link href='/'>HADZAMI</Link>
        </h1>
      </div>
      <div className='basis-1/3 flex justify-center'>
        <nav className='w-full'>
          <ul className='grid grid-cols-3 text-center'>
            <li>
              <NavLink
                activeStyle='font-medium text-[1.02em]'
                className='hover:underline'
                href='/works'
              >
                Works
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle='font-medium text-[1.02em]'
                className='hover:underline'
                href='/journals'
              >
                Journals
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle='font-medium text-[1.02em]'
                className='hover:underline'
                href='/resume'
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='basis-1/3 flex justify-end items-center'>
        <h3
          onClick={hackHandler}
          className='dark:bg-cream py-1 px-3 dark:text-slate-800 bg-yellow-custom text-slate-800 font-semibold rounded-md'
        >
          Hack
        </h3>
      </div>

      {mounted && (
        <Transition in={hacked} timeout={600}>
          {state => (
            <div
              className={`${
                state === "entering"
                  ? "animate-hacked-in"
                  : state === "exiting"
                  ? "animate-hacked-out"
                  : state === "exited"
                  ? "hidden"
                  : ""
              } w-64 flex flex-col gap-5 pt-2 pb-8 top-0 right-0 absolute shadow-md shadow-black dark:shadow-cream text-center rounded-bl-md dark:bg-primary bg-slate-800 text-slate-100 dark:text-sky-900 font-semibold`}
            >
              <div className='flex justify-end px-2 w-full'>
                <button
                  onClick={() => {
                    setHacked(false);
                  }}
                >
                  <Close />
                </button>
              </div>
              <div>
                <button onClick={loginHandler}>Login</button>
              </div>
              <div>
                <button onClick={registerHandler}>Register</button>
              </div>
              <div className=''>
                <button className='basis-full' onClick={helpHandler}>
                  Help Center
                </button>
              </div>
              <div className=''>
                <button
                  className='mx-auto bg-blue-gray rounded-md p-1 text-sky-900'
                  onClick={toggleFab}
                >
                  {isFabActive ? "Hide FAB" : "Activate FAB"}
                </button>
              </div>
              <div className='justify-center flex text-slate-900 dark:text-inherit'>
                <button
                  className='bottom-4 hidden rounded-md md:block right-4 bg-yellow-custom font-semibold dark:text-sky-900 p-1'
                  onClick={() => {
                    theme === "dark" ? setTheme("light") : setTheme("dark");
                  }}
                >
                  {theme === "light" && (
                    <div className='flex gap-1'>
                      <DarkMode />
                      <p>Dark Mode</p>
                    </div>
                  )}
                  {theme === "dark" && (
                    <div className='flex gap-1'>
                      <LightMode /> <p>Light Mode</p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}
        </Transition>
      )}
    </div>
  );
};

export default DesktopNav;
