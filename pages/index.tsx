
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reddit 2.0</title>
      </Head>
      <Header/>
    </div>
  );
}
