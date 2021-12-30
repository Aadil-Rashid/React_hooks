import React, {useState, useEffect} from 'react';

// it creates context object
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

// Building a Custom Context Provider Component
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const userInformation = localStorage.getItem('isLoggedIn');
        if (userInformation === '1'){
          setIsLoggedIn('true');
        }
      }, []);

    const logoutHandler = () =>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return <AuthContext.Provider 
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }}
    >
        {props.children}</AuthContext.Provider>;
};

// AuthContext, contain context object
export default AuthContext;



