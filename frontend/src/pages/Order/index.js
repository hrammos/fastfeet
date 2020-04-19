/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  MdAdd,
  MdSearch,
  MdEdit,
  MdDeleteForever,
  MdRemoveRedEye,
} from 'react-icons/md';

import Actions from '~/components/Actions';
// import Pagination from '~/components/Pagination';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Search, RecordTable } from './styles';

export default function Order() {
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPage] = useState(0);
  const [orders, setOrders] = useState([]);
  const [product, setProduct] = useState('');

  function handleNavigateToEdition(id) {
    history.push({ pathname: `/orders/edit/${id}`, state: { id } });
  }

  async function handleDelete(id) {
    const checkConfirm = confirm(
      'Deseja excluir permanentemente esta encomenda? '
    );

    if (checkConfirm) {
      await api.delete(`orders/${id}`);

      setOrders(orders.filter((order) => order.id !== id));
    }
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(`/orders?product=${product}`);

      const data = response.data.map((order) => ({
        ...order,
      }));

      // const pageLimit = Math.ceil(response.headers['x-total-count'] / 5);

      // setTotalPage(pageLimit);
      setOrders(data);
    }

    loadOrders();
  }, [product]);

  // function paginate(_, newPage) {
  //   setPage(newPage);
  // }

  return (
    <Container>
      <header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <Search>
            <MdSearch size={24} color="#999" />
            <input
              onChange={(e) => setProduct(e.target.value)}
              type="text"
              placeholder="Buscar por encomendas"
            />
          </Search>
          <Link to="/orders/new">
            <MdAdd size={16} />
            CADASTRAR
          </Link>
        </div>
      </header>

      <RecordTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              {order.id <= 9 ? <td>#0{order.id}</td> : <td>#{order.id}</td>}
              <td>{order.recipient.name}</td>
              <td>{order.deliveryman.name}</td>
              <td>{order.recipient.city}</td>
              <td>{order.recipient.state}</td>
              <td>PENDENTE</td>
              <td>
                <Actions>
                  <button type="button">
                    <MdRemoveRedEye size={14} color="#8E5BE8" />
                    Visualizar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigateToEdition(order.id)}
                  >
                    <MdEdit size={14} color="#4D85EE" />
                    Editar
                  </button>
                  <button type="button" onClick={() => handleDelete(order.id)}>
                    <MdDeleteForever size={14} color="#DE3B3B" />
                    Deletar
                  </button>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </RecordTable>
      {/* <Pagination
        count={totalPages}
        page={page}
        onChange={paginate}
        variant="outlined"
        shape="rounded"
      /> */}
    </Container>
  );
}
