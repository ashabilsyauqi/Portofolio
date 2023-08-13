import React from "react";
import TiltComponent from "./UIs/TiltComponent";

export default function SandBoxes() {
  return (
    <div className="flex-center vh-100">
      <div id="background">
        <TiltComponent />
      </div>
    </div>
  );
}
