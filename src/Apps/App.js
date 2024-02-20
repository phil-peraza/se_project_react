import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const weatherTemp = '69°F';

function App() {
  return (
    <div>
    <Header />
    <Main weatherTemp={ weatherTemp }/>
    <Footer />
    <ModalWithForm title='New Garment'>
      These are the children
    </ModalWithForm>
    </div>
  );
}

export default App;