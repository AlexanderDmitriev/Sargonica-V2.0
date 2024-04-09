import styled from '@emotion/styled';
import Select from 'react-select';

export const CustomSelect = styled(Select)`
  width: 57px;

  .css-13cymwt-control,
  .css-t3ipsp-control {
    border: none;
    font-family: Inter serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    align-items: center;
    color: #191924;
    background-color: #FBFCFE;
    cursor: pointer;
  }
  .css-1u9des2-indicatorSeparator {
    width: 0;
  }
  .css-1jqq78o-placeholder {
    color: #191924;
  }
  .css-1xc3v61-indicatorContainer,
  .css-15lsz6c-indicatorContainer {
    color: #191924;
    padding: 0;
  }
  .css-1fdsijx-ValueContainer {
    padding: 0;
  }
  .css-1dimb5e-singleValue {
    color: #191924;
  }
  .css-1nmdiq5-menu {
    color: #191924;
    background-color: #FBFCFE;
  }
`;

//*************TEST************////////
/* const options = [
    { value: 'ua', label: 'UA' },
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' },

<CustomSelect options={options} placeholder={`UA`} />
 */