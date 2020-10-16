import React from 'react'
import './App.css'
import Main from './containers/Main'
import { Row, Col } from 'antd'
import Header from './components/Header/Header'
import CartSummary from './containers/CartSummary/CartSummary'
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
              <PrivateRoute exact path="/save-list">
                <CartSummary />
              </PrivateRoute>
            </Col>
          </Row>
        </Switch>
      </div>
    </Router>
  )
}

export default App
