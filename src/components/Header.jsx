import React from 'react'

function Header({title}) {
  return (

    <div className="flex items-center bg-blue-500 px-3">
    <img src="https://cdn-icons-png.flaticon.com/128/1865/1865273.png" alt="Logo" className="w-100 px-1" />
    <h1 className="flex-grow block text-3xl font-semibold text-center  px-1">{title}</h1>
    <img src="https://cdn-icons-png.flaticon.com/128/747/747327.png" alt="Menu" className="w-10 px-1" />
</div>
  )
}

export default Header