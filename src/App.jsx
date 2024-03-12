
import {useEffect, useState } from 'react'
import './App.css'
import ListNotes from './components/ListNotes'
import staticData from './data.json'
import ListContext from './ListContext'


function App() {

  const [data , setData] = useState([])


 
  useEffect(()=> {
    setData([...data , ...staticData])
  }, [])
  return (
    <ListContext.Provider value={{data , setData}}>
      <div className="App ">
        <ListNotes data={data} setData={setData} />
      </div>
    </ListContext.Provider>
    )
}

export default App
