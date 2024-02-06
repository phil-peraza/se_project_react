import './App.css';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';

function App() {
  return (
    <div>
    <Header />
    <main className='main'>
      <WeatherCard day={false} type='moony' />
      <section id='cards'>
        Cards Section
      </section>
    </main>
    </div>
  );
}

export default App;
