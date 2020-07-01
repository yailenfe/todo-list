import React from "react";
export default function TodoLisItem(props) {
  const{title}=props
  return (
    <>
      <li className="list-group-item text-secondary">{title}</li>
    </>
  );
}
