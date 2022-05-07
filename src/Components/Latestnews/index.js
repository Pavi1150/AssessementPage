import React from "react";
import "./index.css";
import kronoss from "./assets/kronoss.png";
import nike from "./assets/nike.png";
import figma from "./assets/figma.png";

function index() {
  return (
    <div>
      <div className="h3 text-center mb-5 mt-5 ">Latest News</div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-1 card border-0">
              <img src={nike} height="100px" width="100%" />
            </div>
            <div className="col-2">
              <div className="Date">01 jan 2015</div>
              <div className="Topic">Fashion Industry</div>
              <div className="text-18">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </div>
            </div>
            <div className="col-1 card border-0">
              <img src={figma} height="100px" width="100%" />
            </div>
            <div className="col-2">
              <div className="Date">01 jan 2015</div>
              <div className="Topic">Best Design Tools</div>
              <div className="text-18">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </div>
            </div>
            <div className="col-1 card border-0">
              <img src={kronoss} height="100px" width="100%" />
            </div>
            <div className="col-2">
              <div className="Date">01 jan 2015</div>
              <div className="Topic">Hr Community</div>
              <div className="text-18">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
