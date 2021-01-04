/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { List, Typography, Button, Row, Col, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useFirestoreConnect, useFirestore, isLoaded } from 'react-redux-firebase'
import style from './Itemlist.module.css'

const SearchBar = (data) => {
  const [search, setSearch] = useState('')
  const { Title, Text } = Typography
  useEffect(() => {
    if (isLoaded(data)) {
      setList(
        data.filter((item) =>
          item.product_name.toLowerCase().includes(search.toLowerCase())
        )
      )
    }
  }, [search, data])
  console.log(list)
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
export default SearchBar
