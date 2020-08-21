import React from 'react'
import './App.css'
import AddItem from './containers/AddItem'
import ItemList from './containers/ItemList'
import { Row, Col } from 'antd'

function App () {
  return (
    <div className="App">
      <Row gutter={[8, 32]}>
        <Col xs={24}>
          <h1>Grocelist</h1>
        </Col>
        <Col xs={24}>
          <AddItem />
        </Col>
        <Col xs={24}>
          <ItemList />
        </Col>
      </Row>
    </div>
  )
}

export default App
