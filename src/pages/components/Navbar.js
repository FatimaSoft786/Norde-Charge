
import { useState } from "react";

import logo from "../../images/logo.svg";
import {Link} from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";


import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const navItems = [
   {
    label: "Home",
    link: "/"
  },
  {
    label: "Products",
    link: "/all",
    children: [
      {
        label: "eSat r10/r20",
        link: "/eSat",
        iconImage: ""
      },
      {
        label: "Wallbox ebox r20",
        link: "/wallbox",
        iconImage: ""
      },
      {
        label: "Wallbox ebox wr30",
        link: "/wallbox1",
        iconImage: ""
      },
      {
        label: "Smart Box",
        link: "/smartBox",
        iconImage: ""
      },
       {
        label: "Ecc",
        link: "/eCC",
        iconImage: ""
      },
       {
        label: "Elms",
        link: "/eLms",
        iconImage: ""
      },
       {
        label: "ELight",
        link: "/eLight",
        iconImage: ""
      },
       {
        label: "ELight",
        link: "/eLight",
        iconImage: ""
      }
    ]
  },
  {
    label: "Solutions",
    link: "/private",
    children: [
      {
        label: "Private",
        link: "/private"
      },
      {
        label: "Commercial",
        link: "/commercial"
      },
      {
        label: "Public",
        link: "/public"
      }
    ]
  },
  {
    label: "Service",
    link: "/loading"
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  
  function openSideMenu() {
    setSideMenue(true);
  }
  
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto sticky z-50 flex  w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <img src={logo} alt=" logo" />
        {/* {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />} */}
        <div className="flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              to={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      to={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black">
                     
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
         {/* <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl "
      /> */}
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(d) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
             
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
