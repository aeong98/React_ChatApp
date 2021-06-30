import { ChatEngine } from 'react-chat-engine'
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';
const App = () =>{
    //로그인 하지 않았다면.
    if(!localStorage.getItem('username')) return <LoginForm/>
    console.log(`${localStorage.getItem('username')} and ${localStorage.getItem('password')}`)
    return(
        <ChatEngine
            height = "100vh"
            publicKey="735725ba-c68e-4a17-8440-6c42c3a052b4"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;