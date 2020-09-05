import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import { Input, Form } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form'

// eslint-disable-next-line react/prop-types
const ItemSearch = (props) => {
  const { Search } = Input
  const [form] = useForm()
  const onSearch = id => {
    props.dispatch(addItem(id))
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
        <Search
          placeholder="Search item"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch(props.addToCart)}
        />
      </Form.Item>
    </Form>
  )
}

export default connect()(ItemSearch)
