import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('') // State variable for username
  const [password, setPassword] = useState('') // State variable for password

  const handleSubmit = () => {
    console.log('Username:', username) // Logs the username to the console
    console.log('Password:', password) // Logs the password to the console
  }

  return (
    <>
      <div>
        <div>
          <label>
            Username: 
            <input 
              type="text" // Input field of type text
              value={username} // Binds the input field to the username state variable
              onChange={(e) => setUsername(e.target.value)} // Updates the username state variable on change
            />
          </label>
        </div>
        <div>
          <label>
            Password: 
            <input 
              type="password" // Input field of type password
              value={password} // Binds the input field to the password state variable
              onChange={(e) => setPassword(e.target.value)} // Updates the password state variable on change
            />
          </label>
        </div>
        <button onClick={handleSubmit}>Submit</button> {/* Submit button */}
      </div>
    </>
  )
}

export default App