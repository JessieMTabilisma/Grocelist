/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { List, Typography, Button, Row, Col, Input, Tabs } from 'antd'
import { addItem } from '../../actions'
import { AudioOutlined, PlusOutlined } from '@ant-design/icons'
import { useFirestoreConnect, useFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import PinnedItems from '../PinnedItems/PinnedItems'
import style from './Itemlist.module.css'

const Itemlist = (props) => {
  const firestore = useFirestore()
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const { Title, Text } = Typography
  useFirestoreConnect([
    { collection: 'products' }
  ])

  const data = useSelector(({ firestore: { ordered: { products } } }) => products)
  const handleButton = item => {
    props.addItem(item)
    return firestore.collection('pinned_items').add(item)
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
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff'
      }}
    />
  )
  return (
    <div className={style.itemlist}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Grocery List" key="1">
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
                dataSource={list}
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
        </Tabs.TabPane>
        <Tabs.TabPane tab="Pinned Items" key="2">
          <PinnedItems />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Your List" key="3">
      Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
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
