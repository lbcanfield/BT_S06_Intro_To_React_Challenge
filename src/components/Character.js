import React from 'react';
import styled, { keyframes } from 'styled-components';

const delay = 0.15;

const StyledCharacter = styled.div`
     display: flex;     
     flex-flow: row;
     justify-content: space-between;
     width: 35%;
     color: black;
     border: 3px solid black;
     margin: 2px;
     padding: 2px;
     padding-left: 10px;
     padding-right: 10px;
     transition: all ${delay}s ease-in-out;
     &:hover{
          transition: all ${delay}s ease-in-out;
          background-color: ${props => props.theme.primaryColor};
          color: white;
          opacity: 90%;
     }
`


export default function Character(props) {
     const { character } = props
     console.log(props);
     return (
          <StyledCharacter>
               <div>
                    <h2>{props.character.name}</h2>
               </div>
               <div>
                    <h3>{props.character.birth_year}</h3>
               </div>
          </StyledCharacter>
     )
}