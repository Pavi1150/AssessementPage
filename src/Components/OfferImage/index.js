import React from "react";
import "./index.css";
import PromotionImage from "./assets/PromotionImage.png";

function Index() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div>
            <h1 className="imagetext ">
              Super Flash Sale <br /> 50% Offer
            </h1>
            <img
              src={PromotionImage}
              class="img-fluid"
              alt="Responsive image"
            />
          </div>
        </div>

        <div className="container cardPair fw-bold">
          <div className="row">
            <div className="col-md-4 px-0 ">
              <div className="card bg-img">
                <div>
                  <span className="card1-text-color ms-5">
                    QUILTED MAXI <br />
                    <span className="ms-5">CROSS BAG</span>
                  </span>
                  <div className="margin-card1">
                    <span className="strike-price">$534.33</span>
                    <span className="color-orange">24% off</span>
                  </div>
                  <div className="text-end mb-3 marginPrice-card-1 color-blue">
                    $599.43
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-0">
              <div className="card card2">
                <div className="d-flex">
                  <span className="col-8 card1-text-color">
                    FS-Nike Air <br />
                    Max 270 React...
                  </span>
                  <span className="col-4 color-blue pt-3">$299.43</span>
                </div>
                <div className="fw-bold text-center price-offer">
                  <span className="strike-price">$534.33</span>
                  <span className="color-orange">24% off</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-0">
              <div className="card card3">
                <span className="card1-text-color mb-2">
                  FS-Nike Air <br />
                  Max 270 React...
                </span>
                <div className="fw-bold">
                  <span className="strike-price">$534.33</span>
                  <span className="color-orange">24% off</span>
                </div>
                <div className="color-blue margin-pricecard3">$299.43</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
