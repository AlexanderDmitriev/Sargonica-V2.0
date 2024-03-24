import styled from 'styled-components';

export const LabelLarge = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 53px */
  color: rgb(25, 25, 36);
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
`;

/******TEST****** */
/* <LabelSmall>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odit?
</LabelSmall>; */