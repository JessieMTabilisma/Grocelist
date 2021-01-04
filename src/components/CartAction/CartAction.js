import React from 'react'
import { Row, Col, Button, Typography, Popconfirm, notification } from 'antd'
import { DeleteFilled } from '@ant-design/icons'
import styles from './CartAction.module.css'
import { useFirestore } from 'react-redux-firebase'

const CartAction = ({ item }) => {
  const firestore = useFirestore()
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const pinnedRef = firestore.collection('pinnedItems')
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
  const handleOk = (id) => {
    setConfirmLoading(true)
    setTimeout(() => {
      pinnedRef.doc(id).delete().then(() => {
        console.log('Deleted Succesfully')
      })
        .catch(err => {
          console.log(err)
        })
      setVisible(false)
      setConfirmLoading(false)
      openNotification('topRight')
    }, 2000)
  }

  const handleCancel = () => {
    setVisible(false)
  }
  const showPopconfirm = () => {
    setVisible(true)
  }
  const openNotification = placement => {
    notification.info({
      message: 'Succesfully deleted item ',
      placement
    })
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
        <Popconfirm
          title="Are you sure you want to delete this item ?"
          visible={visible}
          onConfirm={() => handleOk(item.id)}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancel}>
          <DeleteFilled className={styles.deleteAction} onClick={showPopconfirm} />
        </Popconfirm>
      </Row>
    </div>
  )
}
export default CartAction
