import React from 'react'
import { Row, Form, Input, Button, Col, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import styles from './Signin.module.css'
import { signin } from '../../services/auth'
import { connect } from 'react-redux'

const Signin = props => {
  const onFinish = (values) => {
    console.log('Success:', values)
    // props.signin(values.email, values.password, () => history.push('/'))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Row>
        <img src={Logo} alt="Grocelist" className={styles.logo__login} />
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
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Form.Item>
              <Button size="large" className={styles.submit__button} type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Link to="/create_account">
              <Button size="large" className={styles.create__acc} type="default">
              Create account
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signin: (email, password, callback) => dispatch(signin(email, password, callback))
})
export default connect(null, mapDispatchToProps)(Signin)
