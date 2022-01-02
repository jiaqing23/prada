import Code from "../../assets/img/code.png";
import React from "react";
import "./Platform.css";

const Platform = () => {
  return (
    <div>
      <div className="productInfoContainer">
        <div className="productInfo">
          <div className="productInfoHeader">
            <h5>Short description</h5>
          </div>
          <div className="productInfoBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              sint totam delectus, quia incidunt beatae nisi soluta facere ipsa,
              iste minima ducimus, corporis officia qui ipsam exercitationem
              alias doloremque recusandae.
            </p>
          </div>
        </div>
        <div className="productInfo">
          <div className="productInfoHeader">
            <h5>Industry</h5>
          </div>
          <div className="productInfoBody">
            <div className="industryRow">
              <div className="industry">
                <div className="dot"></div>
                <p>Mobile</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>Education</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>SaaS</p>
              </div>
            </div>
            <div className="industryRow">
              <div className="industry">
                <div className="dot"></div>
                <p>Machine learning</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>Business Prodctivity</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>Artificial Intelligence</p>
              </div>
            </div>
            <div className="industryRow">
              <div className="industry">
                <div className="dot"></div>
                <p>Language learning</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>Blogging Platforms</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>Apps</p>
              </div>
            </div>
            <div className="industryRow">
              <div className="industry">
                <div className="dot"></div>
                <p>Software</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>Assistive Technology</p>
              </div>
              <div className="industry">
                <div className="dot"></div>
                <p>Edtech</p>
              </div>
            </div>
          </div>
        </div>
        <div className="productInfo">
          <div className="productInfoHeader">
            <h5>Specialities</h5>
          </div>
          <div className="productInfoBody">
            <div className="industryRow">
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
            </div>
            <div className="industryRow">
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
            </div>
            <div className="industryRow">
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
            </div>
            <div className="industryRow">
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
              <div className="speciality">
                <img src={Code} alt="" />
                <div>
                  <p>Python</p>
                  <p>LANGUAGES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productInfo">
          <div className="productInfoHeader">
            <h5>Full description</h5>
          </div>
          <div className="productInfoBody" style={{ height: "500px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
