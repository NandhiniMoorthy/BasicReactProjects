
import './App.css'

import Card from './components/Card'
import Header from './components/Header'

function App() {

  let myObj = {
    name: 'Nandhini',
    age: 33,
    address: {
      city: 'Chennai',
      state: 'TamilNadu',
      country: 'India'
    }
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  

  return (
    <>
    <Header title="React Header Title"/>
    <Card username ="Nandhini" post="Programmer" url="https://dummyimage.com/300x300" myArr={newArr}/>
    <Card username="Moorthy" post="Graphic Designer" url="https://dummyimage.com/400x300"/>
    </>
  )
}

export default App
