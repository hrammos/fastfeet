/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Buttons, Card, SelectContainer } from './styles';

export default function FormOrder({ isUpdate }) {
  const location = useLocation();
  const id = location.state ? location.state.id : null;

  if (id) {
    isUpdate = true;
  }

  if (isUpdate && !location.state) {
    history.goBack();
  }

  const [initialData, setInitialData] = useState();

  useEffect(() => {
    async function loadPackages() {
      if (isUpdate) {
        const response = await api.get(`orders/${id}`);

        setInitialData({
          recipient_id: response.data.recipient.id,
          deliveryman_id: response.data.deliveryman.id,
          product: response.data.product,
        });
      } else {
        setInitialData(true);
      }
    }

    loadPackages();
  }, [id, isUpdate]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        product: Yup.string().required('Informe o produto'),
        recipient_id: Yup.number().required('O destinatário é obrigatório.'),
        deliveryman_id: Yup.number().required('O entregador é obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { product, recipient_id, deliveryman_id } = data;

      if (isUpdate) {
        await api.put(`orders/${id}`, {
          product,
          recipient_id,
          deliveryman_id,
        });

        toast.success('Encomenda atualizado com sucesso!');
      } else {
        await api.post('orders', {
          product,
          recipient_id,
          deliveryman_id,
        });

        toast.success('Encomenda cadastrado com sucesso!');

        history.push('/orders');
      }
    } catch (error) {
      toast.error('Não foi possível efetuar esta operação.');
    }
  }

  return (
    <Container>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <header>
          {isUpdate ? (
            <h1> Edição de encomendas </h1>
          ) : (
            <h1>Cadastro de encomendas</h1>
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
          <SelectContainer>
            <div>
              <label forName="recipient_id">Destinatário</label>
              <Input
                id="recipient_id"
                name="recipient_id"
                type="number"
                placeholder="Ludmila Beethoven"
              />
            </div>

            <div>
              <label htmlFor="deliveryman_id">Entregador</label>
              <Input
                id="deliveryman_id"
                name="deliveryman_id"
                type="number"
                placeholder="Jhoe Doe"
              />
            </div>
          </SelectContainer>

          <label htmlFor="product">Nome do produto</label>
          <Input
            name="product"
            id="product"
            placeholder="Informe o produto"
            autoComplete="off"
          />
        </Card>
      </Form>
    </Container>
  );
}

FormOrder.propTypes = {
  isUpdate: PropTypes.bool,
};

FormOrder.defaultProps = {
  isUpdate: false,
};
