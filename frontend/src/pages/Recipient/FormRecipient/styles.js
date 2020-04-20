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
  padding: 30px;
  background: #fff;
  width: 100%;
  height: 300px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

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
    height: 45px !important;
    padding: 0 15px;
    letter-spacing: 0px;

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
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  div {
    width: 520px;

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
export const SecondContainer = styled.div`
  padding-left: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 180px;

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

export const ThirdContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 30px;

  div {
    width: 260px;

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
