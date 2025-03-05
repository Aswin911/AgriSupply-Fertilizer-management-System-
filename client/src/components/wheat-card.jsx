import React from 'react';
import styled from "styled-components"

const WheatCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg">
          <img src="/wheat.jpg" alt="Wheat" className="card-image" />
        </div>
        <div className="blob" />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  flex: 0 0 auto;
  
  .card {
    position: relative;
    width: 250px; /* Increased width by 10px */
    height: 420px; /* Increased height by 60px */
    border-radius: 16px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .bg {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 238px; /* Adjusted for new width */
    height: 408px; /* Adjusted for new height */
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 12px;
    overflow: hidden;
    outline: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: rgb(255, 234, 0);
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`

export default WheatCard;
