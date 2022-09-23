import React from "react";

import IOS from "./DownloadAppImgs/app-store.svg";
import ANDROID from "./DownloadAppImgs/play-store.svg";
import APP from "./DownloadAppImgs/app.png";

import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="downloadSection my-5 py-3 py-lg-5">
      <div className="row justify-content-around align-items-center py-5">
        <div className="col-sm-6 col-lg-5 col-xl-4 content">
          <h1 className="fw-bolder">the chawkBazar app</h1>
          <p className="my-3">
            share your <b>ideas</b> & shop endless <b>inspiration</b>
          </p>
          <div className="icons d-flex my-3 my-sm-5">
            <div className="ios me-3 appIcon">
              <img src={IOS} alt="ios" width="100%" />
            </div>
            <div className="android appIcon">
              <img src={ANDROID} alt="android" width="100%" />
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-3 img">
          <img src={APP} alt="app" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
