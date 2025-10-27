import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import AILabHeader from './components/pagenavbar'
import Container from 'react-bootstrap/esm/Container';

function App() {
  const [count, setCount] = useState(0);

  /*
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.names);
    console.log(response.data.names);
  }
  /** Fetch list of names */

  /*
  useEffect(() => {
    fetchAPI();
  }, []);
  */


  return (
    <>
      <AILabHeader/>

      <section className='px-5 py-5'>
        <h1>Artificial Intelligence, Cybercrime, and Cybersecurity Research and Education Nexus (AI-CYREN) Lab</h1>
      </section>
      

      
      
      <section className='px-3 py-3'> 
        <p className='text-start fs-5'>The AI-CYREN Lab (Artificial Intelligence, Cybercrime, Cybersecurity, and Online Hate Research and Education Nexus) adopts a social science–driven approach to the study of cybersecurity and cybercrime. It seeks to advance interdisciplinary research and education at the intersection of technology and society. <br/> <br/> Through this integrative framework, the lab fosters a creative, holistic, and nuanced understanding of cyberattacks, cybercrime, cybersecurity, and AI phenomena.</p>
      </section>
      
        {
          /*
          array.map((name, index) => (
            <div key={index}>
              <p>{name}</p>
              <br></br>
            </div>
          ))
          */
        }
    </>
    
  )
}

export default App
