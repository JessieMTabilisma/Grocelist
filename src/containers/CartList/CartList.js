/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Empty, Row, Col, List } from 'antd'
import styles from './CartList.module.css'

const CartList = (props) => {
  return (
    <Row>
      {props.goCart.length === 0 ? <Col Col span={24} style={{ marginTop: '10rem ' }}>
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
      </Col> : <Col xs={24}>
        <List
          itemLayout="horizontal"
          dataSource={props.inventoryInCart}
          renderItem={item => item.selected === true ? (
            <List.Item className={styles.list__item}>
              <List.Item.Meta
                avatar={<img src={item.product_image} alt={item.product_name} className={styles.image__item} />}
                title={<h4 className={styles.title__item}>{item.product_name}</h4>}
              />
            </List.Item>
          ) : null}
        />
      </Col>}
    </Row>
  )
}

const mapStateToProps = state => ({
  goCart: state.grocerylist.goCart,
  inventoryInCart: state.grocerylist.inventory
})
export default connect(mapStateToProps, null)(CartList)
