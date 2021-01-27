import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*,
:root{
    margin:0;
    padding:0;
    box-sizing:border-box;

    font-family: 'Roboto', sans-serif;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
   scroll-behavior: smooth;
    scrollbar-arrow-color:red;
    scrollbar-3dlight-color:red;
    scrollbar-highlight-color:red;
    scrollbar-face-color:#FFFFFF;
    scrollbar-shadow-color:#0000FF;
    scrollbar-darkshadow-color:#FFFF00;
    scrollbar-track-color:#00FF00;
  
}
html{
    height:100vh;
    width:100%;
}
body{
    font-family: 'Roboto', sans-serif;
    color: white;

    background-image: url('https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-position:center;
  background-repeat: no-repeat;
  background-size: 100% 250%;


  background-attachment: fixed;
}

::-webkit-scrollbar {
  width: 8px;
  height: 10px;
  border-radius: 16px;
}

::-webkit-scrollbar-track-piece {
  background-color: #101010;

}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background: linear-gradient(to bottom, #0b36c3 , #7df9ff );
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #666;
  border-radius: 3px;
}
  @keyframes GlobalAnimationReact{
    to{
      transform: translateX(0);
      opacity: 1;
    }
    from{
      transform: translateX(-300px);
      opacity: 0;
    }
  }
`