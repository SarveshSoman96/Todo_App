import styled from "styled-components";

export const TodoWrapperStyled = styled.div`
    max-width: 600px;
    width: 50%;
    padding: 1rem;
    border-radius: 20px;
    background-color: ${ ({theme}) => theme.colors.secondary};
    border: 1px solid ${ ({theme}) => theme.colors.secondary};
    text-align: center;
`

export const EmptyTodoWrapper = styled.div`
    color: #fff;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid ${ ({theme}) => theme.colors.primary};
`

export const TodoListContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid ${ ({theme}) => theme.colors.primary};
`

export const TodoInputStyled = styled.input`

    all: unset;
    padding: 10px 20px;
    background: transparent;
    text-align: left;
    caret-color: inherit;
    color: ${ ({theme}) => theme.colors.primary};
    font-weight: 600;
  
`