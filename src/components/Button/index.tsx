import { ReactNode } from 'react';
import { Container } from './styles'; 

import { ButtonProps } from '../../types'

export function Button({ 
  variant,
  size,
  disabled, 
  children, 
  ...rest 
}: ButtonProps) {
  return (
    <Container 
      size={size}
      variant={variant}
      disabled={disabled} 
      {...rest}
    >
      {children}
    </Container>
  );
}