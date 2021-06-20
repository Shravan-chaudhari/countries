import React from "react";
import { FoldingCube } from "better-react-spinkit";

function Loading() {
  return (
    <div>
      <FoldingCube
        style={{ display: "grid", placeItems: "center", height: "100vh" }}
        size={100}
      />
    </div>
  );
}

export default Loading;
