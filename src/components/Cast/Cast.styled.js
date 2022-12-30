import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 20px 0;

  list-style: none;

  li {
    width: calc(100% / 6 - 10px);
  }
`;
