import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <div>
    <Header />
    <main className='main'>
      <section className='weather' id='weather'>
        <div className='weather__temp'>75F</div>
        <img src='./images/night/cloudyNight.svg' className='weather__image'/>
      </section>
      <section id='cards'>
        Cards Section
      </section>
    </main>
    </div>
  );
}

export default App;
