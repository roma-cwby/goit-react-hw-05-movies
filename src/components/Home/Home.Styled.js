import styled from 'styled-components';

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;

  li {
    width: calc(100% / 5 - 20px);
    cursor: pointer;

    img {
      transition: transform 200ms linear;
    }

    &:hover img,
    &:focus img {
      transform: translate(0, -15px);
    }
  }
`;
