import React from "react";
import "./index.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import ecom from "./assets/ecom.png";
import { NavDropdown } from "react-bootstrap";

function Navbarr() {
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="nav p-3 bg-light h6 ">
            <span className="col-sm-6 col-md-6">
              <span className="ms-4 ">
                <select className="border-0 fw-bold">
                  <option>EN</option>
                  <option>Tamil</option>
                  <option>English</option>
                  <option>Telugu</option>
                </select>
              </span>
              <span className="ms-2">
                <select className="border-0 fw-bold">
                  <option>USD</option>
                  <option>Tamil</option>
                  <option>English</option>
                  <option>Telugu</option>
                </select>
              </span>
            </span>
            <span className="col-md-6 col-sm-6 text-end pe-5">
              <span className="me-5 ">
                <AiOutlineUser size="20px" className="mb-1" />
                <span className="ps-1">My Profile</span>
              </span>
              <span className="me-5">
                <BsCart2 size="20px" className="mb-1" />
                &nbsp;&nbsp;Items
              </span>
              <span className="me-5">
                <span className="text-26">$0.00</span>
                <GrFormSearch size="25px" />
              </span>
            </span>
          </div>

          <div className="col-12 nav p-3 bg-light h6">
            <span className="ms-4 col-4">
              <img src={ecom} />
              E-commerce
            </span>
            <span className="ms-auto d-flex justify-content-between">
              <span className="me-5 pe-5 text-primary">
                <NavDropdown
                  title="HOME"
                  className="text-primary d-flex col-8 "
                >
                  <div classname="row">
                    <div className="d-flex justify-content-between color fw-bold ps-5 ms-5 ">
                      <span className="col-3">Category</span>
                      <span className="col-3">Category</span>
                      <span className="col-3">Category</span>
                    </div>
                  </div>
                  <div className="row pt-5 pb-4 ps-4 d-flex justify-content-between">
                    <div className="col-3">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                  </div>
                </NavDropdown>
              </span>
              <span className="me-5 pe-5 pt-2">BAGS</span>
              <span className="me-5 pe-5 pt-2">SNEAKERS</span>
              <span className="me-5 pe-5 pt-2">BELT</span>
              <span className="me-5 pe-5 pt-2">CONTACT</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
