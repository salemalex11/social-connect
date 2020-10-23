import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: `1px solid`,
    position: "relative",
    padding: "10px 0",
  },
  Backbutton: {
    flex: "0 1 auto",
    backgroundColor: "#C8BFE7",
    fontSize: "10px",
    variant: "contained",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
  title: {
    fontSize: "25px",
    flex: "0 1 auto",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
});
export const PageNameHeader = (props) => {
  const classes = useStyles({});

  return (
    <div className={classes.header}>
      <Button
        className={classes.Backbutton}
        text={props.text}
        onClick={props.onClick}
      >
        Back
      </Button>
      <p className={classes.title}>{props.title}</p>
    </div>
  );
};
