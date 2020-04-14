import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  box-shadow: 0px 0px 10px #0003;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  padding: 60px 0px;
  /*
  img {
    margin-top: 60px;
  } */

  form {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin-top: 40px;

    label {
      align-self: flex-start;
      color: #444;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 9px;
    }

    input {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      letter-spacing: 0px;

      margin: 0 0 15px;

      &::placeholder {
        color: #999;
        opacity: 0.7;
      }
    }

    span {
      color: #de3b3b;
      align-self: flex-start;
      font-weight: bold;
      margin: 0 0 10px;
    }

    button {
      height: 45px;
      background: #7d40e7;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
    }
  }
`;
