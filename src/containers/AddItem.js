import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import { Form, Input, Button, Row, Col } from 'antd'
import { AudioOutlined, PlusOutlined } from '@ant-design/icons'

// eslint-disable-next-line react/prop-types
const AddItem = ({ dispatch }) => {
  const [form] = Form.useForm()

  const onFinish = values => {
    dispatch(addItem(values.itemValue))
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
    <Form
      form={form}
      onFinish={onFinish}
      name="control-hooks"
    >
      <Row gutter={12}>
        <Col xs={17}>
          <Form.Item name="itemValue">
            <Input suffix={suffix} size="large"/>
          </Form.Item>
        </Col>
        <Col xs={7}>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" style={{ padding: '0rem 1rem 0rem 1rem', width: '100%' }} icon={<PlusOutlined />}>Add</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default connect()(AddItem)
