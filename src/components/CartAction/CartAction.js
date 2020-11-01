import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Typography } from 'antd'
import styles from './CartAction.module.css'
import { useFirestore, firebaseConnect } from 'react-redux-firebase'

const CartAction = ({ item }) => {
  const firestore = useFirestore()
  // const [quantity, setQuantity] = useState(props.item.quantity)
  useEffect(() => {
  }, [item.quantity])
  const pinnedRef = firestore.collection('pinnedItems')
  const increaseQuantity = id => {
    console.log(id)
    pinnedRef
      .where('id', '==', id)
      .get()
      .then(data => {
        console.log(data)
        data.docs.forEach(docs => {
          pinnedRef
            .doc(docs.id)
            .update({
              quantity: firestore.FieldValue.increment(1)
            })
        })
      })
    // firestore
    //   .collection('pinnedItems')
    //   // .get()
    //   // .then(data => {
    //   //   console.log(data.docs)
    //   //   data.docs.forEach(doc => {
    //   //     console.log(doc.id)
    //   //   })
    //   // })
    //   .where('id', '==', id)
    //   .get()
    //   .
    // // console.log(...data)
    // update(`DaxnzmfWjdJ7jfu4uriO/${id}`, { quantity: 'test' })
    // pinnedRef
    //   .doc('DaxnzmfWjdJ7jfu4uriO')
    //   .update({
    //     quantity: firestore.FieldValue.increment(1)
    //   })
  }
  const decreaseQuantity = id => {
    pinnedRef
      .where('id', '==', id)
      .get()
      .then(data => {
        console.log(data)
        data.docs.forEach(docs => {
          pinnedRef
            .doc(docs.id)
            .update({
              quantity: firestore.FieldValue.increment(-1)
            })
        })
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
