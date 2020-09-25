import React from 'react'
import { Modal, Form, Input } from 'antd'

const ModalForm = ({ visible, onUpdate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="Save your List"
      okText="Create and Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields()
            onUpdate(values)
          })
          .catch(info => {
            console.log('Validate Failed: ', info)
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="list_name"
          rules={[
            {
              required: true,
              message: 'Please input list name to save!'
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalForm
