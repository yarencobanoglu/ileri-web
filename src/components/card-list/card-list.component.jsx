import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

class CardList extends Component {
  render() {
    const { makeups } = this.props;
    return (
      <div className='card-list'>
        {
          makeups.map((makeup) => {
            const {id} = makeup;
            return (
              <Card makeup={makeup} key={id}/>
            )
          })
        }
      </div>
    );
  }
}

export default CardList;
