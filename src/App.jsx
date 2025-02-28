import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'

// localStorage lets you store data in the browser - regardless of closing / reopening
// Lets store an array of (username,password) pairs
// Using JSON: JSON.stringify converts a JavaScript object or array to a JSON string, and JSON.parse for the opposite

// variables needed: isLoggedIn, (username,Password) and message (for failed logins)
//ARROW => IS SHORTHAND FOR FUNCTION:
//     account => account.username === username
//           IS THE SAME AS 
//     function(account) {
//         return account.username === username;
// }


// {message && <p>{message}</p>}    with the and... this means "if message is true (non empty) then render element on the right" - react specific 

function App() {
  const [username, setUsername] = useState('') // state variable username
  const [password, setPassword] = useState('') // state variable password
  const [message, setMessage] = useState('') // state variable message
  const [isLoggedIn, setIsLoggedIn] = useState('')

  const handleCreateAccount = () => {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [] // last part is the default if null is returned
    // some = if at least one elements in the array pass the test then it returns true else false
    const accountExists = accounts.some(account => account.username === username)
    if (accountExists) {
      // if the username already exists, set an error message
      setMessage('Account already exists.')
    } else {
      // if the username does not exist, add the new account to the array
      accounts.push({ username, password })
      // store updated accounts array in localStorage
      localStorage.setItem('accounts', JSON.stringify(accounts))
      // yay set a success message
      setMessage('Account created successfully!')
    }
  }
  const handleLogIn = () => {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [] // last part is the default if null is returned
    const logInSuccessful = accounts.some(account => account.username === username && account.password === password)
    if (logInSuccessful){
      setMessage('Login successful!')
      setIsLoggedIn(1)
    } else {
      setMessage('Login does not exist.')
      setIsLoggedIn(0)
    }
  }


// localStorage lets you store data in the browser - regardless of closing / reopening
// Lets store an array of (username,password) pairs
// Using JSON: JSON.stringify converts a JavaScript object or array to a JSON string, and JSON.parse for the opposite

// variables needed: isLoggedIn, (username,Password) and message (for failed logins)
//ARROW => IS SHORTHAND FOR FUNCTION:
//     account => account.username === username
//           IS THE SAME AS 
//     function(account) {
//         return account.username === username;
// }


// {message && <p>{message}</p>}    with the and... this means "if message is true (non empty) then render element on the right" - react specific 

function App() {
  const [username, setUsername] = useState('') // state variable username
  const [password, setPassword] = useState('') // state variable password
  const [message, setMessage] = useState('') // state variable message
  const [isLoggedIn, setIsLoggedIn] = useState('')

  const handleCreateAccount = () => {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [] // last part is the default if null is returned
    // some = if at least one elements in the array pass the test then it returns true else false
    const accountExists = accounts.some(account => account.username === username)
    if (accountExists) {
      // if the username already exists, set an error message
      setMessage('Account already exists.')
    } else {
      // if the username does not exist, add the new account to the array
      accounts.push({ username, password })
      // store updated accounts array in localStorage
      localStorage.setItem('accounts', JSON.stringify(accounts))
      // yay set a success message
      setMessage('Account created successfully!')
    }
  }
  const handleLogIn = () => {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [] // last part is the default if null is returned
    const logInSuccessful = accounts.some(account => account.username === username && account.password === password)
    if (logInSuccessful){
      setMessage('Login successful!')
      setIsLoggedIn(1)
    } else {
      setMessage('Login does not exist.')
      setIsLoggedIn(0)
    }
  }
}


  return (
    <>
      <div>
        {isLoggedIn ? (
          <HomePage username={username} />
        ) : (
          <div>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleCreateAccount}>Create Account</button>
            {message && <p>{message}</p>}
          </div>
        )}
      </div>
    </>
  )
}


export default App
