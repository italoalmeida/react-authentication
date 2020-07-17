import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, FieldGroup, ButtonGroup } from './styles';
import Field from '../../components/Field';
import Button from '../../components/Button';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => console.log('authenticated');

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </Container>
  );
};

export default SignIn;
