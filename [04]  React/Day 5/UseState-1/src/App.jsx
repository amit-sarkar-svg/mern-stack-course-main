import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  // const [name, setname] = useState("");
  const [count, setcount] =useState(30);

  async function GithubProfile() {
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setUsers(data);
  }

  // ye function ke last mein call hota hain
  useEffect(()=>{  // ye callback ko kaam karne ka kaam handle karta hai taki call hell na bane
    GithubProfile();
  },[count])
  // ye empty array dene se rerender hone pare ye 1 bar function  call karega
  
  // function handlechange(e){
  //   setname(e.target.value.toUpperCase())
  // }

  return (
    <>
      <h1>Github Users</h1>
      <input type="number" value={count} onChange={(e)=> setcount(e.target.value)} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {users.map((user) => (
          <img src={user.avatar_url} height="100" width="100" key={user.login}/>
        ))}
      </div>
    </>
  );
}

export default App;
