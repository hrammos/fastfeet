import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #ddd;
      background: #eee;
    }

    div {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #ddd;
      background: #fff;
      padding: 40px 20px;

      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }

      p {
        color: #ddd;
      }
    }

    input {
      display: none;
    }
  }
`;
