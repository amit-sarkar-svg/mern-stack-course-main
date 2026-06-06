import { useEffect } from "react";
import { useState } from "react";

function Clock(){
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    const [show,setShow] = useState(true)

    // useeffect hook ki property hain 
    // ya toh kuch return na kre 
    // agar kre toh calback hi return kre
    useEffect(()=> {

        if(!show) return;

        const intervalid =  setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
            console.log("hi");
        
        },1000)

        return(
            clearInterval(intervalid)
        )

    },[show])

    return(
        <>
        <button onClick={()=> setShow(!show)}> {show?"hide":"show"} </button>    
        { show&& <h1>Current Time: {time}</h1>}
        </>
    )

}

export default Clock;