import styled from "styled-components";

export const FlexColumn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const FlexRow = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;

        
    @media screen and (min-width: 320px) and (max-width: ${({theme}) => theme.media.mobile}){
        width: 100%;
        border-radius: 10px;
        gap: 0;
      }
`