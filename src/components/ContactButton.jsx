import React from "react";
import styled from "styled-components";
import "./contactButton.css";

//contact me button component
const Contactbutton = () => {
  const Button = styled.button`
    background: linear-gradient(107.21deg, #c961de 24.43%, #2954a3 68.95%);
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
