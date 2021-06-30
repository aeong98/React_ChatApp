import { useState } from "react"
import axios from 'axios';

const LoginForm= ()=>{
    const [username, setUsername] =useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState('');
    //event 발생하면
    const handleSubmit = async (e) =>{
        //브라우저가 새로고침되지 않도록
        e.preventDefault();
        //username | password => chatengine -> give messages
        // works out-> logged in
        // error -> try with new username..
        const authObject = {'Project-ID': "735725ba-c68e-4a17-8440-6c42c3a052b4",
                            'User-Name': username,
                            'User-Secret': password}
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            //로그인
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            //render differently.
            window.location.reload();
        }catch(error){
            setError('Oops it is wrong credentials!!')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange ={(e)=>setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                        />
                    <input 
                        type="password" 
                        value={password} 
                        onChange ={(e)=>setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                        />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;