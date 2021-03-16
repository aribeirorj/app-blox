import React from "react";
import StyledContentLoader from "styled-content-loader";

function Loading() {
  return (
    <StyledContentLoader
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(380px, 2fr))",
        gridGap: "1rem",
      }}
    >
      <div
        style={{
          height: "200px",
          width: "480px",
          borderRadius: "10px",
          padding: "5px",
        }}
      />
      <div
        style={{
          height: "200px",
          width: "480px",
          borderRadius: "10px",
          padding: "5px",
        }}
      />
      <div
        style={{
          height: "200px",
          width: "480px",
          borderRadius: "10px",
          padding: "5px",
        }}
      />
      <div
        style={{
          height: "200px",
          width: "480px",
          borderRadius: "10px",
          padding: "5px",
        }}
      />
    </StyledContentLoader>
  );
}

export default Loading;
