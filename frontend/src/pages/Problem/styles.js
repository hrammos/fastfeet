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

export const Modal = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6) 0% 0% no-repeat padding-box;
  align-items: center;
  justify-content: center;
  div {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    max-width: 450px;
    width: 100%;
    max-height: 353px;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 14px;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      text-transform: uppercase;
      button {
        background: none;
        border: 0;
        color: #999;
      }
    }
    strong {
      color: #444;
      margin-bottom: 4px;
      span {
        font-weight: normal;
      }
    }
    span {
      color: #666;
      margin-bottom: 4px;
    }
    img {
      margin-top: 30px;
      padding: 0 50px;
    }
    hr {
      margin: 12px 0;
      border: none;
      height: 1px;
      background: #eeeeee;
    }
  }
`;
