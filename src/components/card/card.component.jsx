import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
        const {name,description,image_link} = this.props.makeup;
        return (
            <div className='card-container'>
                <img src={image_link} alt={`makeup ${name}`} />
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

export default Card;