import React from "react";
import { createRoot } from "react-dom/client";

const HelloWorld = ({ color = "black" }) => {
  return <h1 style={{ color }}>Hello World</h1>;
};

window.EmbedHelloWorld = (containerId, options = {}) => {
  const container = document.getElementById(containerId);
  if (container) {
    console.log("Container found:", container);
    console.log("Rendering with options:", options);
    
    const root = createRoot(container);
    root.render(<HelloWorld {...options} />);
  } else {
    console.error(`Container with ID '${containerId}' not found.`);
  }
};
