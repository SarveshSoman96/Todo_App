import styled from "styled-components";

export const StyledButton = styled.button`
    all: unset;
    padding: 5px 10px;
    border: 1px solid ${ ({theme}) => theme.colors.secondary};
    border-radius: 5px;
    background-color: ${props => props.bg};
    cursor: pointer;

    @media screen and (min-width: 320px) and (max-width: ${({theme}) => theme.media.mobile}){
        font-size: 0.9rem;
    }

`

export const FormButtonStyled = styled.button`
    all: unset;
    font-size: 20px;
    font-weight: 800;
    width: 35px;
    height: 35px;
    border: 2px solid transparent;
    background-color: ${ ({theme}) => theme.colors.primary};
    color: ${ ({theme}) => theme.colors.text};
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        color: #7678ed;
        border: 2px solid ${ ({theme}) => theme.colors.primary};
        background-color: transparent;
      }

`