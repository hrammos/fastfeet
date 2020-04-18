import styled from 'styled-components';

export const Container = styled.div`
  width: 20px;
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: none;
`;

export const ActionsList = styled.aside`
  display: flex;
  position: absolute;
  width: 150px;
  padding: 8px;
  left: calc(50% - 75px);
  top: calc(100% + 5px);
  background: #ffffff;
  border: 1px solid #00000026;
  border-radius: 4px;
  z-index: 1;
  box-shadow: 0 0 2px #00000026;

  display: ${(props) => (props.visible ? 'block' : 'none')};
  /* border: 1px solid #eee; */
  z-index: 5;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
  }
  &::before {
    content: '';
    left: calc(50% - 11px);
    top: -11px;
    border-color: transparent transparent #00000026 transparent;
    border-width: 11px;
  }
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    line-height: 30px;
    padding: 2px 0;
    color: #999999;
    font-size: 16px;
    font-weight: normal;

    & + div {
      margin-top: 4px;
      border-top: 1px solid #00000026;
    }

    &:hover {
      color: red;
    }

    svg {
      margin-right: 14px;
    }
  }
`;

export const ActionButton = styled.div`
  button {
    margin-top: 0;

    border: 1px solid red;
    width: 150px;
  }
`;
