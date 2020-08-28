/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { List, Typography, Button } from 'antd'
import { addItem } from '../actions'

const ItemList = (props) => {
  const { Title, Text } = Typography
  return (
    <List
      locale={{ emptyText: 'No Item' }}
      dataSource={props.groceryItem}
      renderItem={item => (
        // eslint-disable-next-line react/jsx-key
        <List.Item actions={[<Button type
          ="primary" onClick={addItem(item.id, item.product_name, item.product_image)}>Add</Button>]}>
          <List.Item.Meta
            avatar={<img src={item.product_image} alt={item.product_name} style={{ height: '4rem' }} />}
            title={<Title level={4}>{item.product_name}</Title>}
            description={<Text>qty: per item, per box </Text>}
          />
        </List.Item>
      )}
    />
  )
}

const mapStateToProps = state => ({
  groceryItem: state.grocerylist.inventory
})
const mapDispatchToProps = dispatch => ({
  addItem: (id, item, img) => dispatch(addItem(id, item, img))

})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
