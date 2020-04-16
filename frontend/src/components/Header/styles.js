import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
    }

    a {
      color: #999;
      font-weight: bold;
      margin-right: 21px;
    }
  }

  aside {
    div {
      text-align: center;
      margin-top: 2px;

      strong {
        display: block;
        color: #666;
      }

      a {
        display: block;
        margin-top: 5px;
        color: #de3b3b;
      }
    }
  }
`;
