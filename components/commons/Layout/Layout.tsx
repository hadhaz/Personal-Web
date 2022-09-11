import { useEffect, useState } from "react";
import MainHeader from "../Navbar/MainHeader";
import Grid from "@mui/material/Grid";
import { useUI } from "../../ui/context";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useTheme } from "next-themes";

const Layout: React.FC<{ children: React.ReactNode }> = props => {
  const { theme, setTheme } = useTheme();
  const { isMobileNavActive: menuActive, isFabActive } = useUI();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    return setMounted(true);
  }, []);

  let floatingButton = mounted && (
    <button
      className='fixed bottom-4 hidden md:block right-4 bg-cream rounded-full'
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      <Fab size='small'>
        {theme === "light" && <DarkMode />}
        {theme === "dark" && <LightMode />}
      </Fab>
    </button>
  );

  return (
    <Grid
      className={`min-h-screen ${
        menuActive ? "overflow-hidden h-screen" : ""
      } bg-hero dark:bg-hero-dark`}
    >
      <MainHeader />
      <div id='slide'></div>
      {props.children}
      <div id='fab'>{isFabActive && floatingButton}</div>
    </Grid>
  );
};

export default Layout;
