import React from 'react'
import Logo from '../assets/logo.svg'
import { Row, Col } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { BarsOutlined } from '@ant-design/icons'
import { signout } from '../services/auth'
import { connect } from 'react-redux'

const Header = (props) => {
  let history = useHistory()
  return (
    <Row style={{ marginBottom: '2rem' }}>
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
      <button onClick={() => props.signout(() => history.push('/'))}>
      sign out
      </button>
    </Row>
  )
}

const mapDispatchToProps = dispatch => ({
  signout: (callback) => dispatch(signout(callback))
})

export default connect(null, mapDispatchToProps)(Header)
