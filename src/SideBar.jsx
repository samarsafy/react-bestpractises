import React from "react";

export default function Sidebar(props) {
  return (
    <MyContext.Consumer>
     <React.Fragment>
      {context => ({context.state.name}
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a
              className={
                " " + (props.theme === "dark" ? "red-text" : "green-text")
              }
              href="#"
            >
              Sass
            </a>
          </li>
          <li>
            <a
              className={
                " " + (props.theme === "dark" ? "red-text" : "green-text")
              }
              href="#"
            >
              Components
            </a>
          </li>
          <li>
            <a
              className={
                " " + (props.theme === "dark" ? "red-text" : "green-text")
              }
              href="#"
            >
              Javascript
            </a>
          </li>
          <li>
            <a
              className={
                " " + (props.theme === "dark" ? "red-text" : "green-text")
              }
              href="#"
            >
              Mobile
            </a>
          </li>
        </ul>
      )}
       </React.Fragment>
    </MyContext.Consumer>
  );
}
