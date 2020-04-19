import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';

import AvatarInput from '~/components/AvatarInput';

import { Container, Buttons, Card } from './styles';

export default function FormDeliveryman({ isUpdate }) {
  const location = useLocation();
  const id = location.state ? location.state.id : null;

  if (id) {
    isUpdate = true;
  }

  if (isUpdate && !location.state) {
    history.goBack();
  }

  async function handleSubmit(data) {
    const { name, email, avatar_id } = data;
    if (!isUpdate) {
      await api.post(`deliverymans`, {
        name,
        email,
        avatar_id,
      });
      history.push('/deliverymans');
    }

    await api.put(`deliverymans/${id}`, {
      name,
      email,
      avatar_id,
    });
    history.push('/deliverymans');
  }

  const [initialData, setInitialData] = useState();
  useEffect(() => {
    async function loadDeliveryman() {
      if (isUpdate) {
        const response = await api.get(`deliverymans/${id}`);
        setInitialData({
          name: response.data.name,
          email: response.data.email,
          avatar_id: response.data.avatar_id,
          avatar: response.data.avatar_id ? response.data.avatar.id : null,
        });
      } else {
        setInitialData(true);
      }
    }

    loadDeliveryman();
  }, [id, isUpdate]);

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    avatar_id: Yup.string().required('O avatar é obrigatório'),
  });

  return (
    <Container>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <header>
          {isUpdate ? (
            <h1>Edição de entregadores</h1>
          ) : (
            <h1>Cadastro de entregadores</h1>
          )}

          <Buttons>
            <button type="button" onClick={() => history.goBack()}>
              <MdChevronLeft size={20} />
              VOLTAR
            </button>
            <button type="submit">
              <MdCheck size={20} />
              SALVAR
            </button>
          </Buttons>
        </header>
        <Card>
          <AvatarInput disabled />

          <Input
            id="name"
            name="name"
            type="text"
            label="Nome"
            placeholder="Jhon Doe"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="example@email.com"
          />
        </Card>
      </Form>
    </Container>
  );
}

FormDeliveryman.propTypes = {
  isUpdate: PropTypes.bool,
};

FormDeliveryman.defaultProps = {
  isUpdate: false,
};
