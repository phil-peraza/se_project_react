import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <div>
    <Header />
    <main>
      <section className='weather' id='weather'>
        <div>75F</div>
        <div><img src='./images/night/cloudyNight.svg' alt='Night'/></div>
      </section>
      <section id='cards'>
        Cards Section
      </section>
    </main>
    </div>
  );
}

export default App;
