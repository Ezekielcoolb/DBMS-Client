import React from "react";
import { Outlet } from "react-router-dom";

import { styled } from "styled-components";
import AdmissionSidebar from "./AdmissionSidebar";

export default function AdmissionDashboardLayout() {
  return (
    <Wrapper className="d-flex flex-row">
      <AdmissionSidebar />
      <div
        style={{ backgroundColor: "#f5f5f5" }}
        className="outlet"
      >
    
        <div className="div">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  .outlet {
    width: 80%;
    height: 100vh;
    
  }
  .div{
    background-color: #f5f5f5 !important;
    margin-top: 150px !important;

  }
  @media screen and (max-width: 1100px) {
    flex-direction:column !important;
    .outlet {
      width: 100% !important;
    }
  }
`;
