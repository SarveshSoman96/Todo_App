import styled from "styled-components";

export const TodoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: ${ ({theme}) => theme.colors.primary} ${(props) => props.completed ? "transparent" : ""};
    border: 1px solid ${ ({theme}) => theme.colors.primary};
    color: ${ ({theme}) => theme.colors.text};

    .edit_todo{
        all: unset ;
        display: inline-block;
        background: transparent;
        border-bottom: 1px solid ${ ({theme}) => theme.colors.secondary};
        text-align: left;
        padding: 0 5px 2px;
      }

      @media screen and (min-width: 320px) and (max-width: ${({theme}) => theme.media.mobile}){
        flex-direction: column;
        gap: 1rem;

        .todoName{
          font-size: 1.1rem;
        }
      }

`