import { InputHTMLAttributes } from 'react';
import { Container } from './styles'; 

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  return (
    <Container>
      <input name={name} {...rest} />
    </Container>
  );
}