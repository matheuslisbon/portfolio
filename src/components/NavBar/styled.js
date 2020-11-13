import styled from 'styled-components'

const NavBarDiv = styled.div`
div{
    display:flex;
  position:fixed;
  top:0;
  z-index: 999;
  width:100%;
  align-items:center;
  justify-content:space-between;
  padding:10px 10px;
  background: rgba(0,0,0,0.5);
  backdrop-filter: saturate(180%) blur(18px);
  border-bottom:0.5px solid rgba(250,250,250,0.1);
}


  @keyframes totop {
  0%   {transform: translateX(-100px);}
  100%   {transform: translateX(0px);}
}
  h1{
    font-family: 'Sansita Swashed';
    font-weight: bold;
    font-size: 28px;

    padding: 3px 7px;
    color:white;
    animation: totop 1s ease;
    border-bottom: 3px solid #06cbfe;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    
  }
  ul {
    display:flex;
    font-weight: 500;
    position: relative;
    animation: mymove 1s ease;
  }
  @keyframes tosup {
  0%{top:-20px}
  100%{top:0}
  }
  @keyframes mymove {
  to   {top: 0;}
  from {top: -50px;}
}

  ul li.list {
    color:white;
    font-size: 20px;
    font-weight:bold;
    margin: 0 10px;
    border-bottom: 2px solid #06cbfe;
    padding: 5px ; 

  }
  @keyframes efectlist{
    to{
      color:white;
      background: linear-gradient(to right,#4586fc,#06cbfe);

    }
    from{
      color:black;
      background: linear-gradient(to right,#06cbfe,#4586fc);

    }
  } 
  ul li:hover{
    color:white; 
    background: linear-gradient(to right,#4586fc,#06cbfe);
    animation: efectlist .5s alternate-reverse infinite;
    border-radius:8px;
    
  } 
  h2{
     font-size:0.4px;
     margin-left: 100px;
    }
  @media(max-width:900px){
    h1{
      justify-content:center;
      align-self:center;
      font-size:32px;
      padding: 0 7px 3px;
    }
    ul{
      display:none;
    }
    div{
      justify-content:center;
    }
    h2{
      display:none;
    }
  }
`
export default NavBarDiv