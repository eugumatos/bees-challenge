import { useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/user';
import ArrowCircleLeft from '../../assets/icons/arrow-circle-left.svg';
import { Container, BackArea } from './styles';

export function Header() {
  const history = useHistory();

  const { user, removeUser } = useUser();

  const goBack = () => {
    removeUser();
    history.push('/')
  }

  return (
    <Container>
      <BackArea>
        <img 
          src={ArrowCircleLeft} 
          alt="arrow-circle-left"
          onClick={goBack}
        />
        <span>Go Back</span>
      </BackArea>

      <h2>{user}</h2>
    </Container>
  );
}

