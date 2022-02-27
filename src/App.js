import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import './App.css';
import clarifai from "clarifai"
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Ranks from './components/Ranks/Ranks'
import { useState } from 'react';


const app= new Clarifai.App({
  apiKey:'65f836eb9f6d494bb2c6bf40149c8cab'
})

function App() {
  const [input, setInput] = useState('')

  const onButtonSubmit = () =>{
  
    console.log("click")
    console.log(input)
  }
  return (
    <div className="App">
         <Navigation />
         <Ranks/>
         <Logo/>
         <ImageLinkForm onButtonSubmit={onButtonSubmit} onInputChange={setInput} />
    </div>
  );
}

export default App;
