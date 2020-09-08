import React from 'react'
import './App.css'
import ItemList from './containers/ItemList'
import { Row, Col } from 'antd'
import Header from './components/Header'
import MyList from './containers/CartList/CartList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className="App">
        <Row gutter={[8, 32]}>
          <Col xs={24}>
            <Header />
          </Col>
        </Row>
        <Switch>
          <Route exact path="/">
            <ItemList />
          </Route>
          <Route path="/mylist">
            <MyList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
