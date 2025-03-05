import React from 'react';
import styled from "styled-components"

const InfoCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-content">
          <div className="header">
            <h2>AgriSupply</h2>
            <p className="tagline">Empowering Farmers, Connecting Manufacturers</p>
          </div>

          <div className="features">
            <h3>What We Offer</h3>
            <div className="scrollable-content">
              <ul>
                <li>
                  <span className="feature-icon">📦</span>
                  <div>
                    <strong>Direct Fertilizer Procurement</strong>
                    <p>Farmers can purchase fertilizers directly from manufacturers, ensuring affordability and quality.</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">🔄</span>
                  <div>
                    <strong>Inventory & Order Management</strong>
                    <p>Manufacturers can efficiently manage stock levels and fulfill orders seamlessly.</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">💬</span>
                  <div>
                    <strong>Farmer Feedback & Support</strong>
                    <p>A platform for farmers to rate products, share experiences, and receive expert guidance.</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">🚜</span>
                  <div>
                    <strong>Smart Supply Chain</strong>
                    <p>Optimized logistics to ensure timely delivery of agricultural products.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="cta">
            <button>Explore AgriSupply</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 900px;
  
  .card {
    width: 100%;
    height: 350px;
    background: linear-gradient(145deg, #f0f9f0, #e8f4ea);
    border-radius: 12px;
    padding: 30px;
    box-shadow: 
      rgba(149, 157, 165, 0.1) 0px 8px 24px,
      rgba(100, 180, 120, 0.1) 0px 0px 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 
        rgba(149, 157, 165, 0.2) 0px 8px 24px,
        rgba(100, 180, 120, 0.2) 0px 0px 40px;
    }
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(90deg, #4ca771, #68c18d);
    }
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #2c3e50;
  }
  
  .header {
    margin-bottom: 15px;
    
    h2 {
      color: #2a6d3c;
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    
    .tagline {
      color: #5a7d68;
      margin: 5px 0 0;
      font-size: 16px;
    }
  }
  
  .features {
    flex: 1;
    
    h3 {
      font-size: 18px;
      color: #3a5a48;
      margin: 0 0 10px;
      font-weight: 600;
    }

    .scrollable-content {
      max-height: 140px;
      overflow-y: auto;
      padding-right: 5px;

      &::-webkit-scrollbar {
        width: 5px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: #4ca771;
        border-radius: 10px;
      }
    }
    
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      
      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        
        .feature-icon {
          flex: 0 0 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(100, 180, 120, 0.1);
          border-radius: 50%;
          margin-right: 12px;
          font-size: 16px;
        }
        
        div {
          flex: 1;
          
          strong {
            display: block;
            font-size: 15px;
            margin-bottom: 2px;
            color: #2a6d3c;
          }
          
          p {
            margin: 0;
            font-size: 14px;
            color: #5a7d68;
          }
        }
      }
    }
  }
  
  .cta {
    margin-top: auto;
    
    button {
      background: linear-gradient(90deg, #4ca771, #68c18d);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(76, 167, 113, 0.2);
      }
    }
  }
`

export default InfoCard;
