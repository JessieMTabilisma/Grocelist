import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import { Input, Form } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form'

// eslint-disable-next-line react/prop-types
const AddItem = ({ dispatch }) => {
  const [form] = useForm()
  const onSearch = values => {
    dispatch(addItem(values))
    form.resetFields()
  }
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff'
      }}
    />
  )

  return (
    <Form form={form}>
      <Form.Item>
        <Input.Search
          placeholder="Search item"
          enterButton="Add"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default connect()(AddItem)
