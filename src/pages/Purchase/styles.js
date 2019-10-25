import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(255, 255, 255);
  border-radius: 4px;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;


  h1 {
    color: #211451;
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;
  }

  svg {
    margin: 50px;
  }
`;