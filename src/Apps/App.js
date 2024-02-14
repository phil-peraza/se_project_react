import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const weatherTemp = '69°F';

function App() {
  return (
    <div>
    <Header />
    <Main weatherTemp={ weatherTemp }/>
    <Footer />
    </div>
  );


}

export default App;
