// import Usestate from "../Usestate";
import { useState } from "react";
import Icons from "../common/Icons";
import Counter from "../Counter";
import { useEffect } from "react";
import BackToTop from "../common/BackToTop";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);

  function toggledarkmode() {
    const newMode = !darkMode;

    setDarkMode(newMode);

    document.body.setAttribute(
      "theme",
      newMode ? "dark" : "light"
    );
  }

  const MAP_DATA = [
    {
      name: "Home",
    },

    {
      name: "About",
    },

    {
      name: "Service",
    },

    {
      name: "Home",
    },

    {
      name: "Faq",
    },

    {
      name: "Contact Us",
    },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <section className="min-h-screen w-full flex flex-col dark:bg-black bg-bright-orange py-6">
        <div className="mx-auto px-5 w-full max-w-345">
          <div className="flex items-center justify-between gap-7">
            <div>
              <a
                href="#"
                className="text-white text-3xl leading-150 font-semibold"
              >
                Logo
              </a>
            </div>
            <div
              className={`flex items-center justify-between gap-7 transition-all duration-400 ease-in max-w-4xl w-full  max-lg:fixed max-lg:justify-center max-lg:w-full max-lg:max-w-full max-lg:z-999 max-lg:bg-bright-orange  max-lg:h-full max-lg:top-0  ${open ? "max-lg:right-0" : "max-lg:-right-full"}`}
            >
              <div>
                <ul className="flex items-center justify-center gap-5 max-lg:flex-col">
                  {MAP_DATA.map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => setOpen(!open)}
                        className="text-white text-lg leading-150 hover:text-white/70 transition-all duration-300 ease-in"
                        href="#"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}

                  <li className="max-lg:flex hidden">
                    <button onClick={toggledarkmode} className="bg-bright-orange rounded-xl border-[0.7px] border-white transition-all duration-300 ease-in cursor-pointer hover:bg-white text-base leading-150 py-3 px-6 text-white hover:text-bright-orange ">
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex max-lg:hidden">
                <button onClick={toggledarkmode} className="bg-bright-orange rounded-xl border-[0.7px] border-white transition-all duration-300 ease-in cursor-pointer hover:bg-white text-base leading-150 py-3 px-6 text-white hover:text-bright-orange ">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
            <div className="max-lg:flex hidden">
              <button
                className=" relative z-9999"
                onClick={() => setOpen(!open)}
              >
                <Icons icon={open ? "crossmenu" : "menu"} />
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto px-5 max-w-345">
          <div className="w-full flex items-center justify-center mt-30">
            <Counter />
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-amber-500 w-full dark:bg-black"></section>
      <BackToTop darkMode={darkMode} />
    </>
  );
};

export default Navbar;
