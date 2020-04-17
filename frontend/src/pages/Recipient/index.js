import React, { useState, useEffect } from 'react';

import { MdAdd } from 'react-icons/md';

import api from '~/services/api';

import { Container, RecordTable } from './styles';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');

      const data = response.data.map((recipient) => ({
        ...recipient,
      }));

      setRecipients(data);
    }

    loadRecipients();
  }, []);

  return (
    <Container>
      {/* Este vai ser o HeaderList: title, link */}
      <header>
        <h1>Gerenciando destinatários</h1>
        <div>
          <input type="text" placeholder="Buscar por destinatários" />
          <button type="button">
            <MdAdd size={16} />
            CADASTRAR
          </button>
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
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </RecordTable>
    </Container>
  );
}
