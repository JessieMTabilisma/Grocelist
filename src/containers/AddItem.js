import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import { Form, Input, Button } from 'antd'

// eslint-disable-next-line react/prop-types
const AddItem = ({ dispatch }) => {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log(values)
    dispatch(addItem(values.itemValue))
    form.resetFields()
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      name="control-hooks"
    >
      <Form.Item name="itemValue" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add</Button>
      </Form.Item>
    </Form>
  )
}

export default connect()(AddItem)
