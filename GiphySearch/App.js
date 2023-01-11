import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [search, setSearch] = useState('the office');
  const [gif, setGif] = useState([])

  const API = 'U3fU4Za82ny0ma5pjPw3EWvzPrrpZGGX'
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`
  //const newEndpoint = `https://api.giphy.com/v1/gifs/search?q=messi&api_key=U3fU4Za82ny0ma5pjPw3EWvzPrrpZGGX`
  

  /*useEffect(()=>{
    const getGif = async() => {
      await axios.get(url)
      .then((response)=> console.log(response)) //setGif(response.data.data[0].url))
      //.then((response)=> console.log(response.data.data[0].url))
      .catch((error) => console.log(error))
    }
    getGif()
  },[])
*/

  /*useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`)
    .then((response)=> console.log(response))
    .then((data) => setSearch(data.image))
    .catch((error) => console.log(error))
  },[]);
  */
  useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`)
    .then((response)=> response.json())
    .then((data) => setGif(data.data[0].images.original.url))
    .catch((error) => console.log(error))
  },[]);
  
  const getImage = () => {
    fetch(url)
    .then((response)=> response.json())
    .then((data) => setGif(data.data[0].images.original.url))
    .catch((error) => console.log(error))
    //.then((response) => console.log(response.data))
    //.then((data) => setSearch(data.image))
    //.catch((error) => console.log(error))
  }

  const handleSearch = () => {
    getImage()
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
    <header>
    <div>
   <h1>ENTER A WORD:</h1>
   <input type="text" value={search} onChange={handleChange}></input>
   <button type='submit' onClick={handleSearch}>Search</button>
    </div>
   <div><img alt ="No results found" src={gif}></img></div>
   </header>
   </>
  );
}

export default App;
