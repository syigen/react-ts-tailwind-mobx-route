import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App bg-red-600">
            <button type="button" onClick={() => setCount((count) => count + 1)}>
                count is: {count}
            </button>
        </div>
    )
}

export default App
