import { useEffect, useState } from 'react'
/* import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain' */
import './App.css'


function App() {
  const [formData, setFormData] = useState({})


  useEffect(fetchPost, [])

  function fetchPost(url = 'http://localhost:3001/posts'){
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setFormData(data)
    })
  }

 
  return (
    <>
      <div className='container'>
       

      </div>
    </>
  )
}

export default App
