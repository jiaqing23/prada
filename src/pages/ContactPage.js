import React from "react";
import classNames from "classnames";
import styles from "assets/jss/pages/contactPage.js";
// @mui/material components
import { makeStyles } from "@material-ui/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { brown } from "@mui/material/colors";
import Navbar from "components/Navbar";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classNames(props.title)}>
        {/* Avatar Block */}
        <div className={classNames(classes.avatarblock)}>
          <div className={classNames(classes.avatartext)}>
            {/* Text "LATEST TEAM" */}
            <div className={classNames(classes.latestteam)}>LATEST TEAM</div>

            {/* Text "Team" */}
            <div className={classNames(classes.team)}>Team</div>
          </div>

          {/* Avatars (Leader)*/}
          <Stack direction="row" justifyContent="center" spacing={20}>
            {/* A group of Avatar and description */}
            <div className={classNames(classes.membercard)}>
              <Avatar
                className={classNames(classes.memberavatar)}
                alt="S"
                src={[require("../assets/img/wenyonggang.png").default]}
                sx={{ width: 175, height: 175, bgcolor: brown[200] }}
              />

              <div className={classNames(classes.memberintro)}>
                <div className={classNames(classes.membername)}>
                  WEN Yonggang
                </div>
                <div className={classNames(classes.memberposition)}>
                  Associate Dean (Research)
                </div>
                <div className={classNames(classes.memberdescription)}>
                  Nanyang Technological University
                </div>
              </div>
            </div>
          </Stack>

          {/* Avatars (Member) */}
          <Stack direction="row" justifyContent="center" spacing={20}>
            {/* A group of Avatar and description */}
            <div className={classNames(classes.membercard)}>
              <Avatar
                className={classNames(classes.memberavatar)}
                alt="S"
                src={[require("../assets/img/cyx.jpg").default]}
                sx={{ width: 175, height: 175, bgcolor: brown[200] }}
              />

              <div className={classNames(classes.memberintro)}>
                <div className={classNames(classes.membername)}>
                  CAO Yixin
                </div>
                <div className={classNames(classes.memberposition)}>
                  
                </div>
                <div className={classNames(classes.memberdescription)}>
                  Nanyang Technological Unversity
                </div>
              </div>
            </div>

            {/* A group of Avatar and description */}
            <div className={classNames(classes.membercard)}>
              <Avatar
                className={classNames(classes.memberavatar)}
                alt="S"
                src={[require("../assets/img/yangfan.jpg").default]}
                sx={{ width: 175, height: 175, bgcolor: brown[200] }}
              />

              <div className={classNames(classes.memberintro)}>
                <div className={classNames(classes.membername)}>
                  YANG Fan
                </div>
                <div className={classNames(classes.memberposition)}>
                  Research Associate (Program Manager)
                </div>
                <div className={classNames(classes.memberdescription)}>
                  Nanyang Technological Unversity
                </div>
              </div>
            </div>

            {/* A group of Avatar and description */}
            <div className={classNames(classes.membercard)}>
              <Avatar
                className={classNames(classes.memberavatar)}
                alt="S"
                src={[require("../assets/img/changsen.jpg").default]}
                sx={{ width: 175, height: 175, bgcolor: brown[200] }}
              />

              <div className={classNames(classes.memberintro)}>
                <div className={classNames(classes.membername)}>
                  YUAN Changsen
                </div>
                <div className={classNames(classes.memberposition)}>
                  
                </div>
                <div className={classNames(classes.memberdescription)}>
                  Nanyang Technological Unversity
                </div>
              </div>
            </div>
          </Stack>

          {/* Avatars (Member) */}
          <Stack direction="row" justifyContent="center" spacing={20}>
            {/* A group of Avatar and description */}
            <div className={classNames(classes.membercard)}>
              <Avatar
                className={classNames(classes.memberavatar)}
                alt="S"
                src={[require("../assets/img/jiaqing.jpg").default]}
                sx={{ width: 175, height: 175, bgcolor: brown[200] }}
              />

              <div className={classNames(classes.memberintro)}>
                <div className={classNames(classes.membername)}>
                  TAN Jia Qing
                </div>
                <div className={classNames(classes.memberposition)}>
                  Undergraduate
                </div>
                <div className={classNames(classes.memberdescription)}>
                  Nanyang Technological Unversity
                </div>
              </div>
            </div>

            {/* A group of Avatar and description */}
            <div className={classNames(classes.membercard)}>
              <Avatar
                className={classNames(classes.memberavatar)}
                alt="S"
                src={[require("../assets/img/xinying.jpg").default]}
                sx={{ width: 175, height: 175, bgcolor: brown[200] }}
              />

              <div className={classNames(classes.memberintro)}>
                <div className={classNames(classes.membername)}>
                  GUO Xinying
                </div>
                <div className={classNames(classes.memberposition)}>
                  Undergraduate
                </div>
                <div className={classNames(classes.memberdescription)}>
                  Nanyang Technological Unversity
                </div>
              </div>
            </div>

            {/* A group of Avatar and description */}
            <div className={classNames(classes.membercard)}>
              <Avatar
                className={classNames(classes.memberavatar)}
                alt="S"
                src={[require("../assets/img/yehong.jpg").default]}
                sx={{ width: 175, height: 175, bgcolor: brown[200] }}
              />

              <div className={classNames(classes.memberintro)}>
                <div className={classNames(classes.membername)}>
                  ZHOU Yehong
                </div>
                <div className={classNames(classes.memberposition)}>
                  Master
                </div>
                <div className={classNames(classes.memberdescription)}>
                  Nanyang Technological Unversity
                </div>
              </div>
            </div>
          </Stack>
        </div>

        {/* Partner Block */}
        <div className={classNames(classes.partnerblock)}>
          <div className={classNames(classes.partnertext)}>
            {/* Text "OUR PARTNERS" */}
            <div className={classNames(classes.ourpartners)}>OUR PARTNERS</div>

            {/* Text Partner */}
            <div className={classNames(classes.partners)}>Partners</div>
          </div>

          {/* Partners */}
          <Stack direction="row" justifyContent="center" spacing={20}>
            {/* A group of Avatar and description */}
            <div className={classNames(classes.partnercard)}>
              <Avatar
                className={classNames(classes.partneravatar)}
                alt="S"
                src={[require("../assets/img/ntu.png").default]}
                sx={{ width: 371, height: 109, bgcolor: brown[200] }}
                variant="square"
              />

              <div className={classNames(classes.partnerintro)}>
                <div className={classNames(classes.partnername)}>
                  Nanyang Technological University
                </div>
              </div>
            </div>

            {/* A group of Avatar and description */}
            <div className={classNames(classes.partnercard)}>
              <Avatar
                className={classNames(classes.partneravatar)}
                alt="S"
                src={[require("../assets/img/nrf.png").default]}
                sx={{ width: 371, height: 109, bgcolor: brown[200] }}
                variant="square"
              />

              <div className={classNames(classes.partnerintro)}>
                <div className={classNames(classes.partnername)}>
                  National Research Foundation Singapore
                </div>
              </div>
            </div>

            {/* A group of Avatar and description */}
            <div className={classNames(classes.partnercard)}>
              <Avatar
                className={classNames(classes.partneravatar)}
                alt="S"
                src={[require("../assets/img/smu.png").default]}
                sx={{ width: 371, height: 109, bgcolor: brown[200] }}
                variant="square"
              />

              <div className={classNames(classes.partnerintro)}>
                <div className={classNames(classes.partnername)}>
                  Singapore Management University
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
}
