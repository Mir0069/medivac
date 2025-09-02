import React,{useState,useEffect,useContext} from "react";

const authcontext=React.createContext()

export function useauth(){
    return useContext(authcontext)
}

export function Authprovider(props){
    const [authuser, setauthuser] = useState(null)
    const [isloggedin, setisloggedin] = useState(false)
    
    useEffect(()=>{

    })

    const val={
        authuser,
        setauthuser,
        isloggedin,
        setisloggedin
    }
    return (
        <authcontext.Provider value={[authuser,setauthuser]
        [isloggedin,
        setisloggedin]}>
            {props.children}
        </authcontext.Provider>
    )
}