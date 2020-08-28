import React from 'react'
import Logo from '../assets/logo.svg'
import { Row, Col, Button } from 'antd'
import { OrderedListOutlined } from '@ant-design/icons'

const Header = () => (
  <Row>
    <Col xs={12}>
      <img src={Logo} alt="Grocelist" style={{ height: '2.5rem', marginTop: '1rem' }} />
    </Col>
    <Col xs={6} offset={6}>
      <Button type="outline" style={{ marginTop: '1.5rem' }} icon={<OrderedListOutlined />} size="medium">
          My list
      </Button>
    </Col>
  </Row>
)

export default Header
