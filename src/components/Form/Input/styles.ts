import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 0.4rem;
  border: 2px solid var(--gray-300);
  background: #fff;
  padding: 0.8rem;
  width: 100%;
 
  input {
    background: transparent;
    font-size: 0.9em;
    outline: none;
    border: 0;
    flex: 1;

    &&::placeholder {
      color: #666360;
    }
  }
`;