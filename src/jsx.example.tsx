import React, { createElement, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return createElement("div", { className: "container" }, [
    createElement("h1", { className: "font-bold", key: 1 }, `Hello React ${count}`),
    createElement(
      "button",
      {
        className: "py-2 px-4 border",
        key: 2,
        onClick: () => setCount(count + 1),
      },
      "Click me!"
    ),
  ]);
}

export default App;
