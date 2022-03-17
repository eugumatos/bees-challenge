import {  InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckboxBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, ...rest }: InputProps, ref) => {
  return (
    <Container>
      <input 
        id="check" 
        type="checkbox"
        ref={ref} 
        {...rest} 
      />
      <label htmlFor="check">{label}</label>
    </Container>
  );
}

export const Checkbox = forwardRef(CheckboxBase);