import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;

  h1 {
    margin-top: 28px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin-top: 34px;
      height: 36px;
      padding: 0 18px;
      background-color: #7d40e7;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;

      display: flex;
      align-items: center;
    }
  }
`;

export const Search = styled.div`
  margin-top: 34px;
  position: relative;
  top: 0;

  input {
    width: 237px;
    height: 36px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding-left: 40px;
  }

  svg {
    position: absolute;
    left: 12px;
  }
`;

export const RecordTable = styled.table`
  width: 100%;
  border-spacing: 0 18px;
  border-radius: 4px;

  thead th {
    color: #444;
    text-align: left;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
  }

  tbody {
    background: #fff;
  }

  tbody tr {
    height: 57px;
    border-radius: 50px;
    color: #666;
    font-size: 16px;
  }

  tbody td {
    border: none;
    padding: 0 25px;
    /* text-align: center; */

    /* svg {
      margin-left: 50px;
    } */
  }
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
