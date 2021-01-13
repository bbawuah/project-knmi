import 'regenerator-runtime/runtime'
import React, { useEffect } from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { Paragraph } from '../src/Typography/Paragraph'
import { Title } from '../src/Typography/Title'
import { Container } from '../src/Core/Container'
import { Subtitle } from '../src/Typography/Subtitle'
import { YearSlider } from './Core/YearSlider'
import { NavButtons } from './Core/NavButtons'
import { ToggleImage } from './Core/ToggleImage'
import IntroductionPage from './Core/pages/IntroductionPage'
import FlightsAndCorona from './Core/pages/FlightsAndCorona'
import { InformationBox } from './Core/InformationBox'
import { MapContainer } from './Core/Map'

const mapStyles = {
  width: '100%',
  height: '100%',
}

const timeStamps = {
  vijftienMaart: ['1584230400', '1584316799'],
}

const App = () => {
  return (
    <div>
      <IntroductionPage />
      <FlightsAndCorona />
      <ToggleImage foto1="foto1.jpeg" foto2="foto2.jpeg" />
      <MapContainer />
    </div>
  )
}

render(<App />, document.getElementById('app'))
