import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NextGenAILogo from "../NextGenAILogo";
import Navlinks from "./NavLinks";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const navbarMenu = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Navlink Items
  const menu = [
    {
      index: 1,
      name: "Home",
      url: "/",
    },
    {
      index: 2,
      name: "About Us",
      url: "/about",
    },
    {
      index: 3,
      name: "Services",
      url: "/services",
    },
    {
      index: 4,
      name: "Projects",
      url: "/projects",
    },
    {
      index: 5,
      name: "Blog",
      url: "/blog",
    },
    {
      index: 6,
      name: "Contact",
      url: "/contact",
    },
  ];

  // To open and close hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked!");
    if (menuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const handleSearch = () => {
    const searchInput = document.querySelector(".search-input");
    if (searchInput && searchInput.classList.contains("hidden")) {
      searchInput.classList.remove("hidden");
      searchInput.classList.add("block");
    }
  };

  useEffect(() => {
    if (searchValue !== "") {
      navigate(`${window.location.pathname}?q=${searchValue}`);
    } else {
      navigate(window.location.pathname);
    }
  }, [searchValue]);

  return (
    <>
      <div
        className={`navbar sm:px-4 md:px-10 sticky left-0 right-0 top-0 z-[2000] w-full max-w-full bg-black`}
      >
        {/* Mobile Wrapper */}
        <div
          className={`hidden sm:block nav-blur-wrapper w-full h-screen pointer-events-none top-0 left-0 absolute transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen
              ? "bg-black/10 backdrop-blur-sm z-[1004] pointer-events-auto"
              : "opacity-0"
          }
          }`}
        >
          <div
            className={`menu-container bg-[#181818] w-[70vw] text-white absolute top-0 right-0 h-screen z-[1002] ${
              menuOpen ? "open" : ""
            } flex flex-col gap-4 rounded-tl-3xl rounded-bl-3xl`}
            ref={navbarMenu}
          >
            <div
              className="menu-close-btn absolute top-5 right-5"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <nav className="menu-nav-links w-full flex flex-col justify-center items-center gap-4 flex-wrap flex-shrink-0">
              {menu.map((item) => (
                <Navlinks key={item.index} {...item} />
              ))}
            </nav>
            <div
              className="authentication-btn w-full flex gap-5 px-4 py-2 bg-white active:bg-white/80 text-black rounded-2xl my-5 cursor-pointer"
              onClick={() => {
                toggleMenu();
                navigate("/authentication");
              }}
            >
              <p>Login</p>
              <div className="login-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`main-nav w-full h-full flex items-stretch max-w-full gap-6 p-2 px-5 transition-all duration-500 ease-in-out sm:px-4`}
        >
          <div className="logo-box w-2/5 flex items-center justify-end sm:w-full sm:justify-center">
            <NextGenAILogo
              className="cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* <div className="navbar-search-box w-2/5 flex justify-center items-center transition-all duration-500 ease-in-out flex-shrink sm:flex-1">
            <div className="input-box w-full flex justify-stretch items-center py-3 px-4 bg-white gap-2 rounded-full">
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={searchValue !== "" ? 3 : 2}
                  stroke="#404040"
                  className="size-5 transition-all duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search Creator/Product"
                className="search-input selection:text-[#fff] selection:bg-[#181818] focus:outline-none placeholder:text-[#404040] text-[16px] bg-transparent w-full text-[#404040]"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div> */}

          <nav className="nav-links w-1/2 sm:hidden flex justify-center items-center gap-8 flex-wrap flex-shrink-0 selection:text-black selection:bg-white">
            {menu.map((item) => (
              <Navlinks key={item.index} {...item} />
            ))}
          </nav>

          <div className="btns w-2/5 flex gap-6 justify-start items-center select-none sm:hidden">
            <button className="search-btn flex gap-3"
              onClick={() => { handleSearch() }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="white"
                className="size-6 select-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Creator/Product"
                className="search-input hidden selection:text-black selection:bg-white focus:outline-none placeholder:text-white/50 text-[16px] bg-transparent w-full text-white border-b-[2px] border-white pb-[2px]"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </button>

            <button
              className="quote-cta-btn bg-white p-px rounded-md cursor-pointer transition-all duration-200 ease-in-out shrink-0"
              onClick={() => {
                navigate("/authentication");
              }}
            >
              <div className="btn-inner bg-black text-white text-xs font-bold flex items-stretch py-3 px-4 gap-2 rounded-md relative">
                <p>Get A Quote</p>
                <div className="cta-icon place-self-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          <div
            className={`hamburger-menu hidden sm:flex sm:w-max justify-start items-center select-none}`}
            draggable={false}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
