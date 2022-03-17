import styled from 'styled-components';

export const Container = styled.main`
  display flex;
  flex-direction: column;
  align-items: center; 

  background: var(--background);
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 80vh;
  padding: 2rem 6rem;

  display flex;
  justify-content: center;
  align-items: center; 
  flex-wrap: wrap;

  & > div {
    margin: 1rem;
  }

  @media (max-width: 840px) {
    padding: 2rem;
    justify-content: center;
  }
`;

export const CardContent = styled.div`
  position: relative;
  padding: 1rem;

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

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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