
/* eslint-disable react/jsx-key */
import React from 'react'
import { Card, Row, Col, Typography, Empty, Modal, Button, Popconfirm, notification } from 'antd'
import { EditOutlined, DeleteOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import styles from './Mylist.module.css'
import RenderModal from '../../components/RenderModal/RenderModal'
import EditList from '../../components/EditList'

const Mylist = () => {
  const firestore = useFirestore()
  const [list, setList] = React.useState([])
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [selectedList, setSelectedList] = React.useState()
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  useFirestoreConnect([
    { collection: 'savedList' }
  ])
  const listRef = firestore.collection('savedList')
  const data = useSelector(({ firestore: { ordered: { savedList } } }) => savedList)
  React.useEffect(() => {
    if (isLoaded(data)) {
      setList(data)
    }
  }, [data])

  // Card Data display
  const handleConfirm = (id) => {
    setConfirmLoading(true)
    setTimeout(() => {
      listRef.doc(id).delete().then(() => {
        console.log('Deleted Succesfully')
      })
        .catch(err => {
          console.log(err)
        })
      setVisible(false)
      setConfirmLoading(false)
      openNotification('topRight')
    }, 2000)
  }

  const handleCancelDelete = () => {
    setVisible(false)
  }
  const showPopconfirm = () => {
    setVisible(true)
  }
  const openNotification = placement => {
    notification.info({
      message: 'Succesfully deleted list',
      placement
    })
  }

  const CardData = list.map((data, i) => {
    return (
      <Col key={data.id} xs={24} md={12} lg={8} xl={6} xxl={4}>
        <Card
          title={data.list_name}
          headStyle={{ textTransform: 'uppercase', color: '#8870FF' }}
          className={styles.card}
          actions={[
            <Button type="link"><ShareAltOutlined key="share"/></Button>,
            <EditList id={data.id}/>,
            <Popconfirm title="Are you sure you want to delete this list ?"
              visible={visible}
              onConfirm={() => handleConfirm(data.id)}
              okButtonProps={{ loading: confirmLoading, danger: true }}
              okText="YES, DELETE LIST"
              okType="primary"
              onCancel={handleCancelDelete}><DeleteOutlined key="delete" onClick={showPopconfirm}/></Popconfirm>
          ]}
          extra={<Button type="link" className={styles.viewButton} onClick={() => showModal(i)}>
            More
          </Button>}
        >
          <Row gutter={[0, 12]}>
            <Col xs={12}>
              <Typography className={styles.totals_desc}>Total Items</Typography>
            </Col>
            <Col xs={12}>
              <Typography className={styles.totals}>{data.total_items}</Typography>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Typography className={styles.totals_desc}>
              Total Price
              </Typography>
            </Col>
            <Col xs={12}>
              <Typography className={styles.totals}>{data.total_price}</Typography>
            </Col>
          </Row>
        </Card>
      </Col>
    )
  })
  // Modal more info
  const showModal = selected => {
    setIsModalVisible(true)
    setSelectedList(selected)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className={styles.savedList}>
      {list.length === 0 ? <Row>
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
      </Row> : <Row gutter={[24, 24]}>
        {CardData}
      </Row>
      }
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* {RenderModal} */}
        <RenderModal selected={selectedList} list={list} />
      </Modal>
    </div>
  )
}
export default Mylist
