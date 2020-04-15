import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="Fastfeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Seu email"
          placeholder="exemplo@email.com"
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Sua senha"
          placeholder="******"
        />

        <button type="submit">
          {loading ? 'Carregando..' : 'Entrar no sistema'}
        </button>
      </Form>
    </Container>
  );
}
