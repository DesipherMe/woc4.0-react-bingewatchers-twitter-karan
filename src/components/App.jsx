import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import Trending from "./Trending";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello From Karan!</h1> */}
      {/* Header */}
      <Header />
      {/* Feeds */}
      <Feed />
      {/* Footer */}
      <Trending />
    </div>
  );
}

export default App;
