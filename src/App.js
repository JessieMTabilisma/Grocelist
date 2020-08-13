import React from 'react'
import './App.css'
import AddItem from './containers/AddItem'
import ItemList from './containers/ItemList'

function App () {
  return (
    <div className="App">
      <h1>Grocelist</h1>
      <AddItem />
      <ItemList />
    </div>
  )
}

export default App
