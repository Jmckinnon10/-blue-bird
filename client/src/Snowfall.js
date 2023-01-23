import React from "react";
// import "./styles.css";
import Snowfall from "react-snowfall";

export default function Snow() {
  console.log(window.location.href);
  const str = window.location.href.split("?")[1];
  const decoded = decodeURIComponent(str);

  return (
    <div className="snow-storm">
      <Snowfall
        color="white"
        snowflakeCount={750}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
}
