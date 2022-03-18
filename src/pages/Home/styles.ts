import styled from 'styled-components';

export const Container = styled.main`
  display flex;
  flex-direction: column;
  align-items: center; 

  background: var(--background);
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem 6rem;

  display flex;
  justify-content: flex-start;
  align-items: center; 
  flex-wrap: wrap;

  & > div {
    margin: 1rem;
  }

  @media (max-width: 1480px) {
    padding: 2rem;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const CardContent = styled.div`
  position: relative;
  padding: 1rem;
  flex: 1;

  & > div {
    margin-top: 1rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    background: transparent;
    border: none;
  }
`;

export const ContainerTag = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  button + button {
    margin-left: 0.8rem;
  }
`;