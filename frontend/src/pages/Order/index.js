import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdAdd, MdSearch } from 'react-icons/md';

import Actions from '~/components/Actions';
// import Pagination from '~/components/Pagination';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Search, RecordTable } from './styles';

export default function Order() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  const [orders, setOrders] = useState([]);
  const [product, setProduct] = useState('');

  function goToEdition(id) {
    history.push({ pathname: `/orders/edit/${id}`, state: { id } });
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(`/orders?product=${product}`);

      const data = response.data.map((order) => ({
        ...order,
      }));

      const pageLimit = Math.ceil(response.headers['x-total-count'] / 5);

      setTotalPage(pageLimit);
      setOrders(data);
    }

    loadOrders();
  }, [product]);

  function paginate(_, newPage) {
    setPage(newPage);
  }

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
                <button type="button" onClick={() => goToEdition(order.id)}>
                  editar
                </button>
                <button type="button">visualizar</button>
                <button type="button">excluir</button>
                <Actions>
                  {/* <ActionButton>

                  </ActionButton> */}
                  <button type="button">editar</button>
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
