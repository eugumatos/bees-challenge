import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';
import { Checkbox } from '../../components/Form/Checkbox';
import { useUser } from '../../hooks/useUser';

import { Container, Content, Form, BeeLogo } from './styles';

export function SignIn() {
  const history = useHistory();

  const [input, setInput] = useState<string>('');

  const { user, newUser } = useUser();

  const handleSubmit = () => {
    newUser(input);
    history.push('/home');
  };

  return (
    <Container>
      <Content>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>

        <Form>
          <Input 
            type="text" 
            name="fullName" 
            placeholder="Full Name"
            onChange={(e) => setInput(e.target.value)} 
          />
          
          <Checkbox label={"Are you older than 18 years old?"} />
          
          <Button  onClick={() => handleSubmit()}>Enter</Button>
        </Form>
      </Content>

      <BeeLogo />
    </Container>
  );
}