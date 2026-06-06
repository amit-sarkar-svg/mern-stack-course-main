import { useRef, useState } from "react";


function Login(){

    // const [email,setEmail] = useState("")
    // const [pass,setPass] = useState("")

    const emailRef = useRef(null);
    const passRef = useRef(null);

    console.log("render");
    

    function handlesubmit(e){
        e.preventDefault();

        console.log(emailRef);
        console.log(passRef);
        
    }

    return(
        <>
            <form onSubmit={handlesubmit} >
                <input type="email" ref={emailRef} />
                <input type="password" ref={passRef} />
                <button type="submit" >Submit</button>
            </form>
        </>
    )

}

export default Login;