import SobreDiv from "./styled";

export default function Sobre(props) {
  return (
    <SobreDiv className={props.nameClass}>
      <article id="sobre">a</article>
      <div className={`div-grid ${props.nameClass}`}>
        <header>
          {" "}
          <h1>Seja Bem Vindo !</h1>
          <p>
            Meu Nome: <label> Matheus Eduardo</label>
          </p>
          <p>
            Idade: <label>17 anos e alguns meses</label>
          </p>
          <p>
            Moro no <label>Recife</label> em <label>Pernambuco</label>
          </p>
          <p>
            Meus Hobyes preferidos são: <label>Animes, Futebol e Games</label>
          </p>
          <p>
            Atualmente estou cursando <label>Ensino Medío</label>
          </p>
          <p>
            No colegio: <label>Erem Lauro Diniz</label>
          </p>
          <p>
            Tecnologias que domino:{" "}
            <label>
              {" "}
              NextJS, MongoDb, Express, React e Node (Mern-Stack)
              <br /> e outras como MySQL PostgreSQL, Jest, Sequelize, Git,
              GitHub...{" "}
            </label>
          </p>
          <p>
            Tecnologias que Quero Aprender: <label>NextJS, Typescript...</label>
          </p>
        </header>



      </div>
      <div className={`sobre-apr ${props.nameClass}`}>
        <article>
          Olá! Me chamo{" "}
          <label htmlFor="">
            Matheus Eduardo sou de Recife em Pernambuco,{" "}
          </label>
          comecei nos meus 14 anos a estudar programação... Atualmente estou
          estudando Jest E Migrations no entanto já sei tecnologias como Node,
          React, Express, MongoDb, PostgreSQL, MySQL, Git e GitHub...
          <label htmlFor="">
            Além de programar tenho outras paixões como jogar Futebol e Jogos
            OnLines...
          </label>{" "}
          Além disso
          <label htmlFor=""> Sou filho da Dr.Cristiane e do Sr.Sidney,</label>
          <label htmlFor=""> Hora outra sou Hokage ! Datebayo</label>, Ou se não
          sou <label htmlFor="">Dom Quixote</label>, Espero que tenha gostado da
          minha pequena apresentação <label htmlFor="">foi um prazer !</label>
        </article>
      </div>
    </SobreDiv>
  );
}
