import React, { useState } from 'react'
import { Subtitle } from '../../Typography/Subtitle'
import { Paragraph } from '../../Typography/Paragraph'
import { InformationBox } from '../InformationBox'
import { Trail } from '../Animations/Trail'
import { VisibilitySensor } from '../VisibilitySensor'
import { Map } from '../Map'
import { TextContainer } from '../TextContainer'
import coordinates from '../../../public/assets/coordinates.json'
import { NO2LineChart } from '../D3/No2LineChart'
import { FlightsLineChart } from '../D3/FlightsLineChart'
import { BarChart } from '../D3/BarChart'
import Toggle from 'react-toggle'
import no2Data from '../../cities.json'
import aiportDataJson from '../../airportdata.json'
import 'react-toggle/style.css'

export const Madrid = () => {
  const data = no2Data[3]
  const aiportData = aiportDataJson[3]
  const [checked, setChecked] = useState(false)

  return (
    <section className="cities-page-container">
      <TextContainer>
        <section className="cities-page-content">
          <div className="cities-page-header">
            <div>
              <VisibilitySensor once partialVisibility>
                {({ isVisible }) => {
                  return (
                    <div className="title">
                      <Trail
                        title={data.city}
                        color="#F70123"
                        isVisible={isVisible}
                      />
                      <Subtitle>Madrid-Barajas</Subtitle>
                    </div>
                  )
                }}
              </VisibilitySensor>
              <div>
                <Paragraph>
                  Spanjaarden zitten sinds 14 maart thuis, uitgezonderd diegenen
                  die een essentieel beroep uitoefenen. Mensen mogen alleen de
                  straat op om eten te kopen of voor een medisch consult. Mensen
                  mochten niet meer vrij door het land reizen nadat de
                  maatregelen officieel zijn gepubliceerd. De regering heeft de
                  buitengrenzen en vliegvelden niet gesloten maar het vervoer
                  werd wel gehalveerd.
                </Paragraph>
              </div>
            </div>
            <img className="cities-page-image" src="./assets/madrid.png"></img>
          </div>
          <div className="cities-page-line-chart-container">
            <NO2LineChart data={data} />
          </div>
          <section className="cities-page-measures-section">
            <article>
              <Paragraph>
                <strong>Maatregelen in Madrid</strong>
              </Paragraph>
              <ul>
                {data.measures.map((measure, index) => {
                  return (
                    <li key={index}>
                      <Paragraph>{measure.description}</Paragraph>
                    </li>
                  )
                })}
              </ul>
            </article>

            <div className="cities-page-info-box-right-container">
              <InformationBox backgroundColor="red">
                <div>
                  <Subtitle>Vluchten</Subtitle>
                  <Paragraph>
                    De Vliegtuigbewegingen van Madrid Adolfo Suarez
                    Madrid-Barajas zijn in 2020 met{' '}
                    <strong>
                      {100 -
                        Math.floor(
                          (aiportData.quarters[1] / aiportData.quarters[0]) *
                            100
                        )}
                      % gedaald
                    </strong>{' '}
                    ten opzichte van 2019
                  </Paragraph>

                  <Paragraph>
                    2019:<strong> {aiportData.quarters[0]}</strong>
                  </Paragraph>
                  <Paragraph>
                    2020: <strong>{aiportData.quarters[1]}</strong>
                  </Paragraph>
                </div>
                <BarChart data={aiportData} />
              </InformationBox>
            </div>
          </section>

          <div>
            <Paragraph>
              <strong>Tropomi </strong>
            </Paragraph>
            <Paragraph>
              Hieronder zie je de verspreiding en hoeveel van de NO2 in de
              lucht. De periode die hier wordt getoond is de maand waarin de
              maatregelen in gang zijn gegaan. Met behulp van de filterknop
              onderaan de pagina kan je filteren tussen 2019 en 2020.{' '}
            </Paragraph>
            <section className="cities-page-map">
              <Map
                coordinates={coordinates.airports[3]}
                zoomLevel={10}
                dates={[
                  `${!checked ? '2019' : '2020'}-0${data.monthOfMeasures}-01`,
                  `${!checked ? '2019' : '2020'}-0${data.monthOfMeasures}-28`,
                ]}
              />
              <div className="slider-container">
                <span className="paragraph">2019</span>
                <Toggle
                  defaultChecked={checked}
                  icons={false}
                  onChange={() => setChecked(!checked)}
                />
                <span className="paragraph">2020</span>
              </div>
            </section>
          </div>
        </section>
      </TextContainer>
    </section>
  )
}
