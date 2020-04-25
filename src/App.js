import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "./App.css";

function App() {
  return (
    <div>
      <Timer time="5" name="Training" />
      <br />
      <Timer time="10" name="Pause" />
    </div>
  );
}
export default App;
