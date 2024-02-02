import styled from "styled-components"

export const GeneralProgress =()=>{
    return(
<Container className="d-flex flex-row justify-content-center align-items-center">
<div class="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</Container>
    )
}
const Container = styled.div`
top:0 !important;
width: 100vw !important;
height: 100% !important;
bottom:0 !important;
background-color: rgba(0,0,0,0.6);
backdrop-filter: blur(2px) !important;
z-index:999 !important;
position:absolute !important;
`