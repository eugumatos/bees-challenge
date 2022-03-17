import styled, { css } from 'styled-components';

type ContentProps = {
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  
  border-radius: 0.4rem;
  border: 2px solid var(--gray-300);
  background: var(--white);
  padding: 0.8rem;
  width: 100%;
 
  ${props => 
    props.isErrored && css`
    border-color: var(--red-700);
  `}

  input {
    background: transparent;
    font-size: 0.9em;
    outline: none;
    border: 0;
    flex: 1;

    &&::placeholder {
      color: var(--gray-600);
    }
  }
`;

export const FormErrorMessage = styled.p`
  color: var(--red-700);
  margin: 5px;
  font-size: 0.9rem;
  text-align: start;
`;