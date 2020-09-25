import React from 'react'
import { Button, Row, Col, Typography, Form } from 'antd'
import styles from './CartFooter.module.css'
import { Link } from 'react-router-dom'

const CartSummary = props => {
  const totalPrice = props.items.reduce((sum, i) => (
    sum += i.quantity * i.price
  ), 0)
  return (
    <Form>
      <Row className={styles.cart_summary}>
        <Col xs={12}>
          <Typography className={styles.vertical}>
              Total price:
            <Typography.Text className={styles.total__price}>
₱ {totalPrice}</Typography.Text>
          </Typography>
        </Col>
        <Col xs={12} style={{ textAlign: 'right' }}>
          <Button type="primary">
            <Link to="/save-list">Save List</Link>
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
// Move savelist to this component
// Summary contain:
//   Total price
//   Total number of items
//   More button to review list of products

export default CartSummary
