import ContatoDiv from "./styled";
import ImgInstagram from "../../styles/images/redesSociais/instagram.svg";
import ImgFacebook from "../../styles/images/redesSociais/Facebook.svg";
import ImgLinkedin from "../../styles/images/redesSociais/linkedin.svg";
import ImgWhatsapp from "../../styles/images/redesSociais/whatsapp.svg";
import perfil from "../../styles/images/perfil.jpg";

export default function Contato(props) {
  return (
    <ContatoDiv id='contato' className={props.nameClass}>
      <div>
        <h1>Deseja entrar em contato comigo</h1>
        <img className='perfil' src={perfil} alt=""/>

      <p>
        Basta clicar em um desses links e você sera direcionado as minhas redes
      </p>
      <ul>
        <li>
          <a href="https://www.instagram.com/matheus_lisbon/">
            <img
              src={ImgInstagram}
              alt="Rede social instagram"
              title="ir ao instagram"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100009610324999">
            <img src={ImgFacebook} alt="Facebook" title="ir ao facebook" />
          </a>
        </li>

        <li>
          {" "}
          <a href="https://www.linkedin.com/in/matheus-eduardo-a83a8a1a7/">
            <img src={ImgLinkedin} alt="" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5581986384447?text=Ol%C3%A1+gostaria+da+saber+um+pouco+do+seu+trabalho%21">
            <img src={ImgWhatsapp} alt="whatsapp" />
          </a>
        </li>
      </ul>
      <p>Email: <label htmlFor="">matheuszicatop523@gmail.com</label></p>
      <p>Telefone: <label htmlFor="">(81) 9 8638-4447</label></p>
      </div>
      
    </ContatoDiv>
  );
}
