import Head from "next/head";
import React from "react";
import Intro from "../components/Intro";

export default function Home() {
  if (process.browser) {
    let body = document.body,
      html = document.documentElement;

    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    console.log(height);
  }

  return (
    <React.Fragment>
      <Head>
        <title>
          Silver Koi | by Jose Hernandez - Web Developer and Designer
        </title>
        <meta name="description" content="Silver Koi - Contact, Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Intro />
    </React.Fragment>
  );
}
