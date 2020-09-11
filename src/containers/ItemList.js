/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { List, Typography, Button, Row, Col, Input } from 'antd'
import { addItem } from '../actions'
import { AudioOutlined, PlusOutlined } from '@ant-design/icons'


const ItemList = (props) => {
  const [search, setSearch] = useState('')
  const { Title, Text } = Typography

  const handleButton = item => {
    props.addItem(item)
  }

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff'
      }}
    />
  )
  const filteredItems = props.groceryItem.filter(item => {
    return item.product_name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Row gutter={[8, 32]}>
      <Col xs={24}>
        <Input
          placeholder="Search item"
          size="large"
          suffix={suffix}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          allowClear="true"
        />
      </Col>
      <Col xs={24}>
        <List
          locale={{ emptyText: 'No Item' }}
          dataSource={filteredItems}
          renderItem={item =>
            item.selected ? null : (
            // eslint-disable-next-line react/jsx-key
              <List.Item actions={[<Button type="primary" icon={<PlusOutlined />} onClick={() => handleButton(item)}>Add</Button>]}>
                <List.Item.Meta
                  avatar={<img src={item.product_image} alt={item.product_name} style={{ height: '4rem', maxWidth: '4rem' }} />}
                  title={<Title level={4}>{item.product_name}</Title>}
                  description={<Text>qty: per item, per box </Text>}
                />
              </List.Item>
            )
          }
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({
  groceryItem: state.grocerylist.inventory
})
const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
