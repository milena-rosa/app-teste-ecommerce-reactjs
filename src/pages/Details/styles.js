import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';

import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 20px;
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  margin-bottom: 50px;
`;

export const ShortDescription = styled.div`
  strong {
    color: rgba(0, 0, 0, 0.75);
    font-size: 24px;
    margin-bottom: 20px;
  }

  a {
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    margin-top: 20px;
    text-decoration: none;
  }
`;

export const CollapsedDescription = styled(LinesEllipsis)`
  margin: 15px 0 10px;
`;

export const Photo = styled.div``;
export const Thumbs = styled.div``;
export const Preview = styled.img`
  border-radius: 4px;
  height: 400px;
  width: 400px;
`;
export const BuyBox = styled.div``;

export const Price = styled.div`
  color: #211451;
  font-size: 30px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const BuyButton = styled.button`
  background: #e50044;
  border: 0;
  border-radius: 4px;
  color: #fff;
  margin-top: auto;
  overflow: hidden;
  padding: 12px;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.07, '#e50044')};
  }

  svg {
    margin-right: 5px;
  }

  span {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Features = styled.div`
  strong {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.div`
  margin-bottom: 30px;
  text-align: justify;
`;
export const Attributes = styled.ul`
  list-style: none;

  li {
    > strong {
      font-size: 14px;
      padding-right: 5px;
    }
  }
`;
