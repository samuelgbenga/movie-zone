import React, { useState, useEffect } from "react";
import useStyle from "./style";
import SingleSlide from "./singleSlide/SingleSlide";
import loading from "../../../assets/loading.svg";

function Slider() {
  const classes = useStyle();
  const [getData, setGetData] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:3000/movies/`)
      .then((response) => response.json())
      .then((data) => {
        setGetData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={classes.root} id="slideScroll">
      <div className={classes.flexBox}>
        {getData ? (
          getData.map((item, index) => <SingleSlide key={index} item={item} />)
        ) : (
          <img src={loading} alt="loading" />
        )}
      </div>
    </div>
  );
}

export default Slider;
