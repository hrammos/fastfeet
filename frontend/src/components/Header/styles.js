import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  }

  aside {
    div {
      text-align: center;
      margin-top: 2px;

      strong {
        display: block;
        color: #666;
      }

      button {
        border: 0;
        background: none;
        margin-top: 5px;
        color: #de3b3b;
      }
    }
  }
`;

export const NavItem = styled(NavLink).attrs({
  activeStyle: {
    color: '#444',
  },
})`
  font-size: 15px;
  font-weight: bold;
  color: #999;
  margin-right: 21px;
  transition: color 0.4s;

  &:hover {
    color: #444;
  }
`;
