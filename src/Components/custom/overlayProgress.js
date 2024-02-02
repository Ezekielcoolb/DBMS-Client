import styled from "styled-components"

export const OverlayProgress =()=>{
    return(
<Container className="d-flex flex-row justify-content-center align-items-center">
<div class="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</Container>
    )
}
const Container = styled.div`
width: 80% !important;
height: 100vh !important;
background-color: rgba(0,0,0,0.6);
backdrop-filter: blur(2px) !important;
z-index:999 !important;
position:absolute !important;
margin-top:-90px;
@media (max-width:1100px) {
  width: 100% !important;
}
`