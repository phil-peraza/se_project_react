import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';



const weatherTemp = '69°F';

function App() {
  return (
    <div>
    <Header />
    <Main weatherTemp={ weatherTemp }/>
    </div>
  );


}

export default App;
