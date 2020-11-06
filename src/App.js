import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "food": "please select a food",
      "book": "please select a book",
      "activity": "please select an activity",
      "show": "please select a show"
    };
  }

  chooseFood = (chosenFood) => {
    this.setState(state => {
      state.food = chosenFood
      return state
    })
  }

  makeChoice = (type, choice) => {
    this.setState(state => {
      state[type] = choice
      return state
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard book={this.state.book} food={this.state.food} activity={this.state.activity} show={this.state.show} />
        <div className="card-container">
          <Card category="food" title="Okonomiyaki" makeChoice={this.makeChoice} />
          <Card category="food" title="French Onion Soup" makeChoice={this.makeChoice}/>
          <Card category="book" title="Magic For Liars" makeChoice={this.makeChoice}/>
        </div>

      </div>
    );
  }
  
}

export default App;
