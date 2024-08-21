"use client";

import Image from "next/image";
import Style from "./main.module.css";
import Autoplay from "embla-carousel-autoplay";
import Messages from "@/src/component.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/@/components/ui/carousel";
import RangeInputComponent from "./Components/RangeComponent/Range";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
export default function Home() {
  const [value, setValue] = useState(50);
  const [value2, setValue2] = useState(100);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [month, setMonth] = useState(200000);
  const [year, setYear] = useState(302000);

  const checkToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleRange1Change = (value: number) => {
    setValue(value);
    setMonth(value * 2000);
    setYear(value * 3020);
  };
  const handleRange2Change = (value2: number) => {
    setValue2(value2);
    setMonth(value2 * 2000);
    setYear(value2 * 3020);
  };

  return (
    <main>
      <div id="videoContainer" className={Style.videoContent}>
        <video className={Style.video} autoPlay playsInline loop muted>
          <source src="/video.mp4"/>
        </video>
        <div className={Style.videoOverlay}>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <Image
                className={Style.imgDivImg}
                src="/first_badge_img.png"
                alt="Image Div"
                width={100}
                height={100}
              />
            </div>
            <div className={Style.textDiv}>Travel Itinerary</div>
          </div>
          <div className={Style.badgeCardLine1}></div>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <Image
                className={Style.imgDivImg}
                src="/scnd_badge_img.png"
                width={100}
                height={100}
                alt="Second Badge Image"
              />
            </div>
            <div className={Style.textDiv}>Custom Merchandise</div>
          </div>
          <div className={Style.badgeCardLine2}></div>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <Image
                className={Style.imgDivImg}
                src="/thrd_badge_img.png"
                width={100}
                height={100}
                alt="Badge Third Pic"
              />
            </div>
            <div className={Style.textDiv}>Digital Content</div>
          </div>
          <div className={Style.badgeCardLine3}></div>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <img src="/frth_badge_img.png"
              width={100}
              height={150}
              alt="Badge Fourth pic" />
            </div>
            <div className={Style.textDiv}>Fashion Brands</div>
          </div>
        </div>
      </div>

      {/* <Link href="LoginSignUp">Login</Link> */}

      {/* <Carousel
     plugins={[Autoplay({delay:5000})]}
     className="w-full max-w-[100vw] m-auto">
      <CarouselContent>
       {
        Messages.map((message, index)=>(
         
            <CarouselItem key={index}>
              <div className="p-1">
              <img src={message.url} alt="hamid"/>
              </div>
            </CarouselItem>
        
        ))
       }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}
      <div className={Style.CarouselImage}>
        <Image src="/finalSecImg.gif"  alt="Carousal Image" layout="responsive"
        width={100} height={50}
        objectFit="cover"
        unoptimized
        />
      </div>
      <div className={Style.advertContainer}>
        <div className={Style.advertRow}>
          <div className={Style.advertCol1}>
            <div className={Style.advertCard}>
              <h1 className="text-[28px] font-bold text-white">
                Start Vybing with us!
              </h1>
              <p className="text-[18px]font-semibold text-white">
              &quot;We help influencers make money by monetizing their travel
                plans, merchandise, and digital goods and many more.&quot;
              </p>
              <button className="text-[20px] bg-[#00dc82] w-28 'font-bold' rounded-xl px-0 py-3">
                Join Us
              </button>
            </div>
          </div>
          <div className={Style.advertCol2}>
            <div className={Style.firstElementCard}>
              <div className={Style.firstElementDiv}>
                <div className={Style.firstElementBox}>1</div>
                <div className={Style.firstElementLine}></div>
              </div>

              <div className={Style.firstElement}>
                <h1 className="text-[20px] font-bold py-5">
                  Sign Up and create your own store hassle-free.
                </h1>
                <p className=" font-medium pb-5">
                  Join us via Google signin and verify your influencer status by
                  entering your social media Id and unlock your store @ zero
                  cost.
                </p>
                <Image
                  className={Style.advertImg}
                  src="/first_train_img.gif"
                  width={100}
                  height={50}
                  alt="advert1"
                />
              </div>
            </div>

            <div className={Style.firstElementCard}>
              <div className={Style.firstElementDiv}>
                <div className={Style.firstElementBox}>2</div>
                <div className={Style.firstElementLine}></div>
              </div>

              <div className={Style.firstElement}>
                <h1 className="text-[20px] font-bold py-5">
                  Build & customize your store front.
                </h1>
                <p className=" font-medium pb-5">
                  Simply fill in the details to build your digital store. Once
                  done, start selling your products to your audience.
                </p>
                <img
                  className={Style.advertImg}
                  src="/scnd_train_img.gif"
                  width={100}
                  height={50}
                  alt="advert2"
                />
              </div>
            </div>
            <div className={Style.firstElementCard}>
              <div className={Style.firstElementDiv}>
                <div className={Style.firstElementBox}>3</div>
                <div className={Style.firstElementLine}></div>
              </div>
              <div className={Style.firstElement}>
                <h1 className="text-[20px] font-bold py-5">
                  Call the audience to your store. Easily integrate links into
                  content.
                </h1>
                <p className=" font-medium pb-5">
                  After setting up your products, its time to go public. Put
                  your store link in insta bio and lets make first post together
                  !
                </p>
                <img
                  className={Style.advertImg}
                  src="/thrd_train_img.gif"
                  width={100}
                  height={50}
                  alt="advert3"
                />
              </div>
            </div>
            <div className={Style.firstElementCard}>
              <div className={Style.firstElementDiv}>
                <div className={Style.firstElementBox}>4</div>
                <div></div>
              </div>
              <div className={Style.firstElement}>
                <h1 className="text-[20px] font-bold py-5">
                &quot;Monetize your influencer status: Earn money adding real value
                  to your true followers!&quot;
                </h1>
                <p className=" font-medium pb-5">
                  Let VYB the money now !! It&apos;s here and withdraw it
                  periodically.
                </p>
                <img
                  className={Style.advertImg}
                  src="frth_train_img.gif"
                  alt="advert4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ranging section */}

      <div className={Style.rangingSection}>
        <h1 className={Style.rangingSectionTitle}>
          ESTIMATE EARNING POTENTIAL
        </h1>
        <div className={Style.rangingSectionContent}>
          <div className={Style.rangeDefDiv}>
            <p className={`mb-9 text-[22px] font-medium ${Style.flwtext}`}>
              How many followers do you have?
            </p>

            <RangeInputComponent
              value={value}
              min={10}
              max={50}
              onChange={handleRange1Change}
            />
            <div className={Style.rangeDefNum}>
              <p className={Style.rangeDefNumInner}>{value}K</p>
            </div>
          </div>
          <div className={Style.reportDiv1}>
            <p className={`font-bold mb-[30px] text-[25px] ${Style.rptTxt}`}>
              Monthly Earnings
            </p>
            <p
              className={`font-bold mb-[30px] text-[40px] text-[#003c3c] text-center ${Style.rptval}`}
            >
              ₹{month}
            </p>
          </div>
        </div>

        <div className={Style.rangingSectionContent}>
          <div className={Style.rangeDefDiv}>
            <p className="mb-9 text-[22px] font-medium">
              How many products do you list monthly?
            </p>

            <RangeInputComponent
              value={value2}
              min={1}
              max={100}
              onChange={handleRange2Change}
            />
            <div className={Style.rangeDefNum}>
              <p className={Style.rangeDefNumInner}>{value2}</p>
            </div>
          </div>
          <div className={Style.reportDiv1}>
            <p className={`font-bold mb-[30px] text-[25px] ${Style.rptTxt}`}>
              Yearly Earnings
            </p>
            <p
              className={`font-bold mb-[30px] text-[40px] text-[#003c3c] text-center ${Style.rptval}`}
            >
              ₹{year}
            </p>
          </div>
        </div>
      </div>

      {/* last section */}

      <div className={Style.reportDiv}>
        <h1
          className={`text-[40px] font-bold mb-[30px] mt-[40px] text-center ${Style.reportHead}`}
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p
          className={`text-[20px] mb-[60px] w-2/4 m-auto leading-none ${Style.reportTxt}`}
        >
          Quick answers to questions you may have. Can&apos;t find what you&apos;re
          looking for? Check out our full documentation
        </p>
        <div className={Style.informationDiv}>
          {[
            {
              informHead: "How does the VYB Store work?",
              informDesc: ` VYB Store is an influencer marketplace. You can monetize your travel itinerary, merchandise, digital content, and fashion brand. And much more yet to come.`,
            },
            {
              informHead: "How do I get started with the VYB Store?",
              informDesc: ` Getting started with VYB Store is super easy! Simply sign up for an account, create your store, and start sharing your store link in your Instagram bio with the audience.`,
            },
            {
              informHead: "What does “Zero Cost” mean?",
              informDesc: ` Zero cost means vybing with us is completely free. You don’t have to pay a single rupee to build your store and monetize your audience.`,
            },
            {
              informHead: "How do I track my earnings on VYB Store?",
              informDesc: ` We provide you with detailed analytics to track your earnings and performance. You can see how many purchases your links have generated, as well as your total earnings.`,
            },
            {
              informHead: "What kind of products can I sell on VYB Store?",
              informDesc: ` You can sell a variety of products on VYB Store, including physical merchandise, digital downloads, and even services like travel itineraries and plenty more.`,
            },
          ].map((item, index) => (
            <div key={index} className={Style.informationFullDiv}>
              <div className={Style.informationDivInner}>
                <p className={`${Style.informTxt}`}>{item.informHead}</p>
                <button
                  onClick={() => checkToggle(index)}
                  className={`font-medium h-[20px] text-[25px] text-center flex items-center content-center ${
                    openIndex === index ? "border-2 border-black" : ""
                  }`}
                >
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
              <div className={openIndex === index ? "block" : "hidden"}>
                <div className="border-b-2 mx-auto w-[95%] p-0 border-black"></div>
                <div className="py-3 px-4">{item.informDesc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
