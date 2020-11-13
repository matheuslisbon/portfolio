import styled from 'styled-components'

const SobreDiv = styled.div`
  color:white;

  background: black;
  padding-bottom: 20px;

  #sobre{
    font-size:0.4px;
    padding:20px;
  }
  h1{
    text-align:center;
    border-bottom: 2px solid #06cbfe;
    font-size: 64px;
    margin-bottom: 10px;
    animation: animateh1 2s ease;
  }
  @keyframes animateh1{
    to{
      opacity:1;
      color: white;
      transform: translateY(0);

    }
    from{
      opacity: 0;
      color:black;
      transform: translateY(-150px);

    }
  }
  @keyframes animatediv {
    to{
      transform: translateX(0);
    }
    from{
      transform: translateX(-300px);
    }
  }


  div{
    border-radius: 18px;
    width: 90%;
    margin: 0 auto;
    background: #070707;
    padding:20px 20px 20px 20px;
    line-height: 1.5;
    font-size: 26px;
    font-weight:500;
    animation: animatediv 1.5s ease;
  }
  div.div-grid{
    display:flex;
    flex-direction:column;
  }

  div.sobre-apr{
    margin-top: 20px;
  }
  article{
    animation: effectp 4s ease;
  }
  div p {
    animation: effectp 4s ease;
  }

  @keyframes effectp{
    to{
      opacity: 1;
    }
    from{
      opacity: 0;
    }
  }

  label{
    font-weight: 500;
    font-style:italic;
    color:#06cbfe;
    animation: effectpalavras 4s ease;
  }
  @keyframes effectpalavras {
    to {
      opacity: 1;
    }
    from {
      opacity: 0;
    }
  }
  .sobreEffect{
    animation: GlobalAnimationReact 3s ease; 
  }
  img{
    height: 190px;

  }
`

export default SobreDiv