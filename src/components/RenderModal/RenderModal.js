import React from 'react'
import { Row, Col, Typography, Table } from 'antd'
import styles from './RenderModal.module.css'

const columns = [
  {
    title: 'Item Name',
    dataIndex: 'product_name',
    key: 'product_name'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }
]

const RenderModal = (props) => {
  if (props.selected !== null) {
    const listModalData = props.list[props.selected]
    return (
      <>
        <Row>
          <Typography.Title level={3}>
            {listModalData.list_name}
          </Typography.Title>
        </Row>
        <Row gutter={[12, 12]}>
          <Col xs={12}>
            <Typography className={styles.totals_desc}>Total Items</Typography>
          </Col>
          <Col xs={12}>
            <Typography className={styles.totals}>{listModalData.total_items}</Typography>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col xs={12}>
            <Typography className={styles.totals_desc}>
            Total Price
            </Typography>
          </Col>
          <Col xs={12}>
            <Typography className={styles.totals}>{listModalData.total_price}</Typography>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col xs={24}>
            <Table columns={columns} dataSource={listModalData.items} />
          </Col>
        </Row>
      </>
    )
  }
}

export default RenderModal
