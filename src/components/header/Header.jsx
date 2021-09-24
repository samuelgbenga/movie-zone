import React from "react";
// import MovieIcon from "@mui/icons-material/Movie";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
// import "./css/Header.css";
import { CloudUpload, Movie } from "@mui/icons-material";
import Slider from "./slider/Slider";
// import { useHistory } from "react-router-dom";
import useStyle from "./styles";

const Header = () => {
  const classes = useStyle();
  const [getPoster, setGetPoster] = useState("");
  const [getTitle, setGetTitle] = useState("");
  const [getPlot, setGetPlot] = useState("");
  const [getGener, setGetGener] = useState("");
  const [getName, setGetName] = useState("");
  //   const history = useHistory();
  const fetchData = () => {
    var randomId = Math.floor(Math.random() * 5) + 1;
    fetch(`http://localhost:3000/movies/${randomId}`)
      .then((response) => response.json())
      .then((data) => {
        setGetPoster(data.info.image_url);
        setGetTitle(data.title);
        setGetPlot(data.info.plot);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={classes.root}
      style={{
        // backgroundColor: "black",
        backgroundImage: `radial-gradient(ellipse at center, rgba(181,189,200,0) 0%,rgba(130,140,149,0) 30%,rgba(40,52,59,1) 100%),
        url(${getPoster})
        `,
        // // background: "rgb(2,0,36)",
        // backgroundRepeat: "no-repeat",
        // width: "100%",
        // height: "600px",
        // backgroundPosition: "center center",
        // backgroundSize: "100vw auto",
        // overflow: "hidden",
      }}
    >
      <div className={classes.headerContainer}>
        <div className={classes.headerLeft}>
          <div
            // onClick={() => history.push("/")}
            className={classes.headerTitle}
          >
            <Movie className={classes.muiSvgMovie} />
            <h3 className={classes.headerTitleH3} style={{ fontSize: "20px" }}>
              MovieZone
            </h3>
          </div>
        </div>
        <div
          //   onClick={() => history.push("/upload")}
          className={classes.headerRight}
        >
          <CloudUpload className={classes.muiSvgCloud} />
          <button className={classes.button}>Upload</button>
        </div>
      </div>

      {/* {console.log(getPoster)} */}
      <div className={classes.fadeBottom}></div>
      <div className={classes.leftContent}>
        <div className={classes.title}>
          <Typography variant="h6">{getTitle}</Typography>
          <div className={classes.plot}>
            <Typography variant="subtitle2">{getPlot}</Typography>
          </div>
        </div>
      </div>
      <div className={classes.slider}>
        <Slider />
      </div>
    </div>
  );
};
export default Header;
