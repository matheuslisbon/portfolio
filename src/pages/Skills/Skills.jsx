import SkillsDiv from "./styled";
import Progress from "../../components/Progress/Progress";

export default function Skills(props) {
  return (
    <SkillsDiv className={props.nameClass} >
      <article id='skills'>a</article>
      <header>
        <div className={props.nameClass}>
        <h1 className='skills'>SKILLS</h1>
        <h3>Desenvolvo tanto no Fronted quanto no Backend(Fullstack)</h3>
        <div className='itens-grid'>
<ul> <h1>Backend</h1>
          <li>NodeJS</li>
          <li>Express Js</li>
          <li>Jest(Test)</li>
          <li>MySql</li>
          <li>PostgresSql</li>
          <li>MongoDb</li>
          <li>Sequelize Orm</li>
          <li>E alguns Templating engines <br/> Handlebars, EJS, Nunjucks...</li>
        </ul>
        <ul>
          <h1>Frontend</h1>
          <li>ReactJS</li>
          <li>React Native(Mobile)</li>
          <li>Jest(Test)</li>
          <li>Styled-Components</li>
          <li>Boostraps</li>
          <li>React-Redux</li>
          <li>React-Hooks</li>
        </ul>
        </div>
        
        </div>
      <div className="itens">
        <Progress
        nameClass={props.nameClass}
          porcent={100}
          imgLink={'https://rdrdev.netlify.app/img/html.png'}
          colorBk={"linear-gradient(to right, #0b36c3 , #7df9ff)"}
          skills="HTML"
          count={100}
          borderName={'#0b36c3'}
        >
          HTML
        </Progress>

        <Progress
        nameClass={props.nameClass}
          porcent={95}
          imgLink={'https://rdrdev.netlify.app/img/javascript.png'}
          colorBk={" linear-gradient(to left, #ff00ff, #fb4a21)"}
          skills="Javascript"
          count={100}
          borderName={'#ff00ff'}
        >
          JAVASCRIPT  
        </Progress>

        <Progress
        nameClass={props.nameClass}
          porcent={88}
          colorBk={"linear-gradient(to right, #8a2be2 , #ff3a40  )"}
          skills="CSS"
          count={100}
          imgLink={'https://rdrdev.netlify.app/img/css.png'}
          borderName={'#8a2be2'}
        >
          CSS
        </Progress>

        <Progress
        nameClass={props.nameClass}
          porcent={90}
          colorBk={"linear-gradient(to right, #69ff46, #3a90e5"}
          skills="Node"
          count={100}
          imgLink={'https://www.itjewelers.com/images/node-js%20copy.png'}
          borderName={'#69ff46'}
        >
          NODE
        </Progress>
        <Progress
        nameClass={props.nameClass}
          porcent={88}
          colorBk={"linear-gradient(to left, #ff6731, #ffcd00)"}
          skills="React"
          count={100}
          imgLink={'https://portfolio-matheus-developer.netlify.app/static/media/react.240b74b4.png'}
          borderName={'#ff6731'}
        >
          REACT
        </Progress>

      </div>
      </header>
      
    </SkillsDiv>
  );
}
