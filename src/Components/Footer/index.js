import React from "react";
import "./index.css";
import ecom1 from "./assets/ecom1.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
function Footer() {
  return (
    <div className="bg">
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5">
            <div className="fw-bold mb-3 size-14">
              <img src={ecom1} />
              <span className="ms-2">E-Comm</span>
            </div>
            <div className="size-14-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has the Induatry's standard dummy text
              ever.Since the 1500's when the unknown printer
            </div>
          </div>

          <div className="col-4 mt-5">
            <div className="fw-bold mb-3 size-14-18">Follow Us</div>
            <div className="size-14-12">
              Since the 1500's when the unknown printer took a gallery of type
              and scarambled
            </div>
            <div>
              <span>
                <GrFacebookOption />
              </span>
              <span className="ms-3">
                <AiOutlineTwitter color="skyblue" />
              </span>
            </div>
          </div>

          <div className="col-4 mt-5">
            <div className="fw-bold mb-3 size-14-18">Contact Us</div>
            <div className="size-14">Ecomm,7548</div>
            <div className="size-14">Marmora Road</div>
            <div className="size-14">Glassgow D04 89GR</div>
          </div>

          <div className="container">
            <div className="row mt-5">
              <div className="col-3">
                <div className="mb-3 size-14-18">Information</div>
                <div className="size-14">About Us</div>
                <div className="size-14">Information</div>
                <div className="size-14">Privacy Policy</div>
                <div className="size-14">Terms & Conditions</div>
              </div>
              <div className="col-3">
                <div className="size-14-18 mb-3">Service</div>
                <div className="size-14">About Us</div>
                <div className="size-14">Information</div>
                <div className="size-14">Privacy Policy</div>
                <div className="size-14">Terms & Conditions</div>
              </div>
              <div className="col-3">
                <div className="size-14-18 mb-3">My Account</div>
                <div className="size-14">About Us</div>
                <div className="size-14">Information</div>
                <div className="size-14">Privacy Policy</div>
                <div className="size-14">Terms & Conditions</div>
              </div>
              <div className="col-3">
                <div className="size-14-18 mb-3">Our Offers</div>
                <div className="size-14">About Us</div>
                <div className="size-14">Information</div>
                <div className="size-14">Privacy Policy</div>
                <div className="size-14">Terms & Conditions</div>
              </div>
            </div>
          </div>

          <div className="border border-bottom mt-3"></div>
          <div className="col-4 ms-auto">
            <img src={logo1} height="30px" width="30px" className="ms-5 mt-3" />
            <img src={logo2} height="30px" width="30px" className="ms-3 mt-3" />
            <img src={logo3} height="30px" width="30px" className="ms-3 mt-3" />
            <img src={logo4} height="30px" width="30px" className="ms-3 mt-3" />
          </div>
          <div className="color-ce">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
