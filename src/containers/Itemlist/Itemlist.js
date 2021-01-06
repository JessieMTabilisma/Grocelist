/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { List, Typography, Button, Row, Col, Input } from 'antd'
import { addItem } from '../../actions'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import { useFirestoreConnect, useFirestore, isLoaded } from 'react-redux-firebase'
import style from './Itemlist.module.css'

const Itemlist = (props) => {
  const firestore = useFirestore()
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const { Title, Text } = Typography
  useFirestoreConnect([
    { collection: 'inventory' },
    { collection: 'pinnedItems' }
  ])
  const data = useSelector(({ firestore: { ordered: { inventory } } }) => inventory)
  const handleButton = item => {
    const addItem = {
      price: item.price,
      product_image: item.product_image,
      product_name: item.product_name,
      quantity: 1
    }
    return firestore.collection('pinnedItems').doc(item.id).set(addItem)
  }
  useEffect(() => {
    if (isLoaded(data)) {
      setList(
        data.filter((item) =>
          item.product_name.toLowerCase().includes(search.toLowerCase())
        )
      )
    }
  }, [search, data])
  const suffix = (
    <SearchOutlined style={{
      fontSize: 16,
      color: '#1890ff'
    }} />
  )
  return (
    <div className={style.itemlist}>
      <Row gutter={[8, 32]}>
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Input
            placeholder="Search item"
            size="large"
            suffix={suffix}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            allowClear="true"
            className={style.searchBar}
          />
        </Col>
        <Col xs={24}>
          <List
            locale={{ emptyText: 'No Item' }}
            dataSource={list}
            renderItem={item =>
              item.selected ? null : (
              // eslint-disable-next-line react/jsx-key
                <List.Item actions={[<Button className={style.addButton} type="primary" icon={<PlusOutlined />} onClick={() => handleButton(item)}>Add</Button>]}>
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
    </div>
  )
}

const mapStateToProps = state => ({
  groceryItem: state.grocerylist.inventory,
  inventory: state.firestore
})
const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Itemlist)
