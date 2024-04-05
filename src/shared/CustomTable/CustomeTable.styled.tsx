import styled from 'styled-components';

export const Table = styled.table`
  width: 80vw;
  margin: 10px;
  box-shadow: 2px 2px 8px 1px #418b77;
`;

export const CaptionTable = styled.caption`
  padding: 4px;
  font-family: Inter serif;
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

export const Thead = styled.thead`
  font-family: Inter serif;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 53px */
  color: rgb(25, 25, 36);
  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 38px;
  }
`;

export const TableBody = styled.tbody`
  font-family: Inter serif;
  font-size: 14px;
  line-height: 110%;
  /* identical to box height, or 53px */
  color: rgb(25, 25, 36);
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
  tr:nth-child(2n) {
    background-color: #79cdb8;
  }
`;

export const HeaderSell = styled.th`
  padding: 4px 8px;
  text-align: center;
`;

export const DataSell = styled.td`
  padding: 2px 4px;
`;
