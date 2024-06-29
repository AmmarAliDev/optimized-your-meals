import React from 'react'
import Assets from '../assets'

import '../styles/header.css'

const { Images } = Assets
const { HeaderBackground } = Images

const Header: React.FC = () => (
  <header style={{ backgroundImage: `url(${HeaderBackground})` }}>
    <h1>Optimized Your Meal</h1>
    <p>
      Select Meal to Add in Week. You will be able to edit. modify and change
      the Meal Weeks.{' '}
    </p>
  </header>
)

export default Header
