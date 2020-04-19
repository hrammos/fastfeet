import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, ActionsList, ActionButton } from './styles';

export default function Actions({ children }) {
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
        <ActionButton>{children}</ActionButton>
      </ActionsList>
    </Container>
  );
}

Actions.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
