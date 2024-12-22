import React from "react";
import ReactDOM from "react-dom/client";

const HeaderCompnent = function (){
  return <p>This is a paragraph</p>
}


var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(<HeaderCompnent></HeaderCompnent>);