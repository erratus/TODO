import styled from "styled-components"

export const Formcontainer=styled.div`
display: flex;
// align-items:center;
// justify-content: center;
padding : 1rem 1rem;

  @media (max-width: 420px) {
  padding:0;
  margin-right:1rem;
    flex-direction: column; 
    align-items: stretch; 
  }
`;
export const Input=styled.input`
width: 100%;
border-radius:0.4rem;
padding: 0.5rem;
background-color:rgb(36, 33, 33);
`;
export const Button=styled.button`
margin-left: 1rem;
border-radius:2rem;
border: 1px solid transparent;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #1a1a1a;
cursor: pointer;
transition: border-color 0.25s;

@media (max-width:420px){
    margin-left:0;
    margin-top:0.4rem;
    width:100%;

}
`;