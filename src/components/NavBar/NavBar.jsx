import NavBarDiv from "./styled";

export default function NavBar() {
  return (
    <NavBarDiv>
      <div>
        <a href="#portfolio"><h1 classNome="matheus">Matheus'Devs</h1></a> 
        <ul>
          <a href="#portfolio">
            <li className="list">PÓRTFOLIO</li>
          </a>
          <a href="#skills">
            {" "}
            <li className="list">SKILLS</li>
          </a>
          <a href="#sobre">
            <li className="list">SOBRE</li>
          </a>
          <a href="#contato">
            <li className="list">CONTATO</li>
          </a>
        </ul>{" "}
        <h2>Instagram</h2>
      </div>
    </NavBarDiv>
  );
}
