import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  height: 100%;
  margin: 0px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
      margin-top: 28px;
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;

  button {
    height: 36px;
    padding: 0 18px;
    background: #ccc;
    border-radius: 4px;
    color: #fff;
    border: 0;

    display: flex;
    align-items: center;

    & + button {
      margin-left: 16px;
      background: #7d40e7;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  width: 100%;
  height: 224px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 0 30px;

  div {
    width: 350px;
    label {
      color: red;
    }

    input {
      width: 100%;
    }
  }
`;
