import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Game } from './Game'




function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    Game();
  }, [])





  function reiniciarJogo() {
    // Aqui você coloca o código que deseja executar quando o botão for clicado
    // por exemplo, recarregar a página
    window.location.reload();
  }


  return (
    <>
      <main>
        <div className="overlay"></div>
        <div className='title'><h1>Jogo da Memória</h1></div>
        <header className='box-green'>
          <span>Clique para começar: </span>
          <div >
            <span className='timerTitle'>Timer: </span>
            <span className='timer'>00</span>
          </div>
        </header>
        <div className='grid'>
        </div>
        <button className='reiniciar' onClick={reiniciarJogo}>Reiniciar Jogo</button>

      </main>
    </>
  )

}

export default App
