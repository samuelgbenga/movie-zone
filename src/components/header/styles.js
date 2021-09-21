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
});
export default useStyles;
