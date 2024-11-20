import { useEffect, useState } from 'react'
/* import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain' */
import './App.css'


function App() {
  const [postsData, setPostsData] = useState({})


  useEffect(fetchPost, [])

  function fetchPost(url = 'http://localhost:3001/posts') {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setPostsData(data)
      })
  }


  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col">
            {postsData.data ? postsData.data.map(post => (
              <div className="card my-4" key={post.id}>
              <img src={post.image} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">Ricetta: {post.content}</p>
                  <p className="card-text">Tags: {post.tags.join(', ')}</p>
                </div>
            </div>
            )) : <p></p> }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
