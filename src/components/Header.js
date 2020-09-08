import React from 'react'
import Logo from '../assets/logo.svg'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { BarsOutlined } from '@ant-design/icons'

const Header = () => (
  <Row>
    <Col xs={12}>
      <Link to="/">
        <img src={Logo} alt="Grocelist" style={{ height: '2.5rem', marginTop: '1rem' }} />
      </Link>
    </Col>
    <Col xs={12} style={{ textAlign: 'right' }}>
      <Link to="/mylist">
        <BarsOutlined style={{ fontSize: '30px', color: '#08c', marginTop: '1.3rem' }} />
      </Link>
    </Col>
  </Row>
)

export default Header
