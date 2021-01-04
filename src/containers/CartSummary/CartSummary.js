import React from 'react'
import { connect } from 'react-redux'
import { Row, Form, Col, Input, Typography, DatePicker, Divider, Button } from 'antd'
import style from './CartSummary.module.css'
import { useFirestore } from 'react-redux-firebase'

const CartSummary = props => {
  const firestore = useFirestore()
  var totalItems = props.goCart.length
  const subTotalPrice = props.goCart.reduce((sum, i) => (
    sum += i.quantity * i.price
  ), 0)
  const totalTax = subTotalPrice * 0.12
  const totals = [
    { id: 1, title: 'Total Items', value: totalItems },
    { id: 2, title: 'SubTotal Price', value: subTotalPrice },
    { id: 2, title: 'Total Calculated Tax (12%)', value: totalTax }
  ]
  const totalSummary = totals.map(item => (
    <Row key={item.id } style={{ marginTop: '0.5rem' }}>
      <Col xs={12}>
        <Typography>
          {item.title}
        </Typography>
      </Col>
      <Col xs={12} style={{ textAlign: 'right' }}>
        <Typography.Text strong="true">{item.value}</Typography.Text>
      </Col>
    </Row>
  ))
  const totalPrice = subTotalPrice + totalTax
  const onFinish = values => {
    const savedlist = {
      list_name: values.list_name,
      date_grocery: values.date_grocery,
      total_price: totalPrice,
      total_items: totalItems,
      items: props.goCart
    }
    console.log(savedlist)
    // return firestore.collection('savedList').add(savedlist)
  }
  return (
    <Form onFinish={onFinish} className={style.cart_summary}>
      <Form.Item>
        <Typography.Title level={3}>Summary</Typography.Title>
        {totalSummary}
        <Divider />
        <Typography>
          Total Price
        </Typography>
        <Typography.Title level={4}>{totalPrice}</Typography.Title>
      </Form.Item>
      <Form.Item label="Name your list"
        name="list_name"
        rules={[
          {
            required: true,
            message: 'Please input the name of the list!'
          }
        ]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item name="date_grocery" label="Select date for this grocery">
        <DatePicker size="large" style={{ display: 'block', width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Row gutter={[8, 24]} style={{ marginTop: '3rem' }}>
          <Col xs={24}>
            <Button size="large" style={{ width: '100%' }}>Back to Cart</Button>
          </Col>
          <Col xs={24}>
            <Button type="primary" size="large" style={{ width: '100%' }} htmlType="submit">Save List</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
}

const mapStateToProps = state => ({
  goCart: state.grocerylist.goCart
})
export default connect(mapStateToProps)(CartSummary)
