import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {SessionProvider} from 'next-auth/react'
import Header from "@/components/Header";

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
  <SessionProvider session={session}> 
  <div className="h-screen overlfow-y-scroll bg-slate-200">
    <Header/>
    <Component {...pageProps} />
  </div>
  </SessionProvider>)
}

