import styled from 'styled-components';

const Button = styled.button`
  background-color: #41ccd8;
  padding: 16px 32px;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  /* or 26px */
  display: block;
  max-width: 200px;
  margin: 0 auto;
  color: #fbfcfe;
  text-align: center;
  text-decoration: none;
  @media screen and (min-width: 480px) {
    max-width: 250px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    display: inline;
    font-size: 24px;
  }
  :hover {
    background-color: #95e2e9;
  }
`;

export default Button;
