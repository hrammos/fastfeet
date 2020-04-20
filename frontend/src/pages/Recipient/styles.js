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
    padding: 12px;

    img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
    }
  }
`;
