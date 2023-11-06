import { useState } from 'react'
import './App.css'
function App({ title }) {
  const [count, setCount] = useState(0)
  // Função para zerar o contador
  const resetCount = () => {
    setCount(0)
  }
  return (
    <>
      <h1>Contador {title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) =>

          count + 1)}>

          count is {count}
        </button>
        <br />
        <button onClick={resetCount}>
          Zerar contador
        </button>
      </div>
    </>
  )
}
export default App