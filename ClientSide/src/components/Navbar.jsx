import React from "react";
import navbarlogo from "../images/navbarlogo.png";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Container from "./Container";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="gray"
        className="p-1 font-medium"
      >
        <Link
          to="/event"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Events
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="gray"
        className="p-1 font-medium"
      >
        <Link
          to="/campus"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Campus
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="gray"
        className="p-1 font-medium"
      >
        <Link
          to="/notices"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Notices
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div>
        <Container>
          <Navbar className="mx-auto shadow-none rounded-none px-6 py-3">
            <div className="flex items-center justify-between text-gray-900">
              <Link to="/">
                <img
                  className="w-[180px] cursor-pointer"
                  src={navbarlogo}
                  alt="Logo"
                />
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
              </IconButton>
            </div>
            <Collapse open={openNav}>
              <NavList />
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
}
