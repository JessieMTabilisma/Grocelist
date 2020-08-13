import React, { useState } from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd'

const EditItem = (props) => {
  const [visibility, setVisibility] = useState(false)

  const showModal = () => {
    setVisibility(true)
  }

  const handleOk = e => {
    console.log(e)
    setVisibility(false)
  }

  const handleCancel = e => {
    console.log(e)
    setVisibility(false)
  }
  return (
    <div>
      <Button onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title={props.type}
        visible={visibility}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default EditItem
