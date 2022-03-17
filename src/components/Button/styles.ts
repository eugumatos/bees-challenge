import styled  from 'styled-components';
import { shade } from 'polished';

import { ButtonProps } from './';

export const Container = styled.button<ButtonProps>`
  padding: 0.9rem;
  border: 0;
  border-radius: 0.4rem;
  color: var(--white);
  background: var(--iris-100);
  transition: background-color 0.2s;

  &:disabled {
    background: var(--gray-600);
    opacity: inherit;
  }

  &:hover, &:active {
    &:not([disabled]) {
      background: ${shade(0.2, '#5D5FEF')};
    }
  }
`;