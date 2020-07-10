import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../helpers/fetch-helpers';

const LogIn = (props) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(BASE_URL + '/auth/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({
        username,password
      })
    })
      .then(res=>res.json())
      .then(res =>{
        if(!res.token) throw res
        localStorage.setItem('token',res.token)
        props.loggedIn(res.user.username,res.user._id)
      })
      .catch(window.alert)
  }

  return (
    <div className="formcontainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="titleForm">
              Login
          </div>
          <label htmlFor="Username"> Username: </label>
          <input className="input" value={username} onChange={e=>setUsername(e.target.value)} type="text" />
          <label htmlFor="Password"> Password: </label>
          <input className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
          <div className="i">
              <Link to="/signup">
                Sign up? 
              </Link>
          </div>
          <input className="input subtn" type="submit" />
        </form>
    </div>
  );
}

export default LogIn;