import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,  
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 22rem;
  position: relative;
  padding: 1rem 1.8rem 1rem 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  background: var(--blue-100);
  color: var(--blue-300);
 
  & + div {
    margin-top: 1rem;
  }

  ${(props) => toastTypeVariations[props.type] || 'info' }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
  }

  strong {
    font-size: 0.9rem;
  }

  p {
    margin-top: 4px;
    font-size: 0.8rem;
    opacity: 0.8;
    line-height: 1.2rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 1.1rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;