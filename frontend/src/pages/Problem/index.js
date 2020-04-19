/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

import Actions from '~/components/Actions';
import Modal from '~/components/Modal';
import Pagination from '~/components/Pagination';

import api from '~/services/api';
// import history from '~/services/history';

import { Container, RecordTable } from './styles';

export default function Problem() {
  const [deliveriesProblems, setDeliveriesProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);

  useEffect(() => {
    async function loadDeliveriesProblems() {
      const response = await api.get(`/delivery/problems?page=${page}`);

      const data = response.data.map((problem) => ({
        ...problem,
      }));

      const pageLimit = Math.ceil(response.headers['x-total-count'] / 5);

      setTotalPage(pageLimit);
      setDeliveriesProblems(data);
    }

    loadDeliveriesProblems();
  }, [page]);

  async function handleCancel(id) {
    const checkConfirm = confirm(
      'Deseja cancelar esta entrega permanentemente? '
    );

    if (checkConfirm) {
      await api.delete(`/problem/${id}/cancel-delivery`);

      setDeliveriesProblems(
        deliveriesProblems.filter((problem) => problem.id !== id)
      );
    }
  }

  function handlePaginate(_, newPage) {
    setPage(newPage);
  }

  return (
    <Container>
      <header>
        <h1>Problemas na entrega</h1>
      </header>

      <RecordTable>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveriesProblems.map((problem) => (
            <tr key={problem.id}>
              {problem.delivery.id <= 9 ? (
                <td>#0{problem.delivery.id}</td>
              ) : (
                <td>#{problem.delivery.id}</td>
              )}

              <td>{problem.description}</td>
              <td>
                <Actions>
                  <Modal>
                    <h3>VISUALIZAR PROBLEMA</h3>
                    <p>{problem.description}</p>
                  </Modal>
                  <button
                    type="button"
                    onClick={() => handleCancel(problem.id)}
                  >
                    <MdDeleteForever size={14} color="#DE3B3B" />
                    Cancelar
                  </button>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </RecordTable>
      <Pagination count={totalPages} page={page} onChange={handlePaginate} />
    </Container>
  );
}
