// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import {GrFacebook, GrInstagram, GrTwitter, GrYoutube} from "react-icons/gr"
import Logo from "../imgs/logo.png"


const FooterSection = () => {
  return (
    <>
      <div className="px-28 h-20 w-full bg-blue-700 text-center items-center">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Eshop" className="h-[5rem]" />
          <p className="text-2xl text-white"> &copy; Copyright 2023 E-Shop | All Right Reserved | Powered By Pankaj Sarkar.</p>
          <div className="flex justify-between items-center text-white ">
          
            <GrInstagram className="h-12 w-12 p-3 rounded-lg hover:bg-red-700"/>
            <GrFacebook className="h-12 w-12 p-3 rounded-lg hover:bg-red-700"/>
            <GrTwitter className="h-12 w-12 p-3 rounded-lg hover:bg-red-700"/>
            <GrYoutube className="h-12 w-12 p-3 rounded-lg hover:bg-red-700"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
