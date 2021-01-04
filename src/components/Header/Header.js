import React from 'react'
import Logo from '../../assets/logo.svg'
import { Row, Col, Typography, Badge } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './Header.module.css'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

const Header = (props) => {
  const [count, setCount] = React.useState(0)
  useFirestoreConnect([
    { collection: 'pinnedItems' }
  ])
  const state = useSelector(({ firestore: { ordered: { pinnedItems } } }) => pinnedItems)
  React.useEffect(() => {
    if (isLoaded(state)) {
      console.log(state)
      setCount(state.length)
    }
  }, [state])
  const linkData = [
    {
      id: 1, name: 'Grocery List', link: '/'
    },
    { id: 2, name: 'Pinned Items', link: '/pinneditems' },
    {
      id: 3, name: 'Your List', link: 'yourlist'
    }
  ]
  return (
    <header className={style.header}>
      <Row>
        <Col xs={12}>
          <Link to="/">
            <img src={Logo} alt="Grocelist" className={style.logo} />
          </Link>
        </Col>
        <Col xs={12} className={style.links}>
          {linkData.map(data => {
            if (data.id === 2) {
              return (
                <Link to={data.link} key={data.id}>
                  <Typography className={style.link}>
                    <Badge count={count} offset={[10, 2]}>{data.name}</Badge>
                  </Typography>
                </Link>
              )
            } else {
              return (
                <Link to={data.link} key={data.id}>
                  <Typography className={style.link}>
                    {data.name}
                  </Typography>
                </Link>
              )
            }
          })}
        </Col>
      </Row>
    </header>
  )
}

export default Header
