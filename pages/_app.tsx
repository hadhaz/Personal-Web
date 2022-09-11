import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/commons/Layout/Layout";
import { UIContextProvider } from "../components/ui/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
        <Component {...pageProps} />
    </UIContextProvider>
  );
}

export default MyApp;
