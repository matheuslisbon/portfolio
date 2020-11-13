import ProgressDiv from "./styled";

export default function Progress (props){
  return (
    <ProgressDiv className={props.nameClass}>
      <div className='perfil'>
              <p style={{borderBottom:`3px solid ${props.borderName}`}}>{props.skills}</p>
              <img src={props.imgLink} alt=""/>
      </div>

      <div className="container">
        <div style={{ width: `${props.porcent}%`, background:`${props.colorBk}`}} className="progress-bar">{props.children} / {props.porcent}%</div>
        <div className='ppp'>100%</div>
      </div>
    </ProgressDiv>
  )
}