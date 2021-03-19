import React, {useState, useContext} from 'react';
export const AuthContext = React.createContext();


export const AuthProvider = (props) => {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({name: ''});

  const sigIn = (email) => {
    setIsAuth(true);
    setUser({name: email})
  }

  const sigOut = () => {
    setIsAuth(false);
    setUser({})
  } 

  const context =  {
    isAuth,
    sigIn,
    user,
    sigOut
  }

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if(!context){
    console.warn('This hook should be used with AuthContext.Provider')
  }

  return context;
}