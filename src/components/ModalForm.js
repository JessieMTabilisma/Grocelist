import React from 'react'
import { Modal, Form, Input } from 'antd'

const ModalForm = ({ visible, onUpdate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="Edit list name"
      okText="Save"
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
          label="New name"
          name="list_name"
          rules={[
            {
              required: true,
              message: 'Please input list name to save!'
            }
          ]}
        >
          <Input style={{ padding: '0.5rem', borderRadius: '5px' }}/>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalForm
