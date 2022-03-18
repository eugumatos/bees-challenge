import { useHistory } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';
import { Checkbox } from '../../components/Form/Checkbox';
import { useUser } from '../../hooks/user';
import Logo from '../../assets/logo.svg';

import { Container, Content, Form } from './styles';

interface FormData {
  fullName: string;
  majority: boolean;
}

const validateSchema = yup.object().shape({
  fullName: yup.string().required('Name required!')
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  majority: yup.boolean().oneOf([true],'Majority required!')
});

export function SignIn() {
  const history = useHistory();
  
  const { newUser } = useUser();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: yupResolver(validateSchema),
    mode: "onChange"
  });

  const handleCreateSection: SubmitHandler<FormData> = (data) => {
    newUser(data.fullName);
    history.push('/home')
  }

  return (
    <Container>
      <Content>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>

        <Form onSubmit={handleSubmit(handleCreateSection)}>
          <Input 
            type="text" 
            placeholder="Full Name"
            error={errors.fullName}
            {...register("fullName")}
          />
          
          <Checkbox 
            label="Are you older than 18 years old?"
            {...register("majority")}
          />
          
          <Button disabled={!isValid}>Enter</Button>
        </Form>
      </Content>

      <img src={Logo} alt="logo" />
    </Container>
  );
}