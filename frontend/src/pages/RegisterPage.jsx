import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const register = async (ev) => {
  ev.preventDefault();
  const response = await fetch("https://myblog-jjhd.onrender.com/register", {
    method: "POST",
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'}
  });
  if (response.status !== 200) {
    alert("registration failed"); 
  } else {
    alert("registration successful");
  }
}

  return (
<form className='register' onSubmit={register}>
  <h1>Register</h1>
        <input type="text" 
               placeholder="username" 
               onChange={ev => setUsername(ev.target.value)}/>
        <input type="text" 
               placeholder="password" 
               value={password}
               onChange={ev => setPassword(ev.target.value)}/>
        <button>Register</button>
    </form>
  )
}

export default RegisterPage