import React from "react";
import useStyle from "./style";

function SingleSlide({ item }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img
        src={item.info.image_url}
        alt={item.title}
        key={item.id}
        className={classes.img}
      />
    </div>
  );
}

export default SingleSlide;
