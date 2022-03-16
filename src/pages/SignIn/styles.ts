import styled from 'styled-components';

import Logo from '../../assets/logo.svg';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--yellow);
`;

export const Content = styled.div`
  p {
    margin-right: 0.8rem;
  }

  p + p {
    margin-top: 0.8rem;
  }
`;

export const Form = styled.form`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  div + div {
    margin-top: 0.8rem;
  }

  button {
    margin-top: 1rem;
  }
`;

export const BeeLogo = styled.img.attrs({
  src: `${Logo}`
})`
  height: 10rem;
  width: 10rem;

  position: absolute;
  bottom: 0;
  left: 0;
`;
