import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import "./App.css"

import Axios  from 'axios';

function App() {
  const [randomJoke, setrandomJoke] = useState()

  const fetchJoke=async()=>{
    const {data}= await Axios.get("https://api.chucknorris.io/jokes/random")
    const joke=data.value;
    setrandomJoke(joke)
  }

  useEffect(() => {
    fetchJoke()
  }, [])
  

  return (
    <Container fluid className='App'>
      <h1>Random Joke&#128518;</h1>
      <p>{randomJoke} &#128518;</p>
      <Button variant="primary" onClick={()=>(fetchJoke())}>Next Joke</Button>
    </Container>
  )
}

export default App
