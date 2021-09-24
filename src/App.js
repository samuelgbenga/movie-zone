import "./App.css";
import { About, Header } from "./components";
// import { useState, useEffect } from "react";
import React from "react";

function App() {
  // const [testingApi, setTestingApi] = useState({});

  // const fetchData = () => {
  //   fetch("http://localhost:3000/movies/1")
  //     .then((response) => response.json())
  //     .then((data) => setTestingApi(data));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <Header />
      <About />
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      {/* {testingApi && console.log(testingApi)} */}
    </div>
  );
}

export default App;
