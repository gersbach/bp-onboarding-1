import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {

  
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  const _APPID = 'be2da03d';
  const _APPKEY = 'b6331672325a732aaf6c27af08f06c59';
  //const temp = `https://api.edamam.com/search?q=chicken&app_id=${_APPID}&app_key=${_APPKEY}`
  const temp = `https://api.edamam.com/search?q=${query}&app_id=be2da03d&app_key=b6331672325a732aaf6c27af08f06c59`

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    getRecipes()
  },[query])

  const getRecipes = async () => {
    const response = await fetch(temp);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  }


  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    
  }


  return (
    <>
      <div className='App'>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" value={search} type="text" onInput={(event)=>{
            setSearch(event.target.value)
          }}/>
          <button className="button" type="submit">Search!</button>
        </form>
        <div className="recipes">
      {console.log(recipes)}
      {recipes.map((recipe)=>( 
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} />
      
        ))}
      </div>
      </div>
    </>
  )
}

export default App;
