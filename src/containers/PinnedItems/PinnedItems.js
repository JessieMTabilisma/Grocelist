/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Empty, Row, Col, List, Typography } from 'antd'
import styles from './PinnedItems.module.css'
import CartFooter from '../../components/CartFooter/CartFooter'
import CartAction from '../../components/CartAction/CartAction'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

const PinnedItems = (props) => {
  const [pinitems, setPin] = useState([])
  useFirestoreConnect([
    { collection: 'pinnedItems' }
  ])
  const data = useSelector(({ firestore: { ordered: { pinnedItems } } }) => pinnedItems)
  useEffect(() => {
    if (isLoaded(data)) {
      setPin(data)
    }
  }, [data])
  return (
    <div className={styles.pinnedItems}>
      {pinitems.length === 0 ? <Row>
        <Col span={24} style={{ marginTop: '10rem ' }}>
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 100
            }}
            description={
              <span>
        Theres nothing out here
              </span>
            }
          >
            <Link to="/">Back to list</Link>
          </Empty>
        </Col>
      </Row>
        : <Row gutter={[8, 32]}>
          <Col xs={24} md={16}>
            <List
              itemLayout="horizontal"
              dataSource={pinitems}
              renderItem={item =>
                (
                  <List.Item actions={[<CartAction increment={props.incrementItem} decrement={props.decrementItem} item={item} />]} className={styles.list__item}>
                    <List.Item.Meta
                      avatar={<img src={item.product_image} alt={item.product_name} className={styles.image__item} />}
                      title={<h4 className={styles.title__item}>{item.product_name}</h4>}
                      description={<Typography strong="true">
                    ₱ {item.price}
                      </Typography>}
                    />
                  </List.Item>
                )
              }
            />
          </Col>
          <Col xs={24} md={8} className={styles.cart__summary}>
            <CartFooter items={pinitems} />
          </Col>
        </Row>
      }
    </div>
  )
}

export default PinnedItems
