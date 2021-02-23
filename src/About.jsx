import React from "react";
import "./App.css";
import PG from "../src/images/pg.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={PG}
        visit="/Contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
