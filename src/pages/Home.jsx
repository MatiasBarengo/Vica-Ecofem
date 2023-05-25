import React from "react";
import headerImg from "/png/ToallitasHeader.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="relative flex justify-center p-6">
        <div>
          <div></div>
          <Link
            to={"/Products"}
            className="flex justify-center items-center max-w-[500px] bg-[#e4dddb] rounded-full p-10 aspect-square"
            data-aos="fade-right"
          >
            <img
              data-aos="fade-bottom"
              className=" hover:scale-110 duration-[350ms]"
              src={headerImg}
              alt=""
            />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
