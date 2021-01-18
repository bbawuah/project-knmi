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
import { Amsterdam } from './Core/pages/Amsterdam'
import { NavButtons } from './Core/NavButtons'
import { Map } from './Core/Map'

const App = () => {
  return (
    <div>
      <IntroductionPage />
      <WhatIsNo2 />
      <WhatIsEffect />
      <FlightsAndCorona />
      <CompareAirportsPage />
      <nav className="cities-menu">
        <ul>
          <li>
            <NavButtons>Amsterdam</NavButtons>
          </li>
          <li>
            <NavButtons>Londen</NavButtons>
          </li>
          <li>
            <NavButtons>Rome</NavButtons>
          </li>
          <li>
            <NavButtons>Madrid</NavButtons>
          </li>
        </ul>
      </nav>
      <Amsterdam />
    </div>
  )
}

render(<App />, document.getElementById('app'))
