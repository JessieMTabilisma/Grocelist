import React, { useState } from 'react'
import { connect } from 'react-redux'
import { EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { updateItem } from '../actions'
import ModalForm from './ModalForm'

const EditItem = (props) => {
  const [visibility, setVisibility] = useState(false)

  const showModal = () => {
    setVisibility(true)
    console.log('error')
  }

  const onUpdate = values => {
    setVisibility(false)
    props.updateItem(props.id, values.item)
  }

  const handleCancel = e => {
    setVisibility(false)
  }
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <EditOutlined />
      </Button>
      <ModalForm
        visible={visibility}
        onUpdate={onUpdate}
        onCancel={handleCancel}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateItem: (id, item) => dispatch(updateItem(id, item))
})

export default connect(null, mapDispatchToProps)(EditItem)
