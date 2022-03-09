import styled from "styled-components";

export const StyledCartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;

  img{
    height: 150px;
    width: 150px;
    background-size: cover;
  }

  div{
    display: flex;
    gap: 24px;
    align-items: center;
  }

`