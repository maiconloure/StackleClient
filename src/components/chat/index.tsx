import { useEffect } from 'react';
import WebSocketInstance from '../../services/WebSocket'
import ChatTemplate from './chat'

export const Chat = ({username, loggedIn, setLoggedIn}: any) => {
  
  useEffect(() => {
    if (!loggedIn) {
      WebSocketInstance.connect();
      setLoggedIn(true);
    }
  },[loggedIn, setLoggedIn])

  return (<div>
    <ChatTemplate
      currentUser={username}
    />
</div>)
}