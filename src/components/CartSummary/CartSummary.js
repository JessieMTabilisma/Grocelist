import React from 'react'
import { Button, Row, Col, Typography } from 'antd'
import styles from './CartSummary.module.css'

const CartSummary = props => {
  const totalPrice = props.items.reduce((sum, i) => (
    sum += i.quantity * i.price
  ), 0)
  return (
    <Row className={styles.cart_summary}>
      <Col xs={12}>
        <Typography className={styles.vertical}>
              Total price: 
          <Typography.Text className={styles.total__price}>
₱ {totalPrice}</Typography.Text>
        </Typography>
      </Col>
      <Col xs={12} style={{ textAlign: 'right' }}>
        <Button type="primary" size="large">Save List</Button>
      </Col>
    </Row>
  )
}

export default CartSummary
