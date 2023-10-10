import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #CDCDCD;
    background-color: #737373;
    color: #BABABA;
    font-size:24px;
    font-family: 'Roboto';
    font-weight: 700;
    flex: 1;

    &:hover {
        background-color: #BABABA;
        box-shadow: inset 3px 3px 10px #737373;
        color:#737373;
    }
`

export const ButtonOperContainer = styled.button`
    padding: 10px;
    border: 1px solid #CDCDCD;
    background-color: #9F9F9F;
    color: #606060;
    font-size:24px;
    font-family: 'Roboto';
    font-weight: 700;
    flex: 1;

    &:hover {
        background-color: #737373;
        box-shadow: inset 3px 3px 10px #535353;
        color:#BABABA;
    }
`