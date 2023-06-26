import React from "react";

function Aside(props) {
  return (
    <aside>
      <h2>Aside</h2>
      <p>{props.content}</p>
    </aside>
  );
}

export default Aside;
