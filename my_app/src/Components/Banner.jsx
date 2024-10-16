import React from "react";
import heroWrap from "../Images/04.jpg";

export default function Banner(props) {
  return (
    <div class="hero_banner">
      <img src={heroWrap} alt="" />
      <div class="hero_content">
        <h1 class="hero_title">FIND THE RIGHT</h1>
        <button class="hero_btn customBtn">click here</button>
      </div>
    </div>
  );
}
