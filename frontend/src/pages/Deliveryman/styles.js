import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 28px auto;

  div {
    margin-top: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 237px;
      height: 36px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      height: 36px;
      padding: 0 20px;
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
  }
`;
