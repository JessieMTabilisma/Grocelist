import React from 'react'
import './App.css'
import AddItem from './containers/AddItem'
import ItemList from './containers/ItemList'
import { Row, Col } from 'antd'
import Logo from './assets/logo.svg'

function App () {
  return (
    <div className="App">
      <Row gutter={[8, 32]}>
        <Col xs={24}>
          <img src={Logo} alt="grocelist" style={{ height: '4rem', margin: '20px auto' }} />
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
