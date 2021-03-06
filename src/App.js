import React from 'react';
import List from './Components/list.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
        lists: [
          {
            id: '1',
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
          },
          {
            id: '2',
            header: 'Second list',
            cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
          },
          {
            id: '3',
            header: 'Third list',
            cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
          },
          {
            id: '4',
            header: 'Fourth list',
            cardIds: [ 'l', 'm' ],
          },
        ],
        allCards: {
          'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
          'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
          'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
          'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
          'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
          'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
          'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
          'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
          'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
          'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
          'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
          'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
          'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
        }
      }
    }
 newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
  + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
      }
    }

  
omit = (obj, keyToOmit) => {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

  handleDelete = (id) => {
    console.log('Deleting now!');
    let newAllCards = this.omit(this.state.allCards, id);
 //   delete this.state.allCards[id];
    const newLists = this.state.lists.map(list => {
      let newIds = list.cardIds.filter((item) => item !== id );
      list.cardIds = newIds;
      return list;
    });

    this.setState( {
      lists: newLists,
      allCards: newAllCards
  }, () => {console.log(this.state)});
}

handleAdd = (id)=>{
  let newCard = this.newRandomCard();
  let newLists = this.state.lists.map((list)=>{//add to list
    if(list.id ===id){
      let newList = list;
      newList.cardIds = list.cardIds.concat(newCard.id);
      return newList;
    }
    else{
      return list;
    }
  });
  //add to dictionary
  let newAllCards = {...this.state.allCards};
    newAllCards[newCard.id] = newCard;
    this.setState({
      lists:newLists,
      allCards:newAllCards

  });

}

  render() {
    const arrLists = this.state.lists.map((item) =>
    <List 
      handleDelete={this.handleDelete}
      handleAdd = {this.handleAdd}
      key={item.id} 
      id={item.id}
      cardIds={item.cardIds} 
      header={item.header} 
      allCards={this.state.allCards} />)
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{arrLists}</div>
      </main>
  );
  }
}

export default App;
