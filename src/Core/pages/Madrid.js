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
import 'react-toggle/style.css'

export const Madrid = () => {
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
                        title="Madrid"
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
                  Vanaf 3 maart tot april was er een intelligente lockdown in
                  Nederland. Men moest zoveel mogelijk proberen thuis te blijven
                  en niet naar buitenland reizen. Voor rezigers vanuit het
                  buitenland geldt het dringende advies om niet naar Nederland
                  te reizen tenzij het noodzakelijk is. Dit heeft natuurlijk
                  enorme gevolgen voor het luchtverkeer.
                </Paragraph>
              </div>
            </div>
            <img className="cities-page-image" src="./assets/madrid.png"></img>
          </div>
          <div className="cities-page-line-chart-container">
            <div className="cities-page-info-box-left-container">
              <InformationBox backgroundColor="green">
                <Subtitle>TITLE</Subtitle>
                <Paragraph>
                  De Vliegtuigbewegingen van Schiphol zijn in 2020 met 89,9%
                  gedaald ten opzichte van 2019
                </Paragraph>

                <Paragraph>2019: 41.892</Paragraph>
                <Paragraph>2020: 4.242</Paragraph>
              </InformationBox>
            </div>
            <NO2LineChart />
          </div>
          <section className="cities-page-measures-section">
            <article>
              <Paragraph>
                <strong>Maatregelen in Madrid</strong>
              </Paragraph>
              <ul>
                <li>
                  <Paragraph>
                    Reis niet naar het buitenland en boek niet voor de periode
                    tot medio maart
                  </Paragraph>
                </li>
              </ul>
            </article>

            <div className="cities-page-info-box-right-container">
              <InformationBox backgroundColor="red">
                <div>
                  <Subtitle>TITLE</Subtitle>
                  <Paragraph>
                    De Vliegtuigbewegingen van Schiphol zijn in 2020 met{' '}
                    <strong>89,9% gedaald</strong> ten opzichte van 2019
                  </Paragraph>

                  <Paragraph>
                    2019:<strong> 41.892</strong>
                  </Paragraph>
                  <Paragraph>
                    2020: <strong>4.242</strong>
                  </Paragraph>
                </div>
                <BarChart />
              </InformationBox>
            </div>
          </section>
          <section className="cities-page-map">
            <Map coordinates={coordinates.airports[3]} zoomLevel={10} />
            <div className="slider-container">
              <span>2019</span>
              <Toggle
                defaultChecked={checked}
                icons={false}
                onChange={() => setChecked(!checked)}
              />
              <span>2020</span>
            </div>
          </section>
        </section>
      </TextContainer>
    </section>
  )
}
