import React from "react";

import SwiperContainer from "../../Reuseable Components/SwiperContainer/SwiperContainer";

import Icon from "../../Reuseable Components/Icon/Icon";

import "./MemberChat.css";

const MemberChat = () => {
  return (
    <div className="memberChat-section py-3 py-lg-5 my-5 d-flex flex-column justify-content-center align-items-center">
      <div className="text">
        <h3 className="text-center">talk to a real person</h3>
        <p className="text-center mb-4">
          Are you on the fence? Have a question? Need a recommendation? Member
          Services is always here to help. Send us a message.
        </p>
      </div>
      <div className="img m-auto">
        <img
          src={require("./MemberChatImgs/support.webp")}
          alt="img"
          width="100%"
        />
      </div>
      <div className="button mt-4">
        <button className="btn btn-dark py-2">
          chat with members services
          <span className="ms-2">
            <Icon prefix={"fa-solid"} icon={"fa-comment-dots"} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default MemberChat;
