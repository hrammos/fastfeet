/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch, MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Actions from '~/components/Actions';
import { Container, Search, RecordTable } from './styles';

export default function Deliveryman() {
  const [deliverymans, setDeliverymans] = useState([]);
  const [name, setName] = useState('');
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);

  function handleNavigateToEdition(id) {
    history.push({ pathname: `/deliverymans/edit/${id}`, state: { id } });
  }

  async function handleDelete(id) {
    const checkConfirm = confirm(
      'Deseja excluir permanentemente este entregador? '
    );

    if (checkConfirm) {
      await api.delete(`deliverymans/${id}`);

      setDeliverymans(
        deliverymans.filter((deliveryman) => deliveryman.id !== id)
      );
    }
  }

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get(`/deliverymans?name=${name}`);

      const data = response.data.map((deliveryman) => ({
        ...deliveryman,
      }));

      // const pageLimit = Math.ceil(response.headers['x-total-count'] / 5);

      // setTotalPage(pageLimit);
      setDeliverymans(data);
    }

    loadDeliverymans();
  }, [name]);

  // function paginate(_, newPage) {
  //   setPage(newPage);
  // }

  return (
    <Container>
      <header>
        <h1>Gerenciando entregadores</h1>
        <div>
          <Search>
            <MdSearch size={24} color="#999" />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Buscar por entregadores"
            />
          </Search>
          <Link to="/deliverymans/new">
            <MdAdd size={16} />
            CADASTRAR
          </Link>
        </div>
      </header>

      <RecordTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymans.map((deliveryman) => (
            <tr key={deliveryman.id}>
              {deliveryman.id <= 9 ? (
                <td>#0{deliveryman.id}</td>
              ) : (
                <td>#{deliveryman.id}</td>
              )}
              <td>
                {deliveryman.avatar !== null ? (
                  <img src={deliveryman.avatar.url} alt="Avatar" />
                ) : (
                  <img
                    src="https://api.adorable.io/avatars/285/abott@adorable.png"
                    alt="Avatar"
                  />
                )}
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <Actions>
                  <button
                    type="button"
                    onClick={() => handleNavigateToEdition(deliveryman.id)}
                  >
                    <MdEdit size={14} color="#4D85EE" />
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(deliveryman.id)}
                  >
                    <MdDeleteForever size={14} color="#DE3B3B" />
                    Deletar
                  </button>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </RecordTable>
    </Container>
  );
}
