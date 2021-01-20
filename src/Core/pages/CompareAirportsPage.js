import React, { Fragment, useState, useEffect } from 'react'
import { Subtitle } from '../../../src/Typography/Subtitle'
import { Paragraph } from '../../Typography/Paragraph'
import { InformationBox } from '../InformationBox'
import { Trail } from '../Animations/Trail'
import { VisibilitySensor } from '../VisibilitySensor'
import { Map } from '../Map'
import { TextContainer } from '../TextContainer'
import coordinates from './../../../public/assets/coordinates.json'
import { FlightsLineChart } from '../D3/FlightsLineChart'
import { BarChart } from '../D3/BarChart'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

function CompareAirportsPage() {
  const [checked, setChecked] = useState(false)
  const [month, setMonth] = useState('01')

  return (
    <section className="compare-page-container">
      <section className="compare-page-content">
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => {
            return (
              <div className="title">
                <Trail
                  title="Vergelijken van de luchthaven"
                  color="#F70123"
                  isVisible={isVisible}
                />
                <Subtitle>2019 & 2020</Subtitle>
              </div>
            )
          }}
        </VisibilitySensor>
        <div className="text-section">
          <div>
            <Paragraph>
              Hebben de luchthavens nou echt zo veel impact op het NO2 gehalte
              in de lucht? Om deze vraag te beantwoorden gaan we kijken naar 4
              grote luchthavens in Europa. Door de Corona pandemie is het
              luchtverkeer in veel landen zwaar gedaald. Met behulp van deze
              daling kunnen wij de NO2 waardes voor en na de daling in het
              luchtverkeer bekijken. De door ons gekozen luchthavens komen
              allemaal uit verschillende landen en hebben dus ook te maken met
              verschillende Corona maatregelen. Ben jij ook zo benieuwd wat hier
              uitkomt? Lees dan snel verder!
            </Paragraph>
          </div>
          <img
            className="compare-illustration"
            src="./assets/koffers.svg"
          ></img>
        </div>

        <section className="compare-chart">
          <h3>Luchtverkeer tijdens de lockdown</h3>
          <FlightsLineChart />
        </section>
        <div className="multiple-compare-charts">
          <Paragraph>
            <strong>Tropomi </strong>
          </Paragraph>
          <Paragraph>
            Hieronder zie je de verspreiding en hoeveel van de NO2 in de lucht.
            Met gebruik van de filters kan je filteren op maand en jaar.{' '}
          </Paragraph>
          <section className="multiple-charts">
            {coordinates.airports.map((item, index) => {
              return (
                <div key={index} className="map-wrapper">
                  <Paragraph>
                    <strong>{item.city}</strong>
                  </Paragraph>

                  <div className="map-container">
                    <Map
                      coordinates={item}
                      zoomLevel={8}
                      dates={[
                        `${!checked ? '2019' : '2020'}-${month}-01`,
                        `${!checked ? '2019' : '2020'}-${month}-28`,
                      ]}
                    />
                  </div>
                </div>
              )
            })}
          </section>
        </div>
        <div className="date-dropdown">
          <label htmlFor="months">
            <Paragraph>
              <strong>Kies een maand:</strong>
            </Paragraph>
          </label>
          <select
            id="months"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="01">Januari</option>
            <option value="02">Febuari</option>
            <option value="03">Maart</option>
            <option value="04">April</option>
            <option value="05">Mei</option>
            <option value="06">Juni</option>
            <option value="07">Juli</option>
            <option value="08">Augustus</option>
            <option value="09">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <Paragraph>
            <strong>Kies een jaar:</strong>
          </Paragraph>

          <div className="slider-container">
            <span className="paragraph">2019</span>
            <Toggle
              defaultChecked={checked}
              icons={false}
              onChange={() => setChecked(!checked)}
            />
            <span className="paragraph">2020</span>
          </div>
        </div>
      </section>
    </section>
  )
}

export default CompareAirportsPage
