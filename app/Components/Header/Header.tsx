"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Link from "next/link";

import Style from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      {/* <header className={Style.header}>
        <div className={Style.logoSearch}>
          <div className={Style.logoDiv}>
            <div className={Style.logo}>
              <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717142581576x589293308934299500%2FLOGO.gif?w=96&amp;h=58&amp;auto=compress&amp;dpr=1.5&amp;fit=max" />
            </div>
          </div>
          <div className={Style.searchDiv}>
            <button className={Style.searchIcon}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className={Style.placeHolder}>
                <span className={Style.placeWrite}>
                <input type="text" className={
                Style.inputTag
            } readOnly autoComplete="off" spellCheck="false" tabIndex={-1}/>
            <input type="text" className={Style.inputTag2} autoComplete="off" spellCheck="false"/>
            <pre aria-hidden="true" className={Style.preTag}></pre>
                </span>
            
            </div>
            <div className={Style.inputAfter}>
                Creator
            </div>
           
           

          </div>

        </div>
      </header> */}

      {/* <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717142581576x589293308934299500%2FLOGO.gif?w=96&amp;h=58&amp;auto=compress&amp;dpr=1.5&amp;fit=max" /> */}
      <header className="flex justify-center">
        <div className={Style.header}>
          <div className={Style.logoSearch}>
            <div className={Style.logo}>
              <Link href="/">
                <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717142581576x589293308934299500%2FLOGO.gif?w=96&amp;h=58&amp;auto=compress&amp;dpr=1.5&amp;fit=max" />
              </Link>
            </div>
            <div className={Style.searchDiv}>
              <button className={Style.searchIcon}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type="text"
                placeholder="Search Creator"
                className={Style.inputTag}
              />
               {/* <span className={Style.searchSpan}> Product</span> */}
              <span className={Style.searchSpan}> Creator</span>
            </div>
          </div>
          <div className={Style.nav}>
            <ul className={Style.navList}>
              <li className={Style.navLi}>
                <Link href="#">Contact Us</Link>
              </li>
              <li className={Style.navLi}>
                <Link href="#">About Us</Link>
              </li>
              <li className={Style.navLi}>
                <Link href="#">Policies</Link>
              </li>
            </ul>
          </div>
          <div className={Style.loginSignUp}>
            <Link href="LoginSignUp">
              {" "}
              <button className={Style.loginSignUpButton}>Login</button>{" "}
            </Link>
          </div>

          <div
            onClick={handleNav}
            className={`hmbrgr lg:hidden cursor-pointer mr-5 ${Style.navigate}`}
          >
            <AiOutlineMenu size={50} />
          </div>
        </div>
      </header>
      <div
        className={`
      ${
        menuOpen
          ? `fixed w-[30%] h-[80vh] top-[7%] left-[65%] rounded-2xl bg-[#f8f9fb] px-5 py-5 mr-4 ease-in duration-500 ${Style.shad}`
          : `fixed top-[7%] left-[100%]  w-[30%] ease-in duration-500 p-10 h-[80vh] bg-[#f8f9fb] ${Style.shad}`
      }`}
      >
        
        <div onClick={handleNav} className="my-[10px] float-right cursor-pointer border-2 border-black" >
          <AiOutlineClose size={25}  />
        </div>
        
        

        <div className=" mt-[25%]">
          {" "}
          <ul className="text-center">
            <li className="mb-5 border-b-2 border-black rounded-2xl">
              <Link href="#">Contact Us</Link>
            </li>
            <li className="mb-5 border-b-2 border-black rounded-2xl">
              <Link href="#">About Us</Link>
            </li>
            <li className="mb-5 border-b-2 border-black rounded-2xl">
              <Link href="#">Policies</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
