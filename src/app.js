import 'regenerator-runtime/runtime'
import React, { useState } from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import IntroductionPage from './Core/pages/IntroductionPage'
import FlightsAndCorona from './Core/pages/FlightsAndCorona'
import WhatIsNo2 from './Core/pages/WhatIsNo2'
import CompareAirportsPage from './Core/pages/CompareAirportsPage'
import { WhatIsEffect } from './Core/pages/WhatIsEffect'
import { Amsterdam } from './Core/pages/Amsterdam'
import { London } from './Core/pages/London'
import { Rome } from './Core/pages/Rome'
import { Madrid } from './Core/pages/Madrid'
import { NavButtons } from './Core/NavButtons'

const App = () => {
  const [city, setCity] = useState('amsterdam')
  return (
    <div>
      <IntroductionPage />
      <WhatIsNo2 />
      <WhatIsEffect />
      <FlightsAndCorona />
      <CompareAirportsPage />
      <nav className="cities-menu">
        <ul>
          <li
            style={{
              backgroundColor: city === 'amsterdam' ? '#003e1f' : '#73ba9b',
            }}
            onClick={() => setCity('amsterdam')}
          >
            <NavButtons>Amsterdam</NavButtons>
          </li>
          <li
            style={{
              backgroundColor: city === 'london' ? '#003e1f' : '#73ba9b',
            }}
            onClick={() => setCity('london')}
          >
            <NavButtons>Londen</NavButtons>
          </li>
          <li
            style={{
              backgroundColor: city === 'rome' ? '#003e1f' : '#73ba9b',
            }}
            onClick={() => setCity('rome')}
          >
            <NavButtons>Rome</NavButtons>
          </li>
          <li
            style={{
              backgroundColor: city === 'madrid' ? '#003e1f' : '#73ba9b',
            }}
            onClick={() => setCity('madrid')}
          >
            <NavButtons>Madrid</NavButtons>
          </li>
        </ul>
      </nav>

      {selectedCity(city)}
    </div>
  )

  function selectedCity(city) {
    switch (city) {
      case 'amsterdam':
        return <Amsterdam />
        break
      case 'london':
        return <London />
        break
      case 'rome':
        return <Rome />
        break
      case 'madrid':
        return <Madrid />
        break
    }
  }
}

render(<App />, document.getElementById('app'))
