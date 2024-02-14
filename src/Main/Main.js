import { defaultClothingItems } from "../Utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import './Main.css';

function Main({ weatherTemp }) {
    return <main className='main'>
      <WeatherCard day={false} type='moony' weatherTemp={weatherTemp} />
      <section className='card_section' id='card-section'>
        Today is {weatherTemp} / You may want to wear:
        <div className='card_items'>
          {defaultClothingItems.map((x) => (
            <ItemCard x={x} />
          ))}
        </div>
      </section>
    </main>;
  }

  export default Main;