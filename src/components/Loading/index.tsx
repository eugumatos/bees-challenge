import { DotLoader } from 'react-spinners';
import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <DotLoader size={70} color="#5D5FEF" />
    </Container>
  );
}