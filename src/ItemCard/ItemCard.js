import './ItemCard.css';

const ItemCard = ( {x, onSelectCard} ) => {
    return (
    <div>
      <div>
        <img 
        className='card_image'
        src={ x.link }
        onClick={() => onSelectCard(x)}
        />
      </div>
      <div className='card_name'>{ x.name }</div>
    </div>
    );
  }

  export default ItemCard;