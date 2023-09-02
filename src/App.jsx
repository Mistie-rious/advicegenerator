import { useEffect, useState } from 'react'
import './App.css'
import divider from './assets/images/divider1.svg'
import icon from './assets/images/dice.svg'
function App() {
  const [click, setClick] = useState("")

  
  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then (data => {
        const gottenAdvice = data.slip.advice;
        setClick(gottenAdvice)
      })
      .catch(error => console.error('Error catching data:',error));


  }

  useEffect(() => {
    fetchAdvice();
  }, [])

  return (
    <>
      <div>
        <div className="container">
          <div className="heading">Advice #117</div>
          <p className="text">"{click}"</p>
          <img className='image' width={340} src={divider} alt=''></img>
          <button onClick={fetchAdvice} className="green">
          <img className='dice' width={15} src={icon} alt=''></img>
          </button>
        </div>
        
        </div>
    </>
  )
}

export default App
