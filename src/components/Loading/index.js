import React from "react";
import StyledContentLoader from "styled-content-loader";

function Loading() {
  return (
    <StyledContentLoader
      style={{ display: "flex", justifyContent: "space-Between" }}
    >
      <div
        style={{
          height: "190px",
          width: "370px",
          borderRadius: "10px",
          padding: "10px",
        }}
      />
      <div
        style={{
          height: "190px",
          width: "370px",
          borderRadius: "10px",
          padding: "10px",
        }}
      />
      <div
        style={{
          height: "190px",
          width: "370px",
          borderRadius: "10px",
          padding: "10px",
        }}
      />
    </StyledContentLoader>
  );
}

export default Loading;
