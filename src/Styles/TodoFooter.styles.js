import styled from "styled-components";

export const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
    margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${ ({theme}) => theme.colors.primary};
`

export const TodoStatusInfo = styled.div`

    flex: 1;
    color: ${ ({theme}) => theme.colors.text};
    font-size: 0.9rem;

    .todo_count{
        font-size: 1.3rem;
        color: ${ ({theme}) => theme.colors.primary};
    }


`