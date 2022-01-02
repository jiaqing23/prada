import React from "react";
import "./Overview.css";
import Stack from "@mui/material/Stack";
import { brown } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

const Platform = ({ page, setPage }) => {
  console.log(page);
  return (
    <div>
      <div className="overviewContainer">
        <div className="companyDescription">
          <div className="companySummaryContainer">
            <span className="companySummaryTitle">Company Summary</span>
            <span className="companySummary">
              Compose bold, clear, mistake-free writing with Grammarly’s
              AI-powered writing assistant.Grammarly improves lives by improving
              communication.
            </span>
            <span className="companySummary">
              Compose bold, clear, mistake-free writing with Grammarly’s
              AI-powered writing assistant.Grammarly improves lives by improving
              communication. Grammarly’s digital writing assistance helps 30
              million people and 30,000 teams write more clearly and effectively
              every day. In building a product that scales across multiple
              platforms and devices, Grammarly works to empower users whenever
              and wherever they communicate. Across hubs in San Francisco, New
              York, Kyiv, and Vancouver, Grammarly’s values-driven team is
              growing—to support our expanding user base and to continue
              developing our writing assistance into a truly comprehensive
              communication partner.
            </span>
          </div>
          <div className="companyIndustryContainer">
            <span className="companyIndustryTitle">Company Industries</span>
            <span className="companyIndustry">
              Artificial Intelligence | Machine Learning | Natural Language
              Processing | Productivity |
            </span>
          </div>
        </div>
        <div className="companyAbout">
          <div className="companyAboutContainer">
            <span className="companyAboutTitle">ABOUT COMPANY</span>
            <div className="companyWeb">
              <span className="companyOfficialWebsite">
                Company official website
              </span>
              <span className="companyOfficialWebsiteLink">
                https://www.grammarly.com/
              </span>
            </div>
            <div className="companyHeadquarter">
              <span className="companyHeadquarterLocation">
                Headquarters Location
              </span>
              <span className="companyHeadquarterLocationDetail">
                New York City San Francisco Vancouver
              </span>
            </div>
            <div className="companySize">
              <span className="companySizeTitle">Company Size</span>
              <span className="companySizeDetail">501-1000 people</span>
            </div>
            <div className="date">
              <span className="dateTitle">Date Incorporate</span>
              <span className="dateTitleDetail">2009</span>
            </div>
          </div>
        </div>
        <div className="newsBlock">
          <span className="news">News</span>
          <Stack direction="row" justifyContent="center" spacing={20}>
            {/* A group of Avatar and description */}
            <div className="newscard">
              <Avatar
                className="newsavatar"
                alt="S"
                src={[require("../../assets/img/news.png").default]}
                sx={{ width: 371, height: 109, bgcolor: brown[200] }}
                variant="square"
              />

              <div className="newsintro">
                <div className="newsname">some news</div>
              </div>
            </div>

            {/* A group of Avatar and description */}
            <div className="newscard">
              <Avatar
                className="newsavatar"
                alt="S"
                src={[require("../../assets/img/news.png").default]}
                sx={{ width: 371, height: 109, bgcolor: brown[200] }}
                variant="square"
              />

              <div className="newsintro">
                <div className="newsname">some news</div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Platform;
