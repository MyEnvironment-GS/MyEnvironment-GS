import React from "react";
import { connect } from "react-redux";

export const LandingPage = (props) => {
  const username = props.username || "guest";
  const categories = props.categories || [];

  return (
    <div>
      <h3 className="landingPage-Greeting">welcome {username}</h3>
      <span>insert image here</span>
      <h2 className="landingPage-Title">environment</h2>
      <h3 className="landingPage-Subtitle">where you call home</h3>
      {/* {categories.map((category, index) => (
        <div className="landingPage-CategoryCard" key={index}>
          <span>insertCategoryImage</span>
          <h4>category.name</h4>
        </div>
      ))} */}
      <button>see all</button>
    </div>
  );
};
