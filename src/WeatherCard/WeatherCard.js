const weatherOptions = [
    {url: '/images/Day/cloudyDay.svg', day: true, type: 'cloudy'},
    {url: '/images/Day/foggyDay.svg', day: true, type: 'foggy'},
    {url: '/images/Day/rainyDay.svg', day: true, type: 'rainy'},
    {url: '/images/Day/snowyDay.svg', day: true, type: 'snowy'},
    {url: '/images/Day/stormyDay.svg', day: true, type: 'stormy'},
    {url: '/images/Day/sunnyDay.svg', day: true, type: 'sunny'},
    {url: '/images/Night/cloudyNight.svg', day: false, type: 'cloudy'},
    {url: '/images/Night/foggyNight.svg', day: false, type: 'foggy'},
    {url: '/images/Night/rainyNight.svg', day: false, type: 'rainy'},
    {url: '/images/Night/snowyNight.svg', day: false, type: 'snowy'},
    {url: '/images/Night/stormyNight.svg', day: false, type: 'stormy'},
    {url: '/images/Night/moonyNight.svg', day: false, type: 'moony'}
    
]

const WeatherCard = ({ day, type }) => {
    console.log('Weather Card')
    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type;
    });

    const imageSrcUrl = imageSrc[0].url || '';
    return (
        <section className='weather' id='weather'>
        <div className='weather__temp'>69F</div>
        <img src={imageSrcUrl} className='weather__image'/>
      </section>
    )
}

export default WeatherCard;