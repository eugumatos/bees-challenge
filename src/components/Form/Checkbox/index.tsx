import { Container } from './styles';

export function Checkbox({ label }: any) {
  return (
    <Container>
      <input id="check" type="checkbox" />
      <label htmlFor="check">{label}</label>
    </Container>
  )
}