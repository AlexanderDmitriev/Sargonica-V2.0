import { Container, CustomSwitcher,CustomSwitcher2 } from '../shared';

const App = () => {

  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <CustomSwitcher/>
      <CustomSwitcher2/>
    </Container>
  );
};

export default App;
