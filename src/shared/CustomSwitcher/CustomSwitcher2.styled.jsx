import styled from 'styled-components';
import Switch from 'rc-switch';

export const OuterLine = styled(Switch)`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 20px 20px;
  border: 1px solid #ccc;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  overflow: hidden;
`;
