import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet-logo.png';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function SignIn() {
  function handleSubmit(data) {}

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

        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
