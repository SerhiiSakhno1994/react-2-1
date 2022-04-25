import Counter from './components/Couner/Conter';
import Dropdown from './components/Dropdown/Dropdown';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      <Counter initialValue={10} />
      <Dropdown />
    </Container>
  );
}

export default App;
