import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Transition } from "react-transition-group";
import {
  DarkMode,
  LightMode,
  Menu,
  Lock,
  KeyboardDoubleArrowLeft,
} from "@mui/icons-material";
import NavLink from "../../../navlink";
import { useUI } from "../../../ui/context";

const DesktopNav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [hacked, setHacked] = useState(false);
  const [temporaryLocked, setTemporaryLocked] = useState(false);
  const router = useRouter();
  const { toggleFab, isFabActive } = useUI();

  useEffect(() => {
    setMounted(true);
  }, []);

  const sideBarHandler = () => {
    setSideBar(true);
  };

  const unSideBarHandler = () => {
    if (!hacked && !temporaryLocked) {
      setSideBar(false);
    }
  };

  const hackHandler = () => {
    setHacked(val => !val);
  };

  const loginHandler = () => {
    setSideBar(false);
    router.push("/auth/login");
  };

  const registerHandler = () => {
    setSideBar(false);
    router.push("/auth/register");
  };

  const helpHandler = () => {
    setSideBar(false);
    setTimeout(() => {
      router.push("/help");
    }, 400);
  };

  return (
    <div className='max-w-7xl mx-auto hidden md:flex bg-primary dark:bg-slate-900'>
      <div
        className='w-24 2xl:w-96 min-h-[40vh] fixed right-0'
        onMouseEnter={sideBarHandler}
        onMouseLeave={unSideBarHandler}
      ></div>
      <div className='basis-1/3 py-5 pl-10'>
        <h1 className='tracking-[0.15em] font-semibold'>
          <Link href='/'>HADZAMI</Link>
        </h1>
      </div>
      <div className='basis-1/3 flex justify-center py-5'>
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
      <div className='h-full basis-1/3 flex justify-end items-center'>
        <div
          className='z-50 py-5 w-52 text-right pr-10'
          onMouseEnter={sideBarHandler}
          onMouseLeave={unSideBarHandler}
        >
          <h3
            className='z-50 cursor-pointer py-1 px-3'
            onClick={hackHandler}
          >
            {hacked ? (
              <Lock />
            ) : sideBar ? (
              <KeyboardDoubleArrowLeft />
            ) : (
              <Menu />
            )}
          </h3>
        </div>
      </div>

      {mounted && (
        <Transition in={sideBar} timeout={400}>
          {state => (
            <div
              onMouseLeave={unSideBarHandler}
              onMouseEnter={sideBarHandler}
              className={`${
                state === "entering"
                  ? "animate-hacked-in"
                  : state === "exiting"
                  ? "animate-hacked-out"
                  : state === "exited"
                  ? "hidden"
                  : ""
              } w-52 2xl:w-80 flex flex-col gap-5 pt-2 pb-8 top-16 right-0 absolute shadow-sm shadow-black dark:shadow-cream text-center rounded-sm dark:bg-primary bg-slate-800 text-slate-100 dark:text-sky-900 font-semibold`}
            >
              <div className='flex justify-end px-2 w-full'></div>
              <div className='border-b-2 border-transparent hover:border-yellow-custom'>
                <button onClick={loginHandler}>Login</button>
              </div>
              <div className='border-b-2 border-transparent hover:border-yellow-custom'>
                <button onClick={registerHandler}>Register</button>
              </div>
              <div className='border-b-2 border-transparent hover:border-yellow-custom'>
                <button className='basis-full' onClick={helpHandler}>
                  Help Center
                </button>
              </div>
              <div className=''>
                <button
                  className='mx-auto bg-blue-gray rounded-md p-1 text-sky-900 hover:text-black'
                  onClick={toggleFab}
                >
                  {isFabActive ? "Hide FAB" : "Activate FAB"}
                </button>
              </div>
              <div className='justify-center flex text-slate-900 dark:text-inherit'>
                <button
                  className='hover:bg-yellow-200  bottom-4 hidden rounded-md md:block right-4 bg-yellow-custom font-semibold dark:text-sky-900 p-1'
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
