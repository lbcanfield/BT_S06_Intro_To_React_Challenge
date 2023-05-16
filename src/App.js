//Dependency Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Component Imports
import Character from './components/Character';

const url = 'https://swapi.dev/api/people/';
const App = () => {
     // Try to think through what state you'll need for this app before starting. Then build out
     // the state properties here.
     const [characters, setCharacters] = useState([]);
     // Fetch characters from the API in an effect hook. Remember, anytime you have a 
     // side effect in a component, you want to think about which state and/or props it should
     // sync up with, if any.
     useEffect(() => {
          axios.get(url)
               .then(response => {
                    // console.log(response.data);
                    setCharacters(response.data);
               })
               .catch(error => {
                    console.error(error);
               })
     }, [])

     return (
          <div className="App">
               <h1 className="Header">Characters</h1>
               {
                    characters.map(character => {
                         return <Character character={character} />
                    })
               }
          </div>
     );
}

export default App;
