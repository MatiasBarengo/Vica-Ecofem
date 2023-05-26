import React from "react";
import { Navbar, Typography, IconButton, Collapse } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import DropdownButton from "./DropdownButton";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const location = useLocation();

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link
          to={"/"}
          className={`flex items-center justify-center hover:text-primary duration-200 ease text-lg hover:scale-110 ${
            location.pathname === "/" && "text-primary"
          }`}
        >
          Inicio
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link
          to={"/products"}
          className={`flex items-center justify-center hover:text-primary duration-200 ease text-lg hover:scale-110 ${
            location.pathname === "/products" && "text-primary"
          }`}
        >
          Productos
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link
          to={"/about"}
          className={`flex items-center justify-center hover:text-primary duration-200 ease text-lg hover:scale-110 ${
            location.pathname === "/about" && "text-primary"
          }`}
        >
          ¿Sabias que?
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <div
          className={`flex items-center justify-center hover:text-primary duration-200 ease text-lg hover:scale-105 ${
            location.pathname === "/contact" && "text-primary"
          }`}
        >
          <DropdownButton />
        </div>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      data-aos="fade-left"
      className="sticky inset-0 z-10 lg:w-[90vw] m-auto w-screen h-max max-w-full min-w-[350px] lg:rounded-xl rounded-none px-6 pb-6"
    >
      <div className="flex items-center justify-between text-blue-gray-900 drop-shadow-lg">
        <Link to={"/"} className="flex items-center gap-4 text-4xl text-primary">
          <img src="/png/logoNav.png" alt="logo" className="w-40" />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
}
