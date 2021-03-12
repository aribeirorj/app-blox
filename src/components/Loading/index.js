import React from "react";
import StyledContentLoader from "styled-content-loader";

function Loading() {
  return (
    <StyledContentLoader>
      <div style={{ height: "100px" }} />
      <p>Carregando..</p>
      <div style={{ height: "120px" }} />
    </StyledContentLoader>
  );
}

export default Loading;
