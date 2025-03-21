import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Roboto } from "next/font/google";
import { store } from "@/store/store";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${roboto.className}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
