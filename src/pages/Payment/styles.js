import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(255, 255, 255);
  border-radius: 4px;
  padding: 20px;

  h1 {
    color: #211451;
    text-transform: uppercase;
  }

  form {
    margin: 10px auto;

    div {
      display: flex;
      align-items: center;
      input[type="radio"] {
        margin: 5px;
      }
    }

    button {
      background: #211451;
      color: #fff;
      border: 0;
      border-radius: 4px;
      height: 45px;
      overflow: hidden;
      margin-top: 15px;
      width: 200px;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#211451')};
      }

      span {
        flex: 1;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;