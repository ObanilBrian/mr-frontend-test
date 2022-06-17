"use strict";

fetch(
  "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
)
  .then((resp) => resp.json())
  .then((data) => {
    const domContainer = document.querySelector("#root");
    const root = ReactDOM.createRoot(domContainer);
    root.render(<App data={data} />);
  });
