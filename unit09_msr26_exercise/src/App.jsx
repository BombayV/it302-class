import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavigationBar from './components/MyNavigationBar';
import Container from 'react-bootstrap/Container';
import CheckOutForm from './components/CheckOutForm';

const App = () => {
  return (
    <div>
      <MyNavigationBar />
      <Container>
        <CheckOutForm />
      </Container>
    </div>
  );
};

export default App;
