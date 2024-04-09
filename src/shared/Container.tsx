import styled from '@emotion/styled';
import back1 from '../images/Background1.svg';
import back2 from '../images/Background2.svg';
import back3 from '../images/Group29.svg';
import back4 from '../images/Background3.svg';

const TempContainer = styled.div`
  width: 100vw;
  padding: 60px;
  background-color: #FBFCFE;
`;

const Back1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  @media screen and (min-width: 480px) {
    right: 0;
    left: auto;
  }
`;
const Back2 = styled.img`
  position: absolute;
  right: 0;
  top: 436px;
`;
const Back3 = styled.img`
  position: absolute;
  left: 0;
  top: 636px;
`;
const Back4 = styled.img`
  position: absolute;
  left: 0;
  top: 1240px;
`;


export const Container = ({ children }: React.PropsWithChildren<any>) => {
  return (
    <TempContainer>
      <Back1 src={String(back1)}></Back1>
      <Back2 src={String(back2)}></Back2>
      <Back3 src={String(back3)}></Back3>
      <Back4 src={String(back4)}></Back4>
      {children}
    </TempContainer>
  );
};
