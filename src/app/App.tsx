import { Container, CustomSelectMUI } from '../shared';

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
      <CustomSelectMUI/>
    </Container>
  );
};

export default App;
