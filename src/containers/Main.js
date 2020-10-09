import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home/Home'
import Signin from './Signin/Signin'

const Main = props => {
  console.log(props.auth)
  return (
    <div>
      {!props.auth.isEmpty ? <Home /> : <Signin />}
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
})
export default connect(mapStateToProps, null)(Main)
