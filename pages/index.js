import { useStore } from '../store'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Index() {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [auth, setAuth] = useState(false)

  const store = useStore()

  useEffect(() => {
    if(store.accessToken !== null) {
      setAuth(true)
    }
    else {
      setAuth(false)
    }
  },[store.accessToken])


  function signup() {
    fetch('/api/signup',{
      method:'POST',
      body:JSON.stringify({
        email,
        firstName,
        secondName,
        password
      })
    }).then(res => {
      if(res.status === 409) throw new Error('Please use other email')
      return res.json()
    }).then(data => {
      store.setAccessToken(data.accessToken)
      store.setUser(data.user)
    })
    .catch(e => {
      return console.log(e)
    })
  }

  function signIn() {
    fetch('/api/signIn', {
      method: 'POST',
      body: JSON.stringify({
        email: loginEmail,
        password:loginPassword
      })
    }).then(res => res.json())
    .then(data => {
      store.setAccessToken(data.accessToken)
      store.setUser(data.user)
    })
  }

  function logOut() {
    fetch('/api/logout', {
      method:'POST',
      credentials: 'include'
    }).then(() => {
      store.setAccessToken(null)
      store.setUser(null)

    })
  }
  
  return (
    <div>
      {auth === true ? 
        <div> 
          Hello {store.user.firstName}, you are authenticated so you can visit <Link href="/protected"> protected page</Link>
          <button onClick={() => logOut()}>Logout</button>
        </div>
        :
        <div className="margin">
          <div className="margin">
            <h1>Register</h1>
            <input onChange={e => setFirstName(e.target.value)} placeholder="First Name"></input>
            <input onChange={e => setSecondName(e.target.value)} placeholder="Second Name"></input>
            <input onChange={e => setEmail(e.target.value)} placeholder="email"></input>
            <input onChange={e => setPassword(e.target.value)} placeholder="password" type="password"></input>
            <button onClick={() => signup()}>SignUp</button>
          </div>
          <div className="margin">
            <h1>Login</h1>
            <input onChange={e => setLoginEmail(e.target.value)} placeholder="Email"></input>
            <input onChange={e => setLoginPassword(e.target.value)} placeholder="Password" type="password"></input>
            <button onClick={() => signIn()}>Sign In</button>
          </div>
        </div>
      }
    </div>
  )  
}