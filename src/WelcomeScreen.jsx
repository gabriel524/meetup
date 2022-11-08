import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <video autoPlay loop muted id="video">
        <source
          src="https://www.pexels.com/video/people-in-a-conference-room-for-a-business-meeting-3205624/"
          type="video/mp4"
        />
      </video>
      <div className="overlay"></div>
      <div className="container">
        <h1 className="header">
          Welcome to My <br /> <span className="title-text">Meet App</span>
        </h1>
        <h4>Log in to see upcoming events near you.</h4>
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
        <a
          className="htmlLink"
          href="https://gabriel524.github.io/meetup/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    </div>
  ) : null;
}

export default WelcomeScreen;


