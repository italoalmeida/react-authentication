import React from 'react';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => console.log('authenticated');

  return (
    <>
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <input
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              ref={register({ required: 'E-mail is required' })}
            />
            {errors.email && (
              <p>
                <small>{errors.email.message}</small>
              </p>
            )}
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              ref={register({ required: 'Password is required' })}
            />
            {errors.password && (
              <p>
                <small>{errors.password.message}</small>
              </p>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                cursor: 'pointer',
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
