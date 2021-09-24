import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: "400px",
    height: "300px",
    // background: "rgba(0,0,0,0.2)",
    bottom: "0",
    right: "0px",
    overflow: "hidden",
    overflowX: "scroll",
    // textAlign: "center",
    // img: { marginTop: "100px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width : 800px)": {
      display: "none",
    },
    "@media (min-width : 900px)": {
      width: "50%",
    },
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  flexBox: {
    width: 5 * 350 + "px",
    height: "100%",
    marginLeft: "940px",
    // background: "red",
    display: "flex",
  },
});

export default useStyles;
