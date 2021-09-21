import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    height: "70px",
    backgroundColor: "#020120",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: `0px 0px 2px 2px aqua,
      0 4px 8px 0 rgba(10, 255, 182, 0.37), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: "10px",
  },
  headerLeft: {
    display: "flex",
    padding: "0 20px",
    cursor: "pointer",
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  muiSvgMovie: {
    color: "aqua",
    fontSize: "2.1rem",
  },
  headerTitleH3: {
    fontSize: "2.1rem",
    fontWeight: 500,
    marginLeft: "10px",
  },
  headerRight: {
    display: "flex",
    padding: "5px",
    alignItems: "center",
    border: "2px solid aqua",
    borderRadius: "5px",
    cursor: "pointer",
  },
  muiSvgCloud: {
    color: "aqua",
    fontSize: "2.1rem",
    marginRight: "5px",
    cursor: "pointer",
  },
  button: {
    padding: "2px",
    fontSize: "1.1rem",
    backgroundColor: "transparent",
    color: "white",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
});

export default useStyles;
