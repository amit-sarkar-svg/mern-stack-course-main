import React from 'react'

function Card(props) {
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-md">{props.username}</div>
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="text-gray-600">{props.description}</p>
      </div>

    </>
  )
}

export default Card
