import React from 'react'
import Header from '../Header'
import ItemList from '../../containers/ItemList'
import { Row, Col } from 'antd'

const Home = () => {
  return (
    <Row>
      <Col xs={24}>
        <Header />
      </Col>
      <Col xs={24}>
        <ItemList />
      </Col>
    </Row>
  )
}
export default Home
