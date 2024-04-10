import NativeSelect from '@mui/material/NativeSelect';
import styled from '@emotion/styled';

export const CustomNativeSelect = styled(NativeSelect)`
  color: rgb(25, 25, 36);
  font-family: Inter sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0px;
  text-align: left;
  &::before {
    border: none;
  }
`;
