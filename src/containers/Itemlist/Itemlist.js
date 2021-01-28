/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { List, Typography, Button, Row, Col, Input, Divider } from 'antd'
import { SearchOutlined, PlusOutlined, AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import ItemCard from '../../components/ItemCard/ItemCard'
import { useFirestoreConnect, useFirestore, isLoaded } from 'react-redux-firebase'
import style from './Itemlist.module.css'

const Itemlist = (props) => {
  const firestore = useFirestore()
  const [search, setSearch] = useState('')
  const [viewPoint, setViewPoint] = useState(false)
  const [list, setList] = useState([])
  const { Title, Text } = Typography
  useFirestoreConnect([
    { collection: 'inventory' },
    { collection: 'pinnedItems' }
  ])
  const data = useSelector(({ firestore: { ordered: { inventory } } }) => inventory)
  const dataPinned = useSelector(({ firestore: { ordered: { pinnedItems } } }) => pinnedItems)
  console.log(dataPinned)
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
      <Row gutter={[64, 32]}>
        <Col xs={16} offset={4}>
          <div className={style.inputMod}>
            <Input
              placeholder="Search item"
              size="large"
              suffix={suffix}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              allowClear="true"
              className={style.searchBar}
              bordered={false}
            />
            <Divider type="vertical" className={style.divider} />
            {viewPoint === true ? (<Button size="large" className={style.gridButton} icon={<AppstoreOutlined />} onClick={() => setViewPoint(!viewPoint)}>Grid</Button>) : (<Button className={style.gridButton} icon={<BarsOutlined />} size="large" onClick={() => setViewPoint(!viewPoint)}>List</Button>)}
          </div>
        </Col>
        {viewPoint === true ? (
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
        ) : (
          <>
            {list.map(item => {
              return (
                <Col xs={6} key={item.id}>
                  <ItemCard item={item} addMe={() => handleButton(item)}/>
                </Col>
              )
            })}
          </>
        )}
        {/* <Col xs={24}>
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
        {list.map(item => {
          return (
            <Col xs={6} key={item.id}>
              <ItemCard item={item} addMe={() => handleButton(item)}/>
            </Col>
          )
        })} */}
      </Row>
    </div>
  )
}

export default Itemlist
