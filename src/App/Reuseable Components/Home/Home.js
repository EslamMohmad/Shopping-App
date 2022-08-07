import React from "react";
import Icon from "../../Reuseable Components/Icon/Icon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link className="home text-black" to="/Shopping-App">
      <Icon prefix={"fa-solid"} icon={"fa-house"} />
    </Link>
  );
};

export default Home;
