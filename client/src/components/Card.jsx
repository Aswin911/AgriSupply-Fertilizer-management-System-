import React from 'react';
import styled from "styled-components"
import WheatCard from "./wheat-card"
import InfoCard from "./info-card"

const CardContainer = () => {
  return (
    <StyledContainer>
      <div className="cards-wrapper">
        <InfoCard />
        <WheatCard />
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color:rgba(255, 255, 255, 0);
  
  .cards-wrapper {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 20px;
    max-width: 1200px;
    width: 100%;
  }
`

export default CardContainer