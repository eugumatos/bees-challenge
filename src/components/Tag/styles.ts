import styled, { css } from 'styled-components';

type ContainerProps = {
  icon: 'chart' | 'location' | 'phone' | 'plus' | 'check';
}

export const Container = styled.div<ContainerProps>`
  margin: 5px 10px 20px 0;
  padding: 5px 2rem 5px 5px;
  background: var(--yellow);
  border-radius: 1rem;
  
  display: flex;
  align-items: center;

  img {
    height: 20px;
    width: 23px;

    ${(props) => props.icon === "plus" && css`
      cursor: pointer;
    `}
  }

  input {
    max-width: 6rem;
    outline: none;
  }

  span {
    margin-left: 0.2rem;
  }
`;