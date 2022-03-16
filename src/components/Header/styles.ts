import styled from 'styled-components';

export const Container = styled.header`
  padding: 1rem;
  height: 4rem;
  width: 100%;
  background: var(--yellow);

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    text-align: end;
  }
`;

export const BackArea  = styled.div`
  display: flex;
  align-items: center;
  
  img {
    cursor: pointer;
  }
  
  span {
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
`;

