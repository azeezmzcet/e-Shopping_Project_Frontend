import React from "react";
import logo from "../../assets/images/logo.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
     
      <footer className=" w-full flex flex-col lg:flex-row justify-between items-center py-4 bg-gray-200">
        <a href="#" className="company-logo">
          <img src={logo} alt="company-logo" className="h-24" />
        </a>
        <div className="link-column flex flex-col text-left">
          <h4 className="font-bold">Product</h4>
          <a href="#" className="hover-link">Overview</a>
          <a href="#" className="hover-link">Pricing</a>
          <a href="#" className="hover-link"></a>
          <a href="#" className="hover-link">Customers Page</a>
          <a href="#" className="hover-link">Status Page</a>
        </div>
        <div className="link-column flex flex-col text-left">
          <h4 className="font-bold">Resources</h4>
          <a href="#" className="hover-link">Blogs</a>
          <a href="#" className="hover-link">Examples</a>
          <a href="#" className="hover-link">Testing Guides</a>
          <a href="#" className="hover-link">Help Center</a>
          <a href="#" className="hover-link">Careers</a>
        </div>
      </footer>




      <div className="subfooter bg-gray-300 py-2">
        <div className="container mx-auto flex justify-around">
          <a href="#" className="hover-link">Privacy Policy</a>
          <a href="#" className="hover-link">Terms & Conditions</a>
          <a href="#" className="hover-link">Security Information</a>
          <a href="#" className="hover-link">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" className="hover-link">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>

        </div>
      </div>
    </>
  );
};

export default Footer;
