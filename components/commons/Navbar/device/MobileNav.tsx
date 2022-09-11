import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FormControlLabel } from "@mui/material";
import { Transition } from "react-transition-group";
import Portal from "../../../portal";
import { MaterialUISwitch } from "../../../material-ui";
import { Menu, Close } from "@mui/icons-material";
import { useUI } from "../../../ui/context";

const MobileNav = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const {
    toggleMobileNav: toggleMenu,
    isMobileNavActive: menuActive,
    disableMenuNav: disableMenu,
  } = useUI();

  useEffect(() => {
    setMounted(true);
  }, []);

  const hackMobileHandler = () => {
    disableHandler();
    router.push("/hack");
  };

  const clickMenuHandler = () => {
    toggleMenu();
  };

  const disableHandler = () => {
    disableMenu();
  };

  return (
    <div className='p-5 md:hidden items-center flex bg-primary dark:bg-slate-900'>
      <div className='basis-2/5'>
        <h1
          className='tracking-[0.15em] font-semibold'
          onClick={disableHandler}
        >
          <Link href='/'>HADZAMI</Link>
        </h1>
      </div>
      {mounted && (
        <div className='basis-[20%] flex justify-center'>
          <button
            className='text-center w-full flex justify-center'
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <FormControlLabel
              label=''
              className='mx-auto'
              control={<MaterialUISwitch checked={theme === "dark"} />}
            ></FormControlLabel>
          </button>
        </div>
      )}

      <div className='basis-2/5 flex justify-end'>
        <button onClick={clickMenuHandler}>
          {!menuActive ? (
            <div className='flex gap-1 items-center'>
              <div>Menu</div>
              <div>
                <Menu />
              </div>
            </div>
          ) : (
            <div className='flex gap-1 items-center'>
              <div>Close</div>
              <div>
                <Close />
              </div>
            </div>
          )}
        </button>
      </div>

      <Portal id='slide'>
        <Transition in={menuActive} mountOnEnter unmountOnExit timeout={500}>
          {state => {
            return (
              <nav className={`md:hidden w-screen overflow-hidden`}>
                <ul
                  className={`flex flex-col z-30 h-full w-full items-center dark:bg-slate-900 bg-primary fixed gap-14 py-16 ${
                    state === "exiting"
                      ? "animate-out"
                      : state === "entering"
                      ? "animate-in"
                      : ""
                  }`}
                >
                  <li onClick={disableMenu}>
                    <Link href='/works'>Works</Link>
                  </li>
                  <li onClick={disableHandler}>
                    <Link href='/journals'>Journals</Link>
                  </li>
                  <li onClick={disableHandler}>
                    <Link href='/resume'>Resume</Link>
                  </li>
                  <li
                    onClick={hackMobileHandler}
                    className='bg-yellow-custom cursor-pointer dark:bg-blue-gray dark:text-sky-900 px-4 font-semibold py-[2px] rounded-sm'
                  >
                    Hack
                  </li>
                </ul>
              </nav>
            );
          }}
        </Transition>
      </Portal>
    </div>
  );
};

export default MobileNav;
