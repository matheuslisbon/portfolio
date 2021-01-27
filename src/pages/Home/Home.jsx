import HomeDiv from "./styled";
import ImgNlwHappy from "../../styles/images/gitHubImgs/happy.png";
import ImgCloneYoutube from "../../styles/images/gitHubImgs/cloneYoutubeImg.jpg";
import ImgNlwEcolleta from "../../styles/images/gitHubImgs/nlwEcolleta.png";
import { AiOutlineDown } from "react-icons/ai";

export default function Home(props) {
  return (
    <HomeDiv className={props.nameClass}>
      <header>
        <h1 className="intro">Olá sou Matheus Eduardo,</h1>
        <h1 className="intro border">FullStack Developer</h1>
        <a href="#portfolio">
          <AiOutlineDown
            href="#portfolio"
            className="effectBottom"
            size={"7rem"}
          />

        </a>
      </header>
      <div id="portfolio">a</div>
      <section>
        <h1 className={`port-div ${props.nameClass}`}>Pórtfolio</h1>

        <div className={`div-grid ${props.nameClass}`}>
          <a target="_black" href="https://dados-covid-world.netlify.app/">
            <div className="item-grid">
              <h1>Dados de covid-19 </h1>
              <img
                src="https://portfolio-matheus-developer.netlify.app/static/media/imgSite.563030d3.PNG"
                alt=""
              />
              <p>Casos diarios covid-19</p>
            </div>
          </a>
          <a
            target="_black"
            href="https://github.com/matheuslisbon/next-level-week-happy"
          >
            <div className="item-grid">
              <h1>Next Level Week 3</h1>
              <img src={ImgNlwHappy} alt="" />
              <p>Orfanato de crianças</p>
            </div>
          </a>

          <a
            target="_black"
            href="https://github.com/matheuslisbon/clone-youtube"
          >
            <div className="item-grid">
              <h1>Clone Youtube</h1>
              <img src={ImgCloneYoutube} alt="" />
              <p>Clone do youtube com Material-UI</p>
            </div>
          </a>

          <a
            target="_black"
            href="https://github.com/matheuslisbon/next-level-week1-E-colleta"
          >
            <div className="item-grid">
              <h1>Nlw E-colleta</h1>
              <img src={ImgNlwEcolleta} alt="" />
              <p>Projeto de reciclagem de lixo</p>
            </div>
          </a>
        </div>
      </section>
    </HomeDiv>
  );
}
