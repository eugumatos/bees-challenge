import styled  from 'styled-components';

import { ButtonProps } from '../../types';

export const Container = styled.button<ButtonProps>`
  padding: 0.9rem;
  border: 0;
  border-radius: 0.4rem;
  color: var(--white);
  background: var(--gray-600);
`;