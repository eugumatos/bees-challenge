import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Container } from './styles'; 

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: string;
  size?: string;
} 

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