/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../Hooks';
import { ErrorPopUp } from '../../Components/PopUp';
import Loader from '../../Components/Loader/Loader';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
});

const Login = () => {
  const [loader, setLoader] = React.useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signInUser } = useAuth();

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await signInUser(email, password);
      history.push('/');
    } catch (error: any) {
      setError('firebase', {
        type: 'manual',
        message: error.message,
      });
      console.error(error);
    } finally {
      setLoader(false);
    }
  };
  const onSubmit = handleSubmit((data) => {
    login({ email: data.email, password: data.password });
    setLoader(true);
  });
  return (
    <section id="login-page">
      <div className="login-page__wrapper">
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <label htmlFor="email">Email*</label>
          {errors.email && <ErrorPopUp>{errors.email?.message}</ErrorPopUp>}

          <input {...register('email')} type="email" placeholder="Email...." />

          <label htmlFor="password">Password*</label>

          {errors.password && errors.password?.message}

          <input
            {...register('password')}
            type="password"
            placeholder="Min. 8character"
            minLength={8}
          />

          <Link to="/forget-password" rel="noopener noreferrer">
            Forget password?
          </Link>

          {errors.firebase && (
            <ErrorPopUp>
              {errors.firebase && 'Email or Password are invalid'}
            </ErrorPopUp>
          )}

          <button type="submit" className={!loader ? '' : 'loadState'}>
            {!loader ? 'Login' : <Loader />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
