// src/App.js
import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import './App.css';
import SearchBox from '../components/SearchBox';
import { recipes } from '../recipes';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ recipes: recipes }); // Load recipes into state on mount
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { recipes, searchfield } = this.state;
    const filteredRecipes = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !recipes.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Recipe Finder</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <RecipeList recipes={filteredRecipes} />
        </div>
      );
  }
}

export default App;
