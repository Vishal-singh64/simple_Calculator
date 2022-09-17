import styled from "styled-components";

export const Button=styled.button`
display: flex;
background-color: white;
border-radius: 20px;
height: ${props=>(props.btnHeight)};
width: 4vw;
border-style: none;
box-shadow:2px 2px 9px;
justify-content:center;
align-items: center;
margin: 15px;

`
