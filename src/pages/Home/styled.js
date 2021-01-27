import styled from 'styled-components'

const HomeDiv = styled.div`


  header{
    display:flex;
    position: relative;
    z-index: 1;
    flex-direction: column;
    padding-top: 164px;
    padding-bottom: 100px;
    align-items:center;

  }

@keyframes toright {
  0%{transform:translateX(-200px); color:#909090;}
  100%{transform:translateX(0); color:white;}

}

  h1.intro{
    font-size: 70px;
  padding-bottom: 3px;
  margin-bottom: 45px;
  border-bottom: 6px solid #06cbfe;
  animation: toright 2s ease;
  color:white;

  }
  h1.border{
    border-bottom: 6px solid #06cbfe;
  }
  div#portfolio{
    font-size:0.1px;
    margin-top: -100px;
    padding-bottom: 75px;
  }
  section{
    position:relative;
    z-index: 10;
    width: 90%;
    margin: 0 auto;
    margin-top: -50px;
    display:flex;
    flex-direction:column;
     background: #070707cc;
     border-radius: 18px;
     padding-bottom:35px;
  }
  @keyframes moveh1{
    to {
      transform: translateY(0);
      opacity:1;
    }
    from{
      transform: translateY(100px);
      opacity: 0;
    }
  }
  h1.port-div{
    font-size: 78px;
    padding: 15px ;
    align-self:center;

    animation: moveh1 2s ease;
  }
  div.div-grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    grid-row-gap: 35px;
    width:94%;
    margin:0 auto;
  } 


  div.item-grid{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border: 5px solid #070707;
    border-radius:14px;
    border: 3px solid #303030;
  }
  div.item-grid h1 {
    background: #151515;
    border-radius:  8px 8px 0 0;
    display:flex;
    color: white;
    width:100%;
    height: 50px;
    align-self:center;
    align-items:center;
    justify-content:center;
    text-align:center;
    cursor: pointer;
  }
  div.item-grid p { 
    background: #151515;
    border-radius: 0 0 8px 8px ;
    display:flex;
    width:100%;
    min-height: 50px;
    align-self:center;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-size: 26px;
    padding: 10px;
  }
  div.item-grid img {
    height: 285px;
    padding: 20px;
    cursor: pointer;
  }

  .effectBottom{
    color:#06cbfe;
    cursor:pointer;
    animation: toEffectBottom 0.4s alternate-reverse infinite;
    margin-top: 20px;
    margin-bottom: 200px;
  }
  @keyframes toEffectBottom{
    to {
      transform: translateY(-10px);
    }
    from{
      transform: translateY(20px);
    }
  }
  .homeEffect{
    animation: GlobalAnimationReact 2s;
  }
  @media(max-width:1250px){
    div.div-grid{
      grid-template-columns: 1fr;
    }
    h1.intro{
      font-size: 54px;
    }

  }
  @media(max-width:750px){
     div.item-grid img{
      height:180px;
    }  
    h1.intro{
      font-size: 32px;
    }
 
  }
  a{
    color:white;
  }

`

export default HomeDiv