import React from 'react'
import './App.css'
import Main from './containers/Main'
// import { Row, Col } from 'antd'
// import Header from './components/Header'
import MyList from './containers/CartList/CartList'
import CartSummary from './containers/CartSummary/CartSummary'
import Login from './containers/Signin/Signin'
import Signup from './containers/Signup/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className="App">
        {/* <Row gutter={[8, 32]}>
          <Col xs={24}>
            <Header />
          </Col>
        </Row> */}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/create_account">
            <Signup/>
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/mylist">
            <MyList />
          </Route>
          <Route exact path="/save-list">
            <CartSummary />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
