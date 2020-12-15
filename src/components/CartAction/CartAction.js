import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { DeleteFilled } from '@ant-design/icons'
import styles from './CartAction.module.css'
import { useFirestore } from 'react-redux-firebase'

const CartAction = ({ item }) => {
  const firestore = useFirestore()

  const pinnedRef = firestore.collection('products')
  const increaseQuantity = id => {
    pinnedRef.doc(id).update({
      quantity: firestore.FieldValue.increment(1)
    })
  }
  const decreaseQuantity = id => {
    if (item.quantity === 1) {
      return item.quantity
    } else {
      pinnedRef.doc(id).update({
        quantity: firestore.FieldValue.increment(-1)
      })
    }
  }
  const removedToCart = id => {
    pinnedRef.doc(id)
      .delete()
      .then(() => {
        console.log('Deleted Succesfully')
      })
      .catch(err => {
        console.log(err)
      })
    console.log(id)
  }
  return (
    <div>
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
      <Row>
        <Col xs={24}>
          <DeleteFilled onClick={() => removedToCart(item.id)} />
        </Col>
      </Row>
    </div>
  )
}
export default CartAction
