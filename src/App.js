import React, { useState, useEffect } from 'react';
import axios from 'axios';


const url = 'https://swapi.dev/api/people/';
const App = () => {
     // Try to think through what state you'll need for this app before starting. Then build out
     const [characters, setCharacters] = useState([]);
     // the state properties here.
     useEffect(() => {
          axios.get(url)
               .then(response => {
                    console.log(response.data);
               })
               .catch(error => {
                    console.error(error);
               })
     }, [])
     // Fetch characters from the API in an effect hook. Remember, anytime you have a 
     // side effect in a component, you want to think about which state and/or props it should
     // sync up with, if any.

     return (
          <div className="App">
               <h1 className="Header">Characters</h1>
          </div>
     );
}

export default App;
