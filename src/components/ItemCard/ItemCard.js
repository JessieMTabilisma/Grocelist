import React from 'react'
import { Typography, Row, Col, Button } from 'antd'
import styles from './ItemCard.module.css'
import { PlusOutlined } from '@ant-design/icons'

const ItemCard = ({ item, addMe }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img alt="example" src={item.product_image} className={styles.img} />
      </div>
      <div className={styles.desc}>
        <Row>
          <Col xs={24}>
            <Typography className={styles.prodname}>{item.product_name}</Typography>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Typography className={styles.price}>PHP {item.price}</Typography>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Button onClick={addMe} type="primary" className={styles.addme} icon={<PlusOutlined />}>Add</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default ItemCard
