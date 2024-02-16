import React from "react";
const logourl =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1708016444/OnestepLogo_iyo5ta.png";
const Navigation = () => {
  return (
    <div className="navigation_section text-white flex justify-around items-center text-2xl w-full">
      <div className="image_logo flex items-center">
        <img src={logourl} alt="" className="w-12 object-cover" />
        <div className="logo_name font-semibold">
          OneStep<span className="font-medium"> Labs</span>
        </div>
      </div>
      <div className="nav">
        <ul className="flex gap-4 text-base">
          <li>Home</li>
          <li>AboutUs</li>
          <li>Testimonials</li>
          <li>ContactUs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
