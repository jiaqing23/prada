import React, { useState } from "react";
import Windows from "../../assets/img/windows.png";
import "./Application.css";

const Application = () => {
  const [productPagination, setProductPagination] = useState(1);
  return (
    <div>
      <div className="productInfoContainer">
        <div className="productInfo">
          <div className="productInfoHeader">
            <h5>Products & Services Overview</h5>
          </div>
          <div className="productInfoBody">
            <div className="productsContainer">
              <div>
                <img src={Windows} alt="" />
                <h6>Grammarly for Windows and Mac</h6>
              </div>
              <p>
                Grammarly for Windows and Mac works on your favourite desktop
                apllications and across the web. Install it once on your device
                for writing assitance as you move between apps, documents, and
                emails.
              </p>
            </div>
            <div className="productsContainer">
              <div>
                <img src={Windows} alt="" />
                <h6>Grammarly for Windows and Mac</h6>
              </div>
              <p>
                Grammarly for Windows and Mac works on your favourite desktop
                apllications and across the web. Install it once on your device
                for writing assitance as you move between apps, documents, and
                emails.
              </p>
            </div>
            <div className="productsContainer">
              <div>
                <img src={Windows} alt="" />
                <h6>Grammarly for Windows and Mac</h6>
              </div>
              <p>
                Grammarly for Windows and Mac works on your favourite desktop
                apllications and across the web. Install it once on your device
                for writing assitance as you move between apps, documents, and
                emails.
              </p>
            </div>
            <div className="productsContainer">
              <div>
                <img src={Windows} alt="" />
                <h6>Grammarly for Windows and Mac</h6>
              </div>
              <p>
                Grammarly for Windows and Mac works on your favourite desktop
                apllications and across the web. Install it once on your device
                for writing assitance as you move between apps, documents, and
                emails.
              </p>
            </div>
            <div className="productsContainer">
              <div>
                <img src={Windows} alt="" />
                <h6>Grammarly for Windows and Mac</h6>
              </div>
              <p>
                Grammarly for Windows and Mac works on your favourite desktop
                apllications and across the web. Install it once on your device
                for writing assitance as you move between apps, documents, and
                emails.
              </p>
            </div>
            <div className="productsPagination">
              <div>
                <p
                  className={`number ${
                    productPagination === 1 ? "numberSelected" : ""
                  }`}
                  onClick={() => setProductPagination(1)}
                >
                  1
                </p>
                <p
                  className={`number ${
                    productPagination === 2 ? "numberSelected" : ""
                  }`}
                  onClick={() => setProductPagination(2)}
                >
                  2
                </p>
                <p
                  className={`number ${
                    productPagination === 3 ? "numberSelected" : ""
                  }`}
                  onClick={() => setProductPagination(3)}
                >
                  3
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="productInfo">
          <div className="productInfoHeader">
            <h5>Funding</h5>
          </div>
          <div className="productInfoBody">
            <div className="fundingTop">
              <div>
                <h6>AMOUNT RAISED</h6>
                <h4>$ 400M</h4>
              </div>
              <div>
                <h6>FOUND OVER</h6>
                <h4>3 ROUND</h4>
              </div>
              <div>
                <h6>AMOUNT RAISED</h6>
                <h4>$ 13B</h4>
              </div>
            </div>
            <div className="rounds">
              <div className="roundLeft">
                <p>Rounds</p>
                <h5>$200,000,000</h5>
              </div>
              <div>
                <p>Seed | Nov 2021</p>
                <p>Press | Grammarly raises $200M at a $13B valuation</p>
              </div>
            </div>
            <div className="rounds">
              <div className="roundLeft">
                <p>Rounds</p>
                <h5>$90,000,000</h5>
              </div>
              <div>
                <p>Seed | Oct 2019</p>
                <p>Press | Read press</p>
              </div>
            </div>
            <div className="rounds">
              <div className="roundLeft">
                <p>Rounds</p>
                <h5>$110,000,000</h5>
              </div>
              <div>
                <p>Seed | May 2017</p>
                <p>Press | Read press</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
