"use client";

import { useRouter } from "next/navigation";

// import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./login.module.css";

interface HRWithTextProps {
  text: string;
  width: string;
}

const HrWithText: React.FC<HRWithTextProps> = ({ text, width = "70%" }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${Style.hrDiv} ${
        isSmallScreen ? "mx-auto my-[10px]" : "mx-auto my-[20px]"
      }`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // margin: "20px auto",
        width: width,
      }}
    >
      <hr className={`${Style.hrLine}`} />
      <span className={`${Style.hrTxt} text-black`}>{text}</span>
      <hr className={`${Style.hrLine}`} />
    </div>
  );
};

// Login and SignUp Form

export default function Login() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isyes, setIsyes] = useState(false);

  const isYes = () => {
    setIsyes(!isyes);
    // event.preventDefault(); // Prevent the default link behavior
    // event.stopPropagation(); // Prevent click event from bubbling up
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLoginLinkClick = () => {
    // Reset signUp state to false
    setIsSignUp(false);

    // Navigate to the login page
    router.push("/LoginSignUp");
  };

  //to handle the view of the window
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <div className={`${Style.row} row mt-[10%]  flex h-[100vh]`}>
          {/* Left side with the image */}
          <div className={`w-[50%] h-[100%]  ${Style.frstDiv}`}>
            <Image
              src="/signup_image.svg"
              alt="Signup Image"
              width={450}
              height={200}
              className={`mt-[8%] rounded object-cover ${Style.img}`}
            />
          </div>

          {/* Right side with the signup form */}
          <div className={`w-[40%] h-[100%] ${Style.rightDiv}`}>
            <form className="">
              <h1
                className={`font-semibold text-[40px] text-center ${
                  Style.headTxt
                }   ${isSmallScreen ? "mb-2" : "mb-5"}`}
              >
                {isSignUp ? "Sign Up" : "Login"}
              </h1>

              {isSignUp ? (
                <>
                  <label
                    htmlFor="fullName"
                    className={`text-[30px] text-black ml-[27%] font-semibold ${Style.lblTxt}`}
                  >
                    Full Name
                  </label>
                  <br />
                  <input
                    type="text"
                    required
                    className={`placeholder:text-[14px] text-black ${Style.inptForm} `}
                    placeholder="Enter full name"
                    // style={{
                    //   border: "2px solid #a8a8a8",
                    //   padding: "10px",
                    //   fontSize: "20px",
                    //   width: "50%",
                    //   height: "40px",
                    //   borderRadius: "8px",
                    //   marginLeft: "27%",

                    //   marginBottom: "30px",
                    // }}
                  />{" "}
                  <br />
                  <label
                    htmlFor="email"
                    className={`text-[30px] ml-[27%] text-black font-semibold ${Style.lblTxt}`}
                  >
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    required
                    className={`placeholder:text-[14px] text-black ${Style.inptForm} `}
                    placeholder="Enter email address"
                    // style={{
                    //   border: "2px solid #a8a8a8",
                    //   padding: "10px",
                    //   fontSize: "20px",
                    //   width: "50%",
                    //   height: "40px",
                    //   borderRadius: "8px",
                    //   marginLeft: "27%",

                    //   marginBottom: "30px",
                    // }}
                  />{" "}
                  <br />
                  <label
                    htmlFor="password"
                    className={`text-[30px] ml-[27%]  text-black font-semibold ${Style.lblTxt}`}
                  >
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    required
                    placeholder="Enter password"
                    className={`placeholder:text-[14px] text-black ${Style.inptForm} `}
                    // style={{
                    //   border: "2px solid #a8a8a8",
                    //   padding: "10px",
                    //   fontSize: "20px",
                    //   width: "50%",
                    //   height: "40px",
                    //   marginLeft: "27%",
                    //   borderRadius: "8px",
                    // }}
                  />{" "}
                  <br />
                  <p
                    className={`text-center mx-12 mt-5 text-black text-[20px] ${Style.crtrTxt}`}
                  >
                    Are You a Creator?
                  </p>
                  <div className=" flex gap-6 justify-center mt-5">
                    <p
                      onClick={isYes}
                      className={`text-[25px] font-semibold px-2 border-2 cursor-pointer border-[#003c3c] ${
                        isyes ? "bg-[rgb(0,60,60)] text-white" : "text-black"
                      } ${Style.yesBtn}`}
                    >
                      Yes
                    </p>
                    <p
                      onClick={isYes}
                      className={`text-[25px] font-semibold px-2 border-2 border-[#003c3c] ${
                        isyes ? "text-black" : "bg-[#003c3c] text-white"
                      } ${Style.noBtn}`}
                    >
                      NO
                    </p>
                  </div>
                  <button
                    type="submit"
                    className={`text-center border-2 font-bold  text-[#134a4a] w-[20%] rounded-xl py-2 ml-[41%] mt-5 border-[#003c3c] bg-[#f8f9fb] ${Style.sgnBtn}`}
                  >
                    Sign up{" "}
                  </button>
                  <p className={`mt-3 text-center text-black ${Style.sgnTxt}`}>
                    Already have an account?
                    <a
                      href="#"
                      className={`text-[#86a3a3] text-[20px] mb-5 `}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        handleLoginLinkClick();
                      }}
                    >
                      Login
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <button
                    className={`w-[50%] ml-[25%] flex my-[20px] border-2 py-3 rounded-3xl  border-black pl-5 ${
                      Style.gglBtn
                    } ${isSmallScreen ? "my-[5px]" : "my-[20px]"} `}
                  >
                    <Image
                      className={`mt-[2] mr-3 ${Style.gglImg}`}
                      src="/google_logo.png"
                      alt="Google Logo"
                      width={24}
                      height={24}
                    />
                    <span className={`font-[500] text-[18px] text-black ${Style.gglTxt}`}>
                      Signup/ Signin Google
                    </span>
                  </button>
                  <HrWithText text="OR" width="60%" />
                  <label
                    htmlFor="email"
                    className={`text-[30px] text-black ml-[27%] font-semibold ${Style.lblTxt}`}
                  >
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    className={`placeholder:text-[14px] text-black ${Style.inptForm}`}
                    placeholder="Enter Email Address"
                  />{" "}
                  <br />
                  <label
                    htmlFor="password"
                    className={`text-[30px] ml-[27%] text-black font-semibold ${Style.lblTxt}`}
                  >
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className={`placeholder:text-[14px] text-black ${Style.inptForm}`}
                  />
                  <br />
                  <p
                    className={`ml-[27%] mt-[0px] text-[18px] text-[#003c3c] ${Style.rstLink}`}
                  >
                    <Link href="#">Reset Password</Link>
                  </p>
                  <button
                    type="submit"
                    className={`text-center border-2 text-black  w-[20%] rounded-xl py-2 ml-[41%] mt-[30px] border-[#003c3c] bg-[#f8f9fb] ${Style.lgnBtn} `}
                  >
                    Login
                  </button>
                  <HrWithText text="Don't Have Account?" width="80%" />
                  <button
                    type="submit"
                    onClick={toggleForm}
                    className={`text-center border-2 border-[#003c3c]  w-[30%] rounded-3xl py-4 ml-[36%] bg-[#003c3c] text-white mb-[20px] text-[20px] ${Style.sgnBtn}`}
                  >
                    Sign up
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Custom Media Queries */}
      <style jsx>{`
        input:focus {
          box-shadow: 0px 0px 6px 0px var(--color_primary_default);
          outline: none;
        }

        @media (max-width: 768px) {
          .col-md-6 {
            margin-bottom: 20px;
          }

          .w-75 {
            width: 100%;
          }

          button[type="button"] {
            margin-left: 0;
            width: 100%;
          }

          form {
            padding: 20px;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 1.5rem;
          }

          label {
            font-size: 1rem;
          }

          .form-control {
            height: 45px;
            font-size: 1rem;
          }

          .btn-lg {
            font-size: 1rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}
