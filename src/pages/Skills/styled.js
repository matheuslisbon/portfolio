import styled from 'styled-components'

const SkillsDiv = styled.div`

article{
  font-size:0.2px;
  padding-bottom:20px;
}
header{
    padding: 50px 60px;

  width: 90%;
  background: #070707cc;
  margin: 10px auto;
  margin-top: 30px;
  display:grid;
  grid-template-columns:2fr 1fr;
  border-radius:18px;
  }
  
  .port-grid img{
    height: 150px;
  }
  .itens-grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top:15px;
    font-size: 22px;
  }

  h1{ 
    width:min-content;
    margin-bottom:10px;
    font-size:46px;
    border-bottom:4px solid #06cbfe;

  }
  ul {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    font-weight:500;
  }

  .skillsEffect{
    animation: GlobalAnimationReact 2s ease; 
    color:white;
  }
  @media(max-width:900px){
    header{
      grid-template-columns: 1fr;
      padding:0;
    }
    .itens-grid{
      grid-template-columns: 1fr;
      margin: 15px 0;
    }
    ul{
      flex-direction:column;
      justify-content:center;
      align-items:center;
      margin: 15px;
    }
  }
`

export default SkillsDiv