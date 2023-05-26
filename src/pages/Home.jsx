import React from "react";
import logoHeader from "/png/logo.png";
import packTowel from "/jpg/toallitasEmpaquetadas.jpg";
import towels from "/jpg/toallitasColores.jpg";
import headerImg from "/jpg/headerImg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="flex flex-col justify-around gap-20 lg:gap-0 items-center lg:flex-row py-6 px-[5vw] w-screen h-fit">
      <img
        className=" hidden lg:inline-block absolute top-0 right-0 w-screen h-[90vh]"
        src={headerImg}
        alt="header-img"
      />
      <div data-aos="fade-left" className="w-fit flex justify-center items-center">
        <img className="max-w-[450px] drop-shadow-lg" src={logoHeader} alt="" />
      </div>
      <div
        data-aos="fade-right"
        className="relative w-[40%] h-full flex flex-col justify-center items-center gap-4"
      >
        <h1 className="italic text-4xl text-primary z-30 text-center drop-shadow-md mb-4">
          Toallitas femeninas ecologicas
        </h1>
        <div className="hidden lg:flex justify-center absolute bg-gradient-to-t from-bgColor via-bgColor to-white top-4 h-[2rem] w-full rounded-full shadow-lg"></div>
        <Link
          to={"/products"}
          className="flex flex-col lg:flex-row gap-8 items-center justify-center w-fit mb-10 lg:mb-0 hover:scale-110 duration-300 ease"
        >
          <div className="relative flex justify-center">
            <h3 className="text-2xl text-primary drop-shadow-lg z-20">Nuestros productos</h3>
            <div className="hidden lg:inline-block absolute bg-gradient-to-t from-bgColor via-bgColor to-white top-4 h-5 w-[110%] rounded-full shadow-lg z-10"></div>
          </div>
          <img className="rounded-3xl w-36 lg:w-44" src={packTowel} alt="toallita" />
        </Link>
        <Link
          to={"/about"}
          className="relative flex flex-col-reverse lg:flex-row gap-8 items-center justify-center hover:scale-110 duration-300 ease"
        >
          <img className="rounded-3xl w-36 lg:w-44" src={towels} alt="tres-toallitas" />
          <div className="relative flex justify-center">
            <h3 className="text-2xl text-primary drop-shadow-lg z-20">Conoce más...</h3>
            <div className="hidden lg:inline-block absolute bg-gradient-to-t from-bgColor via-bgColor to-white top-4 h-5 w-[110%] rounded-full shadow-lg z-10"></div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Home;
