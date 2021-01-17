import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import IntroductionPage from './Core/pages/IntroductionPage'
import FlightsAndCorona from './Core/pages/FlightsAndCorona'
import WhatIsNo2 from './Core/pages/WhatIsNo2'
import CompareAirportsPage from './Core/pages/CompareAirportsPage'
import { WhatIsEffect } from './Core/pages/WhatIsEffect'
import { Map } from './Core/Map'

/*
  const data = [
      {
          year: 2019,
          value: 41892,
      }, {
          year: '2020',
          value: 4242
      }]
*/
const timeStamps = {
  vijftienMaart: ['1584230400', '1584316799'],
}

const App = () => {
  return (
    <div>
      <IntroductionPage />
      <WhatIsNo2 />
      <WhatIsEffect />
      <FlightsAndCorona />
      <CompareAirportsPage />
      {/* <Map /> */}
    </div>
  )
}

render(<App />, document.getElementById('app'))
