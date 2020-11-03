import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Typography } from 'antd'
import styles from './CartAction.module.css'
import { useFirestore, firebaseConnect } from 'react-redux-firebase'

const CartAction = ({ item }) => {
  const firestore = useFirestore()

  const pinnedRef = firestore.collection('pinnedItems')
  const increaseQuantity = id => {
    pinnedRef.doc(id).update({
      quantity: firestore.FieldValue.increment(1)
    })
  }
  const decreaseQuantity = id => {
    pinnedRef.doc(id).update({
      quantity: firestore.FieldValue.increment(-1)
    })
  }
  return (
    <Row>
      <Col>
        <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
      </Col>
      <Col>
        <Typography className={styles.counter}>{item.quantity}</Typography>
      </Col>
      <Col>
        <Button type="primary" onClick={() => increaseQuantity(item.id)}>+</Button>
      </Col>
    </Row>
  )
}
export default CartAction
