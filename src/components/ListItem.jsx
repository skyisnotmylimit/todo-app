import React from "react";

const ListItem = (props) => {
  return (
    <li className="li-item">
      <span className="inner-span">
        <input type="checkbox"/>
        <span className="text">{props.text}</span>
      </span>
      <p>...</p>
    </li>
  );
};

export default ListItem;
