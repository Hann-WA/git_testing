import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Welcome to counter App made with React.js</h1>
      </div>
      <h1>Simple Counter Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Your simple counter for everyday!
        </p>
      </div>
      <p className="read-the-docs">
        You have to pay to use the app.
      </p>
    </>
  )
}

export default App
