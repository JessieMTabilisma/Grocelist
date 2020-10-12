import React from 'react'
import { connect } from 'react-redux'
import ItemList from './ItemList'
import Signin from './Signin/Signin'

const Main = props => {
  return (
    <div>
      {!props.auth.isEmpty ? <ItemList /> : <Signin />}
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
})
export default connect(mapStateToProps, null)(Main)
