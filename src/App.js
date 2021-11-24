import React, {Component } from 'react';

import { CardList } from './components/card-list/card-list-component';

import { SearchBox } from './components/search-box/search-box-component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}


render() {
    const { monsters, searchField } = this.state;

    const onChange = (event) => {
      this.setState({searchField: event.target.value});
    }

    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <SearchBox handleChange={onChange} placeholder="search monsters" />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
