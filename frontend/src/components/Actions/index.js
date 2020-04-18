import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { MdMoreHoriz, MdDeleteForever, MdEdit } from 'react-icons/md';

import { Container, Badge, ActionsList, ActionButton } from './styles';

export default function Actions() {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggle}>
        <MdMoreHoriz size={18} color="#c6c6c6" />
      </Badge>

      <ActionsList visible={visible}>
        <ActionButton>
          <button type="button">
            <MdEdit />
            Editar
          </button>
        </ActionButton>
        <ActionButton>
          <button type="button">
            <MdDeleteForever />
            Excluir
          </button>
        </ActionButton>
      </ActionsList>
    </Container>
  );
}
