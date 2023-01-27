import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Game } from './Game'




function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    Game();
  }, [])

  return (
    <div className='grid'></div>
  )

}

export default App
