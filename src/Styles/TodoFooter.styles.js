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

  @media screen and (min-width: 320px) and (max-width: ${({theme}) => theme.media.mobile}){
    gap: 1.1rem;
    }
`

export const TodoStatusInfo = styled.div`

    flex: 1;
    color: ${ ({theme}) => theme.colors.text};
    font-size: 0.9rem;

    .todo_count{
        font-size: 1.3rem;
        color: ${ ({theme}) => theme.colors.primary};
    }

    @media screen and (min-width: 320px) and (max-width: ${({theme}) => theme.media.mobile}){
        font-size: 0.8rem;
    }
`