import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-amber-200 text-black p-4 rounded-xl mb-4'>Hello Tailwind</h1>
    <Card username="amits" title="Tailwind" description="A modern CSS framework for building modern websites." />
    <Card username="amits" title="React" description="A JavaScript library for building user interfaces." />
    <Card username="amits" title="Vue" description="A progressive JavaScript framework for building user interfaces." />
    <Card username="amits" title="Angular" description="A platform for building mobile and desktop web applications." />
    </>
  )
}

export default App
