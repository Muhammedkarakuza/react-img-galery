import data from "./files/data";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>Photo Album</h1>
      </div>
      <div className="galery-container">
        {(data || []).map((item, i) => {
          const { photographer, src } = item;
          return (
            <div
              className="galery col-xl-2 container col-md-3 col-xs-12"
              key={data.index}
            >
              <div className="image">
                <img
                  src={src.large}
                  alt=""
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <p>{photographer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
