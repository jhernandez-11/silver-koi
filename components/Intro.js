import React from "react";

const Intro = (props) => (
  <React.Fragment>
    <div className="cont">
      <header className="header text-7xl w-full py-16 px-24 flex justify-between place-items-start">
        <div>
          <h1 className="header__sk">
            Jose L Hernandez
          </h1>
          <h3 className="header__jd text-5xl mt-6"> Web Developer / <br /> Designer</h3>
        </div>
        <h1 className="header__about hover:text-black transition cursor-pointer h-auto">About</h1>
      </header>
      <main className="main">
        <img src="/logo1.png" className="main__logo"></img>
        <h1 className="text-9xl text-black">Silver Koi</h1>
      </main>
      <div className="bar"></div>
    </div>
  </React.Fragment>
);

export default Intro;
