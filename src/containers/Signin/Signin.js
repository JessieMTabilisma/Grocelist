import React from 'react'
import { Row, Form, Input, Button, Col, Checkbox, Typography } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import styles from './Signin.module.css'
import { signin } from '../../services/auth'
import { connect } from 'react-redux'
import Commerce from '../../assets/commerce.svg'

const Signin = props => {
  const history = useHistory()
  const onFinish = (values) => {
    console.log('Success:', values)
    props.signin(values.email, values.password, () => history.push('/'))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles.login}>
      <Row>
        <Col xs={24} style={{ padding: '1rem', display: 'flex' }}>
          <img src={Logo} alt="Grocelist" className={styles.logo__login} />
          <Typography className={styles.logo__text}>Grocelist</Typography>
        </Col>
      </Row>
      <Row>
        <Col xs={14}>
          <img src={Commerce} alt="Commerce Login" className={styles.cover} />
        </Col>
        <Col xs={8} className={styles.login_form}>
          <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
            <Form.Item
              name="email"
              label="Email address"
              rules={[
                {
                  required: true,
                  message: 'Please input your email address'
                }
              ]}>

              <Input size="large" className={styles.input__from}/>
            </Form.Item>
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
              <Input.Password size="large" className={styles.input__from}/>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button size="large" className={styles.submit__button} type="primary" htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
            <Link to="/create_account">
              <Button size="large" className={styles.create__acc} type="default">
              Create account
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signin: (email, password, callback) => dispatch(signin(email, password, callback))
})
export default connect(null, mapDispatchToProps)(Signin)
