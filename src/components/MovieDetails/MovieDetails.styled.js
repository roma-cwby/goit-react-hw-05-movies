import styled from 'styled-components';

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid black;
  padding: 20px 0;

  img {
    margin-right: 20px;
  }

  div {
    width: 50%;

    h2,
    h3 {
      margin-bottom: 20px;
    }

    p:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }
`;

export const MoreInfo = styled.div`
  border-bottom: 1px solid black;

  a {
    display: block;
  }
`;
