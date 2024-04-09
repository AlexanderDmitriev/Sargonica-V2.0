import styled from '@emotion/styled';

export const Photo = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    max-width: 50%;
  }
`;

/****TEST**** */
// <Photo src={'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'} />;
