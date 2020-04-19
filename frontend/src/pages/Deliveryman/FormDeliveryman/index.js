import React, { useState, useEffect } from 'react';
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

  async function handleSubmit(data) {}

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

  return (
    <Container>
      <Form initialData={initialData} onSubmit={handleSubmit}>
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
