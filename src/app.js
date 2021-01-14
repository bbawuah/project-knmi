import React from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { Paragraph } from '../src/Typography/Paragraph'
import { Title } from '../src/Typography/Title'
import { Container } from '../src/Core/Container'
import { Subtitle } from '../src/Typography/Subtitle'
import { YearSlider } from './Core/YearSlider'
import { NavButtons } from './Core/NavButtons'
import IntroductionPage from './Core/pages/IntroductionPage'
import FlightsAndCorona from './Core/pages/FlightsAndCorona'
import { InformationBox } from './Core/InformationBox'
import WhatIsNo2 from './Core/pages/WhatIsNo2'
import CompareAirportsPage from './Core/pages/CompareAirportsPage'

const timeStamps = {
  vijftienMaart: ['1584230400', '1584316799'],
}

const App = () => {
  return (
    <div>
      <IntroductionPage />
      <WhatIsNo2 />
      <FlightsAndCorona />
      <CompareAirportsPage />
      <ToggleImage foto1="foto1.jpeg" foto2="foto2.jpeg" />
      <MapContainer />
    </div>
  )
}

render(<App />, document.getElementById('app'))
