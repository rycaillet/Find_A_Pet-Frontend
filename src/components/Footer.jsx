import React from 'react';
import styled from 'styled-components';
import linkedinIcon from '../images/linkedin-logo.png';
import githubIcon from '../images/github-logo.png';
import mailIcon from '../images/mail-logo.png';

const FooterDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 0;
  background-color: black;
  box-shadow: 0px -3px 6px 4px #d3d3d3;
  text-align: center;
  max-height: 20rem;
  position: relative;
  bottom: 0;
  width: 100%;
  a img {
    transition: all 0.4s;
    height: 35px;
    width: 35px;
    border-radius: 5px;
  }
  a img:hover {
    transform: scale(1.1);
  }
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-content: center;
  max-width: 70%;
  margin: 0 auto;
  height: 3.3rem;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 3.3rem;
    gap: 10px;
  }
`;

const MobileIconList = styled(IconList)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 3.3rem;
  gap: 10px;
`;

const Footer = ({ user, authenticated }) => {
  return user && authenticated ? (
    <FooterDiv>
      {window.innerWidth <= 480 ? (
        <MobileIconList>
          <a className="icon" href="https://github.com/rycaillet">
            <img src={githubIcon} alt="GitHub" />
            &nbsp;&nbsp;Github
          </a>
          <a className="icon" href="https://www.linkedin.com/in/ryan-caillet/">
            <img src={linkedinIcon} alt="LinkedIn" />
            &nbsp;&nbsp;LinkedIn
          </a>
          <a className="icon" href="mailto:ryancaillet1995@gmail.com">
            <img src={mailIcon} alt="rycaillet@aol.com" />
            &nbsp;&nbsp;Email
          </a>
        </MobileIconList>
      ) : (
        <IconList>
          <a className="icon" href="https://github.com/rycaillet">
            <img src={githubIcon} alt="GitHub" />
            &nbsp;&nbsp;Github
          </a>
          <a className="icon" href="https://www.linkedin.com/in/ryan-caillet/">
            <img src={linkedinIcon} alt="LinkedIn" />
            &nbsp;&nbsp;LinkedIn
          </a>
          <a className="icon" href="mailto:ryancaillet1995@gmail.com">
            <img src={mailIcon} alt="rycaillet@aol.com" />
            &nbsp;&nbsp;Email
          </a>
        </IconList>
      )}
      <img src="/images/Find_A_Pet-logo1.png" alt="website logo" className="logo" />
      <br />
      <div className="row" id="copyright" style={{ margin: 0 }}>
        <div className="col-lg-12">
          <p className="small">©2022 Ryan Caillet</p>
        </div>
      </div>
    </FooterDiv>
  ) : (
    <div></div>
  );
};

export default Footer;