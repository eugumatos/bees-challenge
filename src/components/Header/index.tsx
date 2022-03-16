import { useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import ArrowCircleLeft from '../../assets/icons/arrow-circle-left.svg';
import { Container, BackArea } from './styles';

export function Header() {
  const history = useHistory();

  const { user, removeUser } = useUser();

  const backHome = () => {
    removeUser();
    history.push('/');
  }

  return (
    <Container>
      <BackArea>
        <img 
          src={ArrowCircleLeft} 
          alt="arrow-circle-left"
          onClick={backHome} 
        />
        <span>Go Back</span>
      </BackArea>

      <h2>{user}</h2>
    </Container>
  );
}

