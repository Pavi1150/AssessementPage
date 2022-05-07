import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { FaUserAstronaut } from "react-icons/fa";

function index() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="ms-5 ps-3">
          <div className="text-center d-flex justify-content-between ms-5 s-right">
            <div className="col-3 card border-0 mt-5  ms-5">
              
              <FaShippingFast color="#FF6875" size="100" className="mb-3 ms-4" />
              <div className="col-6">
                <p>
                    <div className="h5">FREE SHIPPING</div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-3 card border-0 mt-5">
              <RiRefund2Line color="#FF6875" size="100" className="mb-3 ms-4" />
              <div className="col-6">
                <p>
                <div className="h5">100% REFUND</div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-3 card border-0 mt-5">
              <FaUserAstronaut color="#FF6875" size="100" className="mb-3 ms-4" />
              <div className="col-6">
                <p>
                <div className="h5">SUPPORT 24/7</div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
