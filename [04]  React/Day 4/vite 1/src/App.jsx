import { useState } from "react";// ye Hooks prebuilt react ke functions hote hain

function App(){


  // let count = 0;
  // function increasenumber(){
  //   count++;
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter : ${count} `;
  // }

  
  // using Hooks  
  let [count,setcount] = useState(null);

  function increasenumber(){
    count++;
    setcount(count);
    // setcount react ko value update karne ka signal deta hain , and App function ko rerender(rerun) karta hain
  }

  return (
    <>
      <p> Counter : {count} </p>
      <button onClick={increasenumber}> Increment </button>
    </>
  )
}

export default App;

