import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, InputNumber } from 'antd'
import { incrementItem, decrementItem } from '../actions'

const Counter = (props) => {
  console.log(props)
  return (
    <Row gutter={[8, 15]}>
      <Col>
        <Button onClick={() => props.decrement()}>-</Button>
      </Col>
      <Col>
        <InputNumber min={1} max={10} defaultValue={props.count} />
      </Col>
      <Col>
        <Button onClick={() => props.increment()}>
            +
        </Button>
      </Col>
    </Row>
  )
}
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementItem),
  decrement: () => dispatch(decrementItem)
})

export default connect(null, mapDispatchToProps)(Counter)
