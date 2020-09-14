/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Empty, Row, Col, List, Select } from 'antd'
import Counter from '../../components/Counter'
import styles from './CartList.module.css'
import PriceSwitcher from '../../components/PriceSwitcher'

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
          dataSource={props.goCart}
          renderItem={item =>
            // eslint-disable-next-line react/jsx-key
            (<List.Item actions={[<Counter count={item.quantity} />]} className={styles.list__item}>
              <List.Item.Meta
                avatar={<img src={item.product_image} alt={item.product_name} className={styles.image__item} />}
                title={<h4 className={styles.title__item}>{item.product_name}</h4>}
                description={<PriceSwitcher price={item} />}
              />
            </List.Item>)
          }
        />
      </Col>}
    </Row>
  )
}

const mapStateToProps = state => ({
  goCart: state.grocerylist.goCart,
  counter: state.itemcount
})
export default connect(mapStateToProps, null)(CartList)
