import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, FieldGroup, ButtonGroup, HelperText } from './styles';
import Field from '../../components/Field';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../../components/Spinner';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const { loading, signIn } = useAuth();

  const onSubmit = (credentials: any) => signIn(credentials);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HelperText>Type anything in the fields bellow to sign in</HelperText>
        <FieldGroup>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            inputRef={register({ required: 'E-mail is required' })}
            error={errors.email}
          />
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            inputRef={register({ required: 'Password is required' })}
            error={errors.password}
          />
        </FieldGroup>
        <ButtonGroup>
          <Button>Sign In</Button>
        </ButtonGroup>
      </form>
      {loading && <Spinner />}
    </Container>
  );
};

export default SignIn;
