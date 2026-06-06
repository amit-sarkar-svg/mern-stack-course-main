import { useCallback, useMemo, useState } from 'react'
import Sum from './Sum'
import Post from './Post'


function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(1000)
  console.log("app render");

  // function calculatePrime(){
  //   let total = 0;
  //   if(num>1)  total++;
  //   for(let i=3; i<=num; i++){
  //     total++;
  //     for(let j=2;j<i;j++){
  //       if(i%j==0){
  //         total--;
  //         break;
  //       }
  //     }
  //   }
  //   return total;
  // }

  // function handleclick(){
  //   console.log("heloo");
  // }


  // usecallback function remember rakhta hain taki bar bar rerender na karna pade
  const handleclick = useCallback(()=>{
    console.log("handle click",count);
    
  },[count])

  // useMemo value remember rakhta hain 
  const Prime = useMemo(()=>{
    let total = 0;

    if(num>1)  total++;

    for(let i=3; i<=num; i++){
      total++;
      for(let j=2;j<i;j++){
        if(i%j==0){
          total--;
          break;
        }
      }
    }

    return total;

  },[num])

  const obj = useMemo(()=>{
    return {name:"Amit", age:"20"}
  },[])

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1) } > Increment </button>

      <h2>Your current number: {num} </h2>
      <button onClick={()=>setNum(num+100)} > Increment Number </button>

      <h3> Total Prime Number: {Prime} </h3>

      <button onClick={handleclick} > Click Me </button>
      <Sum number={1000} ></Sum>

      <Post value={obj} ></Post>
    </>
  )
}

export default App
