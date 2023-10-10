import styled from "styled-components"; 

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #BABABA;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 30%;
    min-height: 150px;
    box-shadow: 5px 5px 15px #7C7C7C;
    border: 2px solid #FFFFFF;
`

export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`