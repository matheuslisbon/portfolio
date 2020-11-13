//import "./Sidebar.css";
import React from "react";
import Index from "./styled";
export default function Sidebar({ width = 120, height = "60vh" }) {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  return (
    <Index>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        >
          <p
            style={{
              color: "white",
              transform: "rotate(90deg)",
              marginTop: "-18px",
              cursor: "pointer",
            }}
          >
            MENU
          </p>
        </button>
        <div className="content">
          <ul>
            <li>
              {" "}
              <a href="#portfolio" className="link-nav">
                Pórtfolio
              </a>
            </li>
            <li>
              {" "}
              <a href="#skills" className="link-nav">
                Skills
              </a>
            </li>
            <li>
              {" "}
              <a href="#sobre" className="link-nav">
                Sobre
              </a>
            </li>
            <li>
              {" "}
              <a href="#contato" className="link-nav">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Index>
  );
}
