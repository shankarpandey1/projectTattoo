import React from "react";
// import './aside.css';

function Aside(props) {
  return (
    <aside>
      <h2>
        <i className="design-11">Tattoo Designs</i>
      </h2>
      <p>{props.content}</p>
      <ul className="type-11">
        <li>Professional tattoos...</li>
        <li>Amateur tattoos...</li>
        <li>Cosmetic tattoos...</li>
        <li>Medical tattoos...</li>
        <li>Temporary tattoos...</li>
      </ul>
    </aside>
  );
}

export default Aside;


