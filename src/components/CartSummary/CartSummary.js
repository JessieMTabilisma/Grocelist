import React from 'react'
import { Button, Row, Col, Typography } from 'antd'
import styles from './CartSummary.module.css'

const CartSummary = props => {
  const totalPrice = props.items.map(item => {
    // console.log(...item.quantity * ...item.price)
    const subtotal = item.price * item.quantity

    return subtotal
  })
  return (
    <Row className={styles.cart_summary}>
      <Col xs={12}>
        <Typography>
              Total price:
          <Typography.Text strong="true">{totalPrice}</Typography.Text>
        </Typography>
      </Col>
      <Col xs={12} style={{ textAlign: 'right' }}>
        <Button type="primary" size="large">Save List</Button>
      </Col>
    </Row>
  )
}

export default CartSummary
