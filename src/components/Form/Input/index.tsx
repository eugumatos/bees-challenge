import { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { Container, Content, FormErrorMessage } from './styles'; 

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, error, ...rest }: InputProps, ref) => {
  return (
    <Container>
      <Content isErrored={!!error}>
        <input 
          ref={ref} 
          name={name} 
          {...rest} 
        />
      </Content>
      { !!error &&
        <FormErrorMessage>{error.message}</FormErrorMessage>
      }
    </Container>
  );
}

export const Input = forwardRef(InputBase);