import React from 'react'
import { Row, Form, Input, Button, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import styles from './Signup.module.css'
import { connect } from 'react-redux'
import { signup } from '../../services/auth'

const Signup = props => {
  const onFinish = (values) => {
    console.log('Success:', values)
    props.signup(values.email, values.password)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Row>
        <img src={Logo} alt="Grocelist" className={styles.logo__signup} />
      </Row>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row>
          <Col xs={24}>
            <Form.Item
              name="email"
              label="Email address"
              rules={[
                {
                  required: true,
                  message: 'Please input your email address'
                }
              ]}>
              <Input size="large"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
            >
              <Input.Password size="large"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Form.Item>
              <Button size="large" className={styles.create__button} type="primary" htmlType="submit">
                Create account
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Typography className={styles.login__redirect}>Already have an account? <Link to="/login">Login</Link></Typography>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

// const mapStateToProps = state => ({

// })
const mapDispatchToProps = dispatch => ({
  signup: (email, password) => dispatch(signup(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(Signup)
