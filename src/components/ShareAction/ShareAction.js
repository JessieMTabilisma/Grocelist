import React from 'react'
import { Modal, Button } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'

const ShareAction = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="link" onClick={showModal}>
        <ShareAltOutlined />
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default ShareAction
