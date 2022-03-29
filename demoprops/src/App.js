import React from "react";
import Students from "./Students"; //Import component vào
function App(props) {
  return (
    <div>
      <Students name="NTH" id="1521164" grade ="64CS2">Sinh viên 1</Students>
      <Students name="ABC" id="123414" grade ="64CS2">Sinh viên 2</Students>
    </div>
  );
}
export default App;