import React from 'react'
import Logo from '../../assets/logo.svg'
import { Row, Col } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { BarsOutlined } from '@ant-design/icons'
import { signout } from '../../services/auth'
import { connect } from 'react-redux'
import style from './Header.module.css'

const Header = (props) => {
  const history = useHistory()
  return (
    <header className={style.header}>
      <Row>
        <Col xs={12}>
          <Link to="/">
            <img src={Logo} alt="Grocelist" className={style.logo} />
          </Link>
        </Col>
        {/* <button onClick={() => props.signout(() => history.push('/'))}>
      sign out
        </button> */}
      </Row>
    </header>
  )
}

const mapDispatchToProps = dispatch => ({
  signout: (callback) => dispatch(signout(callback))
})

export default connect(null, mapDispatchToProps)(Header)