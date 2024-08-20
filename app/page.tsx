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
          <source src="https://9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io/f1721387510430x494031690418350140/hero%20section%20web%20%281%29.mp4?_gl=1*yj4ger*_gcl_au*MTMzOTk3MDA3OC4xNzE5MjMxMjA4*_ga*MTU1NDIzMTQ1LjE3MTEyMzQ3NDY.*_ga_BFPVR2DEE2*MTcyMTM4NzUwMi43NS4xLjE3MjEzODc3NjguNjAuMC4w" />
        </video>
        <div className={Style.videoOverlay}>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <img
                className={Style.imgDivImg}
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129049845x104455195830874600%2Fbe28d803d9a96aa3f39ac979f9f7a3c0%25201.png?w=128&amp;h=128&amp;auto=compress&amp;dpr=1.5&amp;fit=max"
              />
            </div>
            <div className={Style.textDiv}>Travel Itinerary</div>
          </div>
          <div className={Style.badgeCardLine1}></div>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <img
                className={Style.imgDivImg}
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129676236x902614560996062500%2Fc3f406dbad6bc39dc9f6a972791246b3%25201.png?w=128&amp;h=143&amp;auto=compress&amp;dpr=1.5&amp;fit=max"
              />
            </div>
            <div className={Style.textDiv}>Custom Merchandise</div>
          </div>
          <div className={Style.badgeCardLine2}></div>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <img
                className={Style.imgDivImg}
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129685688x205809444570131070%2F2a357d982060aa48621b1408be897e98%25201.png?w=128&amp;h=129&amp;auto=compress&amp;dpr=1.5&amp;fit=max"
              />
            </div>
            <div className={Style.textDiv}>Digital Content</div>
          </div>
          <div className={Style.badgeCardLine3}></div>
          <div className={Style.badgeCard}>
            <div className={Style.imgDiv}>
              <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129740866x257181271145942000%2Ffdf29691d85e224cc6ddd59f8b6392fb%25201.png?w=128&amp;h=97&amp;auto=compress&amp;dpr=1.5&amp;fit=max" />
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
        <img src="https://9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io/f1717430860528x101699210282570000/Final%202nd%20section%20WEB%20%281%29.gif?ignore_imgix=true" />
      </div>
      <div className={Style.advertContainer}>
        <div className={Style.advertRow}>
          <div className={Style.advertCol1}>
            <div className={Style.advertCard}>
              <h1 className="text-[28px] font-bold text-white">
                Start Vybing with us!
              </h1>
              <p className="text-[18px]font-semibold text-white">
                "We help influencers make money by monetizing their travel
                plans, merchandise, and digital goods and many more."
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
                <img
                  className={Style.advertImg}
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717493729973x154150708018341730%2F4.gif?w=384&h=843&auto=compress&dpr=1.5&fit=max"
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
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717493756784x453901144404817540%2F1.gif?w=384&h=843&auto=compress&dpr=1.5&fit=max"
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
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717493793142x205484277914075520%2F3.gif?w=384&h=843&auto=compress&dpr=1.5&fit=max"
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
                  "Monetize your influencer status: Earn money adding real value
                  to your true followers!"
                </h1>
                <p className=" font-medium pb-5">
                  Let VYB the money now !! It's here and withdraw it
                  periodically.
                </p>
                <img
                  className={Style.advertImg}
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717493810587x376390459201151740%2F2.gif?w=384&h=843&auto=compress&dpr=1.5&fit=max"
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
          <div className="reportDiv">
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
          Quick answers to questions you may have. Can’t find what you're
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
