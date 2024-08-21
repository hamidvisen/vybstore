"use client";
import React, { useState } from "react";

import Image from 'next/image'
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Styles from "./profile.module.css";




const Profile = () => {
  const [isAdress, setIsAdderss] = useState(false);
  const isSave = () => {
    setIsAdderss(!isAdress);
  };
  const toggleSave = () => setIsAdderss(prevState => !prevState);
  return (
    <div className="container">
      <div
        className={` ${Styles.row} row box-border mt-[10%] w-[75%] m-auto flex justify-between`}
      >
        <div
          className={`${Styles.firstCol} profileCol w-[35%] h-[750px] border-2 border-[#8e8e8f] flex-col flex justify-between items-center rounded-3xl`}
        >
          <div className="">
            <div className="imgDiv rounded-full  w-[200px] h-[200px] mt-16  mb-2">
              <Image
                src="/OIP.jpg"
                className="w-[100%] h-[100%] object-cover rounded-full"
                width={100}
                height={100}
                alt="profilePic"
              />
            </div>
            <span>
              <BorderColorIcon />
              Change Profile picture
            </span>
          </div>
          <div className=" w-[80%] mt-5 flex flex-col justify-center items-center text-center">
            <button
              className={`text-[20px] w-[100%]  border-2 border-black font-semibold  rounded-xl py-2 px-3 mb-5 ${
                Styles.shad
              } ${!isAdress ? "bg-[#003c3c] text-white" : "text-[#0e4747]"}`}
           onClick={toggleSave} >
              Profile
            </button>
            <button
              className={`text-[20px] border-2 border-black  w-[100%] font-semibold  rounded-xl py-2 px-3 mb-5 ${
                Styles.shad
              } ${isAdress ? "bg-[#003c3c] text-white" : "text-[#0e4747]"}`}
            >
              Address
            </button>
          </div>

          <div className=" w-[80%] bottom-0 mb-10 ">
            <button
              className={`text-[20px] w-[100%] font-semibold text-white bg-[#003c3c] rounded-xl py-2 px-3 '
                        ${Styles.shad}`}
            >
              Logout
            </button>
          </div>
        </div>
        <div
          className={` ${Styles.scndCol} profileMenu w-[63%] h-[750px] bg-[#f8f9fb] border-2 border-[#8e8e8f] pt-3 px-4  rounded-3xl`}
        >
          {/* address form */}

          {isAdress ? (
            <>
              <div className="flex justify-between items-center  w-[100%] mb-[20px]">
                <h1 className="text-[35px] text-[#070707] font-bold">Adress</h1>
              </div>

              <form>
                <label htmlFor="house" className="text-[30px]  text-black font-semibold">
                  House No. / Apartments / Street
                </label>
                <br />
                <input
                  type="text"
                  className="placeholder:text-[18px] text-black"
                  placeholder="House No. / Apartments / Street"
                  style={{
                    border: "2px solid #a8a8a8",
                    padding: "20px 20px",
                    fontSize: "20px",
                    width: "100%",
                    height: "40px",
                    borderRadius: "16px",

                    marginBottom: "20px",
                  }}
                />
                <br />
                <label htmlFor="email" className="text-[30px] text-black  font-semibold">
                  Area
                </label>
                <br />
                <input
                  type="text"
                  className="placeholder:text-[18px] text-black"
                  placeholder="Area"
                  style={{
                    border: "2px solid #a8a8a8",
                    padding: "20px 20px",
                    fontSize: "20px",
                    width: "100%",
                    height: "40px",
                    borderRadius: "16px",

                    marginBottom: "20px",
                  }}
                />
                <br />
                <div className="flex justify-between">
                  <div className="w-[48%]">
                    <label
                      htmlFor="zipcode"
                      className="text-[30px] text-black font-semibold"
                    >
                      Zip Code
                    </label>
                    <br />
                    <input
                      type="number"
                      className={`placeholder:text-[18px] text-black ${Styles.num}`}
                      placeholder="Enter Zip Code"
                      style={{
                        border: "2px solid #a8a8a8",
                        padding: "20px 20px",
                        fontSize: "20px",
                        width: "100%",
                        height: "40px",
                        borderRadius: "16px",

                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div className="w-[48%]">
                    <label
                      htmlFor="city"
                      className="text-[30px] text-black font-semibold"
                    >
                      City
                    </label>
                    <br />
                    <input
                      type="text"
                      className="placeholder:text-[18px] text-black"
                      placeholder="Enter City"
                      style={{
                        border: "2px solid #a8a8a8",
                        padding: "20px 20px",
                        fontSize: "20px",
                        width: "100%",
                        height: "40px",
                        borderRadius: "16px",

                        marginBottom: "20px",
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="w-[48%]">
                    <label
                      htmlFor="state"
                      className="text-[30px] text-black font-semibold"
                    >
                      State
                    </label>
                    <br />
                    <input
                      type="text"
                      className="placeholder:text-[18px] text-black "
                      placeholder="Enter Zip Code"
                      style={{
                        border: "2px solid #a8a8a8",
                        padding: "20px 20px",
                        fontSize: "20px",
                        width: "100%",
                        height: "40px",
                        borderRadius: "16px",

                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div className="w-[48%]">
                    <label
                      htmlFor="country"
                      className="text-[30px] text-black font-semibold"
                    >
                      Country
                    </label>
                    <br />
                    <input
                      type="text"
                      className="placeholder:text-[18px] text-black"
                      placeholder="Enter Country"
                      style={{
                        border: "2px solid #a8a8a8",
                        padding: "20px 20px",
                        fontSize: "20px",
                        width: "100%",
                        height: "40px",
                        borderRadius: "16px",

                        marginBottom: "20px",
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-center border-2 border-[#003c3c]  w-[30%] rounded-3xl py-4  bg-[#003c3c] text-white mb-[20px] text-[20px]"
                >
                  Save
                </button>
              </form>
              {console.log("address wala")}
            </>
          ) : (
            <>
              <div className="flex justify-between items-center  w-[100%] mb-[20px]">
                <h1 className="text-[35px] text-[#070707] font-bold">
                  Profile
                </h1>
                <span className="text-[#003c3c] font-semibold text-[18px] cursor-pointer">
                  Switch To Creator
                </span>
              </div>
              <form>
                <label
                  htmlFor="fullname"
                  className="text-[30px] text-black font-semibold"
                >
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  className="placeholder:text-[18px] text-black"
                  placeholder="Enter Full Name"
                  
                  style={{
                    border: "2px solid #a8a8a8",
                    padding: "20px 20px",
                    fontSize: "20px",
                    width: "100%",
                    height: "40px",
                    borderRadius: "16px",

                    marginBottom: "20px",
                  }}
                />
                <br />
                <label htmlFor="email" className="text-[30px] text-black font-semibold">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  className="placeholder:text-[18px] text-black"
                  placeholder="Enter email address"
                  style={{
                    border: "2px solid #a8a8a8",
                    padding: "20px 20px",
                    fontSize: "20px",
                    width: "100%",
                    height: "40px",
                    borderRadius: "16px",

                    marginBottom: "20px",
                  }}
                />
                <br />
                <label
                  htmlFor="password"
                  className="text-[30px] text-black font-semibold"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  className="placeholder:text-[18px] text-black"
                  placeholder="Enter email address"
                  style={{
                    border: "2px solid #a8a8a8",
                    padding: "20px 20px",
                    fontSize: "20px",
                    width: "100%",
                    height: "40px",
                    borderRadius: "16px",

                    marginBottom: "20px",
                  }}
                />
                <br />
                <label htmlFor="phone" className="text-[30px] text-black  font-semibold">
                  Phone Number
                </label>
                <br />
                <input
                  type="number"
                  className={`placeholder:text-[18px] text-black ${Styles.num}`}
                  placeholder="Enter email address"
                  style={{
                    border: "2px solid #a8a8a8",
                    padding: "20px 20px",
                    fontSize: "20px",
                    width: "100%",
                    height: "40px",
                    borderRadius: "16px",

                    marginBottom: "20px",
                  }}
                />
                <br />
                <button
                  onClick={isSave}
                  type="submit"
                  className="text-center border-2 border-[#003c3c]  w-[30%] rounded-3xl py-4  bg-[#003c3c] text-white mb-[20px] text-[20px]"
                >
                  Save{" "}
                </button>
                <button className={`w-[40%] flex mb-3 border-2 py-3 rounded-full items-center  border-black pl-5 ${Styles.gglCnnct}`}>
                  <Image
                    className="mr-2"
                    src="/google_logo.png"
                    width={24}
                    height={24}
                    alt="google logo"
                  />
                  <span className="font-[500] text-[18px] text-black">Connect Google</span>
                </button>
              </form>
              {console.log("profile wala")}
            </>
          )}

          {/* profile form */}
        </div>
      </div>
      <style jsx>{`
        input:focus {
          box-shadow: 0px 0px 6px 0px var(--color_primary_default);
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Profile;
