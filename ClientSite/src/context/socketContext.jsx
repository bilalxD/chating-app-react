import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";
import io from "socket.io-client"
export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState([]);
    const {authUser} = useAuthContext();
  useEffect(() => {
    if(authUser){
        const socket = io("http://localhost:5000");
        setSocket(socket);

        return () => socket.close();
    }else{
        if(socket){
            socket.close();
            setSocket(null)
        }
    }
  }, []);
  return <SocketContext.Provider value={{socket,online}}>{children}</SocketContext.Provider>;
};
