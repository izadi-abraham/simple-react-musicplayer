import React from "react";
import "./PlayList.scss";

function playlist(props) {
  const { list, current, handleClick } = props;
  const listItems = list.map((item, index) => (

    <li key={index} onClick={() => handleClick(index)} className={current === index ? "list-group-item active" : "list-group-item"}>
      {item.replace("../files/", "")}
    </li>
  ));

  if (!props.showList){
    return null;
  }

  return (
    <div className={"d-flex flex-column justify-content-center align-items-center"}>
      <ul className={"play-list list-group"}>{listItems}</ul>
    </div>
  );
}

export default playlist;
