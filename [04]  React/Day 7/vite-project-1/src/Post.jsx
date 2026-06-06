import React from "react";

const Post = React.memo((value)=>{

    console.log("Post Rerender");
    

    return(
        <>
            <h1>My name is {value.name} and age is {value.age} </h1>
        </>
    )
})

export default Post;