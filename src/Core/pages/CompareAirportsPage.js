import React from 'react'
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

function CompareAirportsPage() {
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
          <InformationBox backgroundColor="red">
            <Subtitle>TITLE</Subtitle>
            <Paragraph>
              De Vliegtuigbewegingen van Schiphol zijn in 2020 met 89,9% gedaald
              ten opzichte van 2019
            </Paragraph>

            <Paragraph>2019: 41.892</Paragraph>
            <Paragraph>2020: 4.242</Paragraph>
          </InformationBox>
        </div>

        <section className="compare-chart">
          <h3>Luchtverkeer tijdens de lockdown</h3>
          <FlightsLineChart />
        </section>

        <section className="multiple-charts">
          {coordinates.airports.map((item, index) => {
            return (
              <div key={index} className="map-container">
                <Paragraph>
                  <strong>{item.city}</strong>
                </Paragraph>
                <Map coordinates={item} zoomLevel={8} />

                <label htmlFor="months">
                  <Paragraph>Kies een maand:</Paragraph>
                </label>
                <select id="months">
                  <option value="Januari">Januari</option>
                  <option value="Febuari">Febuari</option>
                  <option value="Maart">Maart</option>
                  <option value="April">April</option>
                  <option value="Mei">Mei</option>
                  <option value="Juni">Juni</option>
                  <option value="Juli">Juli</option>
                  <option value="Augustus">Augustus</option>
                  <option value="September">September</option>
                  <option value="Oktober">Oktober</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            )
          })}
        </section>
      </section>
    </section>
  )
}

export default CompareAirportsPage
