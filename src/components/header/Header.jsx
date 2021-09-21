import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
// import "./css/Header.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useHistory } from "react-router-dom";
import useStyle from "./styles";

const Header = () => {
  const classes = useStyle();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <div className={classes.headerLeft}>
          <div
            onClick={() => history.push("/")}
            className={classes.headerTitle}
          >
            <MovieIcon />
            <h3>Movie-Zone</h3>
          </div>
        </div>
        <div
          onClick={() => history.push("/upload")}
          className={classes.headerRight}
        >
          <CloudUploadIcon />
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
