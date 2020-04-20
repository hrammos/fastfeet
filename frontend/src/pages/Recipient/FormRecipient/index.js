import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Buttons,
  Card,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from './styles';

export default function FormRecipient({ isUpdate }) {
  const location = useLocation();
  const id = location.state ? location.state.id : null;

  if (id) {
    isUpdate = true;
  }

  if (isUpdate && !location.state) {
    history.goBack();
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    street: Yup.string().required('A rua é obrigatória.'),
    number: Yup.string().required('O número é obrigatório.'),
    complement: Yup.string(),
    state: Yup.string().required('O estado é obrigatório.'),
    city: Yup.string().required('A cidade é obrigatória.'),
    cep: Yup.string().required('O CEP é obrigatório.'),
  });

  async function handleSubmit(data) {
    const { name, street, number, complement, state, city, cep } = data;

    try {
      if (!isUpdate) {
        await api.post(`recipients`, {
          name,
          street,
          number,
          complement,
          state,
          city,
          cep,
        });
        history.push('/recipients');

        toast.success('Destinatário cadastrado com sucesso!');
      }

      await api.put(`recipients/${id}`, {
        name,
        street,
        number,
        complement,
        state,
        city,
        cep,
      });
      history.push('/recipients');

      toast.success('Destinatário alterado com sucesso!');
    } catch (error) {
      toast.error('Não foi possível efetuar esta operação.');
    }
  }

  const [initialData, setInitialData] = useState();
  useEffect(() => {
    async function loadDeliveryman() {
      if (isUpdate) {
        const response = await api.get(`recipients/${id}`);
        setInitialData({
          name: response.data.name,
          street: response.data.street,
          number: response.data.number,
          complement: response.data.complement,
          state: response.data.state,
          city: response.data.city,
          cep: response.data.cep,
        });
      } else {
        setInitialData(true);
      }
    }

    loadDeliveryman();
  }, [id, isUpdate]);

  return (
    <Container>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <header>
          {isUpdate ? (
            <h1>Edição de destinatários</h1>
          ) : (
            <h1>Cadastro de destinatários</h1>
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
          <Input
            id="name"
            name="name"
            type="text"
            label="Nome"
            placeholder="Jhon Doe"
          />
          <FirstContainer>
            <div>
              <Input
                id="street"
                name="street"
                type="text"
                label="Rua"
                placeholder="Rua José Bonifácio"
              />
            </div>

            <SecondContainer>
              <div>
                <Input
                  id="number"
                  name="number"
                  type="text"
                  label="Número"
                  placeholder="186"
                />
              </div>

              <div>
                <Input
                  id="complement"
                  name="complement"
                  type="text"
                  label="Complemento"
                  placeholder="Casa"
                />
              </div>
            </SecondContainer>
          </FirstContainer>
          <ThirdContainer>
            <div>
              <Input
                id="city"
                name="city"
                type="text"
                label="Cidade"
                placeholder="Alvorada"
              />
            </div>
            <div>
              <Input
                id="state"
                name="state"
                type="text"
                label="Estado"
                placeholder="RS"
              />
            </div>
            <div>
              <Input
                id="cep"
                name="cep"
                type="text"
                label="CEP"
                placeholder="94.814-330"
              />
            </div>
          </ThirdContainer>
        </Card>
      </Form>
    </Container>
  );
}

FormRecipient.propTypes = {
  isUpdate: PropTypes.bool,
};

FormRecipient.defaultProps = {
  isUpdate: false,
};
