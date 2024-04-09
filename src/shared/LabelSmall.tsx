import styled from '@emotion/styled';

export const LabelSmall = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  color: rgb(25, 25, 36);
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

/******TEST****** */
/* <LabelSmall>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odit?
  Laudantium dolor in harum corrupti. Dicta tenetur ratione molestias
  reiciendis!
</LabelSmall>; */
