import HomeDiv from "./styled";
import ImgNlwHappy from "../../styles/images/gitHubImgs/happy.png";
import ImgCloneYoutube from "../../styles/images/gitHubImgs/cloneYoutubeImg.jpg";
import ImgNlwEcolleta from "../../styles/images/gitHubImgs/nlwEcolleta.png";
import devFinances from '../../styles/images/gitHubImgs/DevFinances.jpeg'
import mountain from '../../styles/images/gitHubImgs/webMountain.jpeg'
import { AiOutlineDown } from "react-icons/ai";
import Portfolio from "../../components/itensPortfolio";
import moveIt from '../../styles/images/gitHubImgs/moveIt.jpeg'

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

          <Portfolio 
          link={'https://devfinances-matheus-dev.netlify.app'} 
          title={'dev.finance$'}
          description={'Projeto de finanças'}>
          <img src={devFinances} alt="Projeto de finanças" />
          </Portfolio>

          <Portfolio
          link={'https://mountains-matheus-dev.netlify.app'}
          title={'Mountain OutDor'}
          description={'Galeria de montanhas'}>
          <img src={mountain} alt="galeria de montanhas" />
          </Portfolio>

          <Portfolio
          link={'https://dados-covid-world.netlify.app/'}
          title={'Dados de covid-19'}
          description={'Casos diarios covid-19'}>
          <img src="https://portfolio-matheus-developer.netlify.app/static/media/imgSite.563030d3.PNG"
          alt="Dados diarios de covid"/>
          </Portfolio>

          <Portfolio 
          link={'https://move-it-beige.vercel.app/'} 
          title={'move-it nlw4'}
          description={'Técnica de pomodoro'}>
          <img src={moveIt} alt="Técnica de pomodoro" />
          </Portfolio>
          
          <Portfolio
          link={"https://github.com/matheuslisbon/next-level-week-happy"}
          title={'Next Level Week 3'}
          description={'Orfanato de criança'}>
          <img src={ImgNlwHappy} alt="" />
          </Portfolio>

          <Portfolio
          link={"https://github.com/matheuslisbon/clone-youtube"}
          title={'Clone Youtube'}
          description={'Clone do youtube com Material-UI'}>
          <img src={ImgCloneYoutube} alt="" />
          </Portfolio>

          <Portfolio
          link={'https://github.com/matheuslisbon/next-level-week1-E-colleta'}
          title={'Nlw E-colleta'}
          description={'Projeto de reciclagem de resíduos'} >
          <img src={ImgNlwEcolleta} alt="Reciclagem de resíduos" />
          </Portfolio>
        </div>
      </section>
    </HomeDiv>
  );
}
