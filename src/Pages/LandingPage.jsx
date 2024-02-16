import React from "react";
import "../App.css";
import Navigation from "../Components/Navigation";
const logourl =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1708016444/OnestepLogo_iyo5ta.png";
import Lottie from "react-lottie";
import animedata from "../Lottie/Aniamtionlottie";
const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animedata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="content w-full h-screen flex flex-col items-start   p-6 gap-5">
      <Navigation />
      {/* <div className="content_section flex flex-col justify-center items-center mt-56 gap-3">
        <img src={logourl} alt="" className="w-56 object-cover" />
        <div className="name text-3xl font-semibold text-white text-center">
          OneStepLabs <div className="launch font-normal">launching Soon</div>
        </div>
      </div> */}

      <div
        className="showcase_section flex items-center justify-center w-full 
      "
      >
        <div className="showcase_description flex flex-col gap-2">
          <h2 className="text-white text-4xl font-light leading-none text-center">
            <span className="font-semibold text-5xl">
              {" "}
              Welcome to OneStepLabs <br />
            </span>{" "}
            Revolutionizing Your Workflow with Seamless Solutions
          </h2>
          <p className="text-lg text-white text-center">
            Unlock the Power of OneStepLabs - Your Gateway to Effortless
            Productivity!
          </p>
        </div>
        {/* <div className="lottie_animation ml-10">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div> */}
      </div>
      <h2 className="font-semibold text-white text-3xl w-full text-center pt-4">
        Why OneStep Labs?
      </h2>
      <div className="why_onestep flex items-center justify-center w-full">
        <div className="services_section flex flex-wrap gap-4 p-6 ">
          <div className="service flex flex-col gap-2 h-64 w-64 border rounded-xl bg-white justify-center p-4">
            <div className="service_name text-center text-lg font-semibold">
              Innovation at Your Fingertips
            </div>
            <div className="content_service text-center text-sm">
              We stay ahead of the curve, ensuring you have access to the latest
              features and technologies that drive success.
            </div>
          </div>
          <div className="service flex flex-col gap-2 h-64 w-64 border rounded-xl bg-white justify-center p-4">
            <div className="service_name text-center text-lg font-semibold">
              User-Centric Design
            </div>
            <div className="content_service text-center text-sm">
              Our products are crafted with you in mind, ensuring a seamless and
              enjoyable user experience.
            </div>
          </div>
          <div className="service flex flex-col gap-2 h-64 w-64 border rounded-xl bg-white justify-center p-4">
            <div className="service_name text-center text-lg font-semibold">
              Reliable Support
            </div>
            <div className="content_service text-center text-sm">
              Your success is our priority. Our dedicated support team is ready
              to assist you at every step.
            </div>
          </div>
          <div className="service flex flex-col gap-2 h-64 w-64 border rounded-xl bg-white justify-center p-4">
            <div className="service_name text-center text-lg font-semibold">
              Scalability
            </div>
            <div className="content_service text-center text-sm">
              Grow with confidence. Our solutions scale alongside your business,
              adapting to your evolving needs.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="our_products flex justify-around items-center text-white gap-3 ">
        <div className="product flex flex-col justify-center font-semibold h-56 border ">
          <div className="h2 text-lg text-center">Elevate Your Efficiency</div>

          <li className="text-sm font-light ">
            Simplify complex processes with our intuitive interface
          </li>
          <li className="text-sm font-light">
            Boost team collaboration and communication effortlessly
          </li>
          <li className="text-sm font-light">
            Experience unparalleled productivity gains
          </li>
        </div>
        <div className="product flex flex-col justify-center items-center">
          <div className="h2 text-lg text-center">
            Smart Solutions for Smart Businesses
          </div>
          <ul>
            <li className="text-sm">
              Advanced analytics for data-driven decision-making <br />
              Scalable architecture to grow with your business <br />
              Unleash the potential of your team with our intelligent features
              <br />
            </li>
          </ul>
        </div>
        <div className="product flex flex-col justify-center items-center">
          <div className="h2 text-lg text-center">
            Secure and Seamless Integration
          </div>
          <ul>
            <li className="text-sm">
              Industry-leading security protocols for data protection <br />
              Effortless integration with your existing tools and systems <br />
              Stay ahead with the latest advancements in technology <br />
            </li>
          </ul>
        </div>
      </div> */}
      <div className="cta bg-gradient-to-r from-purple-500 to-purple-900 rounded p-6 flex flex-col items-center ">
        <h2 className="text-center text-white font-semibold text-2xl">
          Get Started Today
        </h2>
        <p className="flex justify-center items-center p-3 text-center mb-4 text-white font-light">
          Ready to transform the way you do business? Take the first step
          towards enhanced efficiency, collaboration, and success with
          OneStepLabs. Get started today and experience the future of SaaS.
        </p>
        <button className="text-purple-700 rounded py-2 px-4 border-none text-base font-semibold bg-white w-56 hover:border hover:border-white hover:text-white hover:bg-purple-700">
          Explore Our Solution
        </button>
        <p className="flex justify-center items-center p-3 text-sm text-white">
          Unlock the full potential of your business with OneStepLabs - where
          innovation meets productivity.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
