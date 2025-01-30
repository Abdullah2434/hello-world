import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = ({ color = "black" }) => {
  return <h1 style={{ color }}>Hello World</h1>;
};

// Function to embed in a given container
window.EmbedHelloWorld = (containerId, options = {}) => {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.render(<HelloWorld {...options} />, container);
  }
};
