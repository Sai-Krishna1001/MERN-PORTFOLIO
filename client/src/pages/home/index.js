import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 py-20">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
