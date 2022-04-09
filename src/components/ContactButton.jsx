import React from "react";
import styled from "styled-components";
import "./contactButton.css";

//contact me button component
const Contactbutton = () => {
  const Button = styled.button`
    background: conic-gradient(
      from 180deg at 50% 50%,
      rgba(181, 226, 220, 0.59) -166.88deg,
      #0077b5 150deg,
      #98b8de 181.87deg,
      rgba(181, 226, 220, 0.59) 193.12deg,
      #0077b5 510deg
    );
    border-radius: 20px;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    margin: 2px 0px;
    cursor: pointer;
    align-items: center;
  `;

  return (
    <div>
      <a href="https://react.school" target="_blank">
        <Button> Let's work together </Button>
      </a>
    </div>
  );
};

export default Contactbutton;
