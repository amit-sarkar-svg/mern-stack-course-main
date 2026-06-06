// This component will return sum of n natural number
// react memo props ko bhi compare karta hain
import React from "react";

const Sum = React.memo(({number})=>{
    function calculate_sum(){

        let sum = 0;

        for(let i=0; i<=number; i++){
            sum+=i;
        }

        return sum;
    }
    console.log("Sum render");
    
    const total = calculate_sum();

    return(
        <>
            <h1>This is our Math library</h1>
            <h2>Sum is : {total}</h2>
        </>
    )
})

export default Sum;