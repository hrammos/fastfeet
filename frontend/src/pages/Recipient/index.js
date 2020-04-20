/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdAdd, MdSearch, MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Actions from '~/components/Actions';
import Pagination from '~/components/Pagination';

import { Container, RecordTable, Search } from './styles';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get(`/recipients?name=${name}&page=${page}`);

      const data = response.data.map((recipient) => ({
        ...recipient,
      }));

      const pageLimit = Math.ceil(response.headers['x-total-count'] / 5);

      setTotalPage(pageLimit);
      setRecipients(data);
    }

    loadRecipients();
  }, [page, name]);

  function handleNavigateToEdition(id) {
    history.push({ pathname: `/recipients/edit/${id}`, state: { id } });
  }

  async function handleDelete(id) {
    const checkConfirm = confirm(
      'Deseja excluir permanentemente este destinatário? '
    );

    if (checkConfirm) {
      await api.delete(`recipients/${id}`);

      setRecipients(recipients.filter((recipient) => recipient.id !== id));
    }
  }

  function handlePaginate(_, newPage) {
    setPage(newPage);
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando destinatários</h1>
        <div>
          <Search>
            <MdSearch size={24} color="#999" />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Buscar por destinatários"
            />
          </Search>
          <Link to="/recipients/new">
            <MdAdd size={16} />
            CADASTRAR
          </Link>
        </div>
      </header>

      <RecordTable>
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Endereços</th>
          <th>Ações</th>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <tr key={recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>{recipient.city}</td>
              <td>
                <Actions>
                  <button
                    type="button"
                    onClick={() => handleNavigateToEdition(recipient.id)}
                  >
                    <MdEdit size={14} color="#4D85EE" />
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(recipient.id)}
                  >
                    <MdDeleteForever size={14} color="#DE3B3B" />
                    Deletar
                  </button>
                </Actions>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </RecordTable>
      <Pagination count={totalPages} page={page} onChange={handlePaginate} />
    </Container>
  );
}
