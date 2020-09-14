import React, { useState } from 'react'
import { Row, Col, Select, Typography } from 'antd'

const PriceSwitcher = props => {
  const [price, setPrice] = useState(props.price.quantity_type.per_item)
  const handleChange = value => {
    switch (value) {
      case 'per pack':
        return setPrice(props.price.quantity_type.per_pack)
      case 'per box':
        return setPrice(props.price.quantity_type.per_box)
      default:
        return setPrice(props.price.quantity_type.per_item)
    }
  }
  return (
    <Row>
      <Col xs={24}>
        <Typography.Text strong>₱: {price} </Typography.Text>
      </Col>
      <Col xs={24}>
        <Select defaultValue="per item" onChange={handleChange}>
          <Select.Option value="per item">per item</Select.Option>
          <Select.Option value="per pack">per pack</Select.Option>
          <Select.Option value="per box">per box</Select.Option>
        </Select>
      </Col>
    </Row>
  )
}

export default PriceSwitcher
