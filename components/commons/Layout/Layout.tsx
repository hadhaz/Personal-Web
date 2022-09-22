import { useEffect, useState } from "react";
import Head from "next/head";
import MainHeader from "../Navbar/MainHeader";
import Grid from "@mui/material/Grid";
import { useUI } from "../../ui/context";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Layout: React.FC<{ children: React.ReactNode }> = props => {
  const { theme, setTheme } = useTheme();
  
  if (!theme) setTheme("light");
  
  const { isMobileNavActive: menuActive, isFabActive } = useUI();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    return setMounted(true);
  }, []);

  const path = router.pathname.replace("/", "");

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
    <>
      <Head>
        <title>{path || "Hadzami's Personal Website"}</title>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content="This is Achmad Hadzami Setiawan's Personal Website. All's about Achmad Hadzami Setiawan (Resume, Projects, Contact, and more) You can also get in touch hadzami using this website"
        />
        <meta
          name='keywords'
          content='Achmad Hadzami Setiawan, Universitas Gadjah Mada, Computer Science, Ilmu Komputer, FMIPA, Fakultas MIPA, UGM, SMAN 2 Lamongan, Web Developer, Hadzami, Zami'
        />
        <meta name='author' content='Achmad Hadzami Setiawan' />
        <meta
          name='google-site-verification'
          content='LgLRpbJ7a-3ucx9rRxooQqRSWE9A7eitXzS5-nfB-CA'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
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
    </>
  );
};

export default Layout;
