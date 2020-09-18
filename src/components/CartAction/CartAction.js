import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import styles from './CartAction.module.css'

const CartAction = props => {
  const increaseQuantity = id => {
    props.increment(id)
  }
  const decreaseQuantity = id => {
    props.decrement(id)
  }
  return (
    <Row>
      <Col>
        <Button onClick={() => decreaseQuantity(props.item.id)}>-</Button>
      </Col>
      <Col>
        <Typography className={styles.counter}>{props.item.quantity}</Typography>
      </Col>
      <Col>
        <Button type="primary" onClick={() => increaseQuantity(props.item.id)}>+</Button>
      </Col>
    </Row>
  )
}
export default CartAction
