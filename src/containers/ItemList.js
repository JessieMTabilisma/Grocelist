/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { List, Typography, Button } from 'antd'
import { DeleteFilled } from '@ant-design/icons'
import { deleteItem } from '../actions'
import EditItem from '../components/EditItem'

const ItemList = (props) => {
  return (
    <List
      bordered
      dataSource={props.groceryItem}
      renderItem={item => (
        // eslint-disable-next-line react/jsx-key
        <List.Item actions={[<EditItem id={item.id}/>, <Button onClick={() => props.deleteItem(item.id)}>
          <DeleteFilled />
        </Button>]}>
          <Typography level={2}>{item.item}</Typography>
        </List.Item>
      )}
    />
  )
}

const mapStateToProps = state => ({
  groceryItem: state.grocerylist
})
const mapDispatchToProps = dispatch => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
