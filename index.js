import React from "react";
import ReactDOM from "react-dom/client";

// Nested Header Elements using React.CreateElement

// const NestedElement = React.createElement(
//   "div",
//   { className: "title" },
//   React.createElement("h1", null, "This is H1"),
//   React.createElement("h2", null, "This is a H2"),
//   React.createElement("h3", null, "This is a H3")
// );

// using Function Component

// const NestedElement = function () {
//   return React.createElement(
//     "div",
//     { className: "title" },
//     React.createElement("h1", null, "This is H1"),
//     React.createElement("h2", null, "This is a H2"),
//     React.createElement("h3", null, "This is a H3")
//   );
// };

// Nested Header Elements using JSX

// const NestedElement = function () {
//   return (
//     <div className="title">
//       <h1 className="heading1">This is H1</h1>
//       <h2 className="heading2">This is a H2</h2>
//       <h3>This is a H3</h3>
//     </div>
//   );
// };

//Composition of Component

const ChildComponent = function() {
  return <p>Hello Vizag</p>

};

const ParentComponent = () => {
  return (
    <div className="title">
      <h1>This is H1</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
      <ChildComponent />
    </div>
  );
};


var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

// rootReact.render(NestedElement);

// rootReact.render(<NestedElement />);

rootReact.render(<ParentComponent></ParentComponent>);