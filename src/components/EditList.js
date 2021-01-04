import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import ModalForm from './ModalForm'
import { useFirestore } from 'react-redux-firebase'

const EditList = (props) => {
  const [visibility, setVisibility] = React.useState(false)
  const firestore = useFirestore()
  const key = 'updatable'
  const showModal = () => {
    setVisibility(true)
  }

  const onUpdate = values => {
    message.loading({ content: 'Updating List Name ...', key })
    setTimeout(() => {
      firestore.collection('savedList').doc(props.id).update({
        list_name: values.list_name
      })
      message.success({ content: 'Successfully Updated!', key, duration: 2 })
      setVisibility(false)
    }, 1500)
  }

  const handleCancel = e => {
    setVisibility(false)
  }
  return (
    <div>
      <Button type="link" onClick={showModal}>
        <EditOutlined key="edit" />
      </Button>
      <ModalForm
        visible={visibility}
        onUpdate={onUpdate}
        onCancel={handleCancel}
      />
    </div>
  )
}

export default EditList
