"use client"

import { Slidder } from "../_Components/carousel";
import Header from "../_Components/header";


export default function Home() {

  return (
    <>
      <header><Header /></header>

      <main className="mt-1">
        <Slidder />
      </main>
    </>
  );
}
