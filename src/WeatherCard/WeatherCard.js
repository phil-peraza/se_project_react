import './WeatherCard.css';

const weatherOptions = [
    {url: require('../images/Day/cloudyDay.svg').default, day: true, type: 'cloudy'},
    {url: require('../images/Day/foggyDay.svg').default, day: true, type: 'foggy'},
    {url: require('../images/Day/rainyDay.svg').default, day: true, type: 'rainy'},
    {url: require('../images/Day/snowyDay.svg').default, day: true, type: 'snowy'},
    {url: require('../images/Day/stormyDay.svg').default, day: true, type: 'stormy'},
    {url: require('../images/Day/sunnyDay.svg').default, day: true, type: 'sunny'},
    {url: require('../images/Night/cloudyNight.svg').default, day: false, type: 'cloudy'},
    {url: require('../images/Night/foggyNight.svg').default, day: false, type: 'foggy'},
    {url: require('../images/Night/rainyNight.svg').default, day: false, type: 'rainy'},
    {url: require('../images/Night/snowyNight.svg').default, day: false, type: 'snowy'},
    {url: require('../images/Night/stormyNight.svg').default, day: false, type: 'stormy'},
    {url: require('../images/Night/moonyNight.svg').default, day: false, type: 'moony'}
    
]

const WeatherCard = ({ day, type, weatherTemp = '' }) => {
    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type;
    });

    const imageSrcUrl = imageSrc[0].url || '';
    return (
        <section className='weather' id='weather'>
        <div className='weather__temp'>{weatherTemp} F</div>
        <img src={imageSrcUrl} className='weather__image'/>
      </section>
    )
}

export default WeatherCard;