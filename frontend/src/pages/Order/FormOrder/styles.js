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
  min-height: 224px;
  /* height: 100%; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  label {
    align-self: flex-start;
    color: #444;
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
    margin-top: -4px;

    &::placeholder {
      color: #666;
      opacity: 0.7;
    }
  }

  span {
    color: #de3b3b;
    align-self: flex-start;
    font-weight: bold;
    margin: 0;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 8px;

  div {
    width: 350px;

    label {
      align-self: flex-start;
      color: #444;
      font-weight: bold;
      margin-bottom: 9px;
    }

    input {
      width: 100%;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      letter-spacing: 0px;
      margin: 8px 0 15px;

      &::placeholder {
        color: #666;
        opacity: 0.7;
      }
    }

    span {
      color: #de3b3b;
      align-self: flex-start;
      font-weight: bold;
      margin: 0 0 10px;
    }
  }
`;
