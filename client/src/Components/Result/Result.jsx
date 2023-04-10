import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Result.css";
import { useEffect } from "react";

const resultImg = "./img/result.svg";
const Result = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.colleges);
  const location = useLocation();
  const percentile = location.state?.percentile || -1;
  const branch = location.state?.branch;
  const exam = location.state?.exam;
  const userdata = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (percentile === -1) {
      navigate("/QandA");
    }
  });
  const datas = data;

  return (
    <>
      <div className="result align_center">
        <div className="result__top">
          <div className="result__text">
            <span>{userdata.result.name}</span>
            <div className="result__prevdata">
              <span>Percentile : {percentile}</span>
              <span>Branch : {branch}</span>
              <span>Exam : {exam}</span>
            </div>
          </div>

          <img src={resultImg} alt="result" />
        </div>

        <div className="result__bottom">
          <div className="header">
            <div>Ranks</div>
            <div>DTE</div>
            <div>College</div>
            <div>Percentile</div>
          </div>

          {datas.map((data, index) => {
            return (
              <>
                <div className="college__card">
                  <div className="college__card__top">
                    <div>{index + 1}</div>
                    <div>{data.dte}</div>
                    <div>{data.name}</div>
                    <div>{data.cutoff}</div>
                  </div>

                  <div className="college__card__bottom">
                    <div>District : {data?.dist}</div>
                    <a
                      target="blank"
                      href={`http://www.dtemaharashtra.gov.in/StaticPages/frmInstituteSummary.aspx?InstituteCode=${data.dte}`}
                      className="college__card__btn"
                    >
                      College Details
                    </a>
                    <a
                      target="blank"
                      href={`http://localhost:3000/pdf/${data.dte}`}
                      className="college__card__btn"
                    >
                      Cutoff
                    </a>
                    <a
                      target="blank"
                      href={`https://${data.web_address}`}
                      className="college__card__btn"
                    >
                      College Website
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Result;
