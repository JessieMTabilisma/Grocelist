/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { List, Typography, Button } from 'antd'
import { addItem } from '../actions'

const ItemList = (props) => {
  const { Title, Text } = Typography
  const handleButton = id => {
    props.addItem(id)
  }
  return (
    <List
      locale={{ emptyText: 'No Item' }}
      dataSource={props.groceryItem}
      renderItem={item =>
        item.selected ? null : (
        // eslint-disable-next-line react/jsx-key
          <List.Item actions={[<Button type="primary" onClick={() => handleButton(item.id)}>Add</Button>]}>
            <List.Item.Meta
              avatar={<img src={item.product_image} alt={item.product_name} style={{ height: '4rem' }} />}
              title={<Title level={4}>{item.product_name}</Title>}
              description={<Text>qty: per item, per box </Text>}
            />
          </List.Item>
        )
      }
    />
  )
}

const mapStateToProps = state => ({
  groceryItem: state.grocerylist.inventory
})
const mapDispatchToProps = dispatch => ({
  addItem: (id) => dispatch(addItem(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)

// // eslint-disable-next-line react/jsx-key
// <List.Item actions={[<Button type="primary" onClick={() => handleButton(item.id)}>Add</Button>]}>
//   <List.Item.Meta
//     avatar={<img src={item.product_image} alt={item.product_name} style={{ height: '4rem' }} />}
//     title={<Title level={4}>{item.product_name}</Title>}
//     description={<Text>qty: per item, per box </Text>}
//   />
// </List.Item>
