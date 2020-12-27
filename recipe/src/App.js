import React, {useEffect} from 'react'
import './App.css';
import axios from "axios";

function App() {
  
  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    params: {q: 'chicken'},
    headers: {
      'x-rapidapi-key': '348c7742d6msh940b979d425b380p17a566jsn1ee6183a35ea',
      'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
    
    
    useEffect(() => {
    }, []);

  return (
    <div className="App">
        <form className="search-form" >
            <input className="search-bar" type="text" />
            <button className="search-button" type="submit"> Search </button>
        </form>
    </div> 
  );
};

export default App;
