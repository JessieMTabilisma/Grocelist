import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import { incrementItem, decrementItem } from '../actions'

const Counter = (props) => {
  console.log(props)
  return (
    <Row gutter={[8, 15]}>
      <Col>
        <Button onClick={() => props.decrement()}>-</Button>
      </Col>
      <Col>
        {props.counter}
      </Col>
      <Col>
        <Button onClick={() => props.increment()}>
            +
        </Button>
      </Col>
    </Row>
  )
}
const mapStateToProps = state => ({
  counter: state.cartlist.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementItem),
  decrement: () => dispatch(decrementItem)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
