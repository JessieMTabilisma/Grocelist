import React from 'react'
import './App.css'
import Main from './containers/Main'
import { Row, Col, Typography } from 'antd'
import Header from './components/Header/Header'
import PinnedItems from './containers/PinnedItems/PinnedItems'
import Mylist from './containers/Mylist/Mylist'
import Login from './containers/Signin/Signin'
import Signup from './containers/Signup/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import PrivateRoute from './components/Hoc/PrivateRoute'

function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/create_account">
            <Signup/>
          </Route>
          <Row>
            <Col xs={24}>
              <Header />
            </Col>
            <Col xs={24}>
              <PrivateRoute exact path="/">
                <Main />
              </PrivateRoute>
            </Col>
            <Col xs={24}>
              <PrivateRoute exact path="/pinneditems">
                <PinnedItems />
              </PrivateRoute>
            </Col>
            <Col xs={24}>
              <PrivateRoute exact path="/yourlist">
                <Mylist />
              </PrivateRoute>
            </Col>
          </Row>
        </Switch>
      </div>
    </Router>
  )
}

export default App
