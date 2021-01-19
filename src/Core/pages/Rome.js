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
import 'react-toggle/style.css'

export const Rome = () => {
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
                        title="Rome"
                        color="#F70123"
                        isVisible={isVisible}
                      />
                      <Subtitle>Roma-Fiumicino</Subtitle>
                    </div>
                  )
                }}
              </VisibilitySensor>
              <div>
                <Paragraph>
                  Italië heeft de Corona pandemie zeker gevoeld… Vanaf 8 maart
                  tot april was er een strenge lockdown in geheel Italië.
                  Inwoners mochten amper naar buiten toe, laat staan naar het
                  buitenland. Wat zal dit voor gevolgen hebben op het NO2
                  gehalte rondom de hoofdstad Rome?
                </Paragraph>
              </div>
            </div>
            <img className="cities-page-image" src="./assets/rome.png"></img>
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
            <NO2LineChart data={no2Data[3]} />
          </div>
          <section className="cities-page-measures-section">
            <article>
              <Paragraph>
                <strong>Maatregelen in Rome</strong>
              </Paragraph>
              <ul>
                <li>
                  <Paragraph>
                    Reis niet naar het buitenland en boek niet voor de periode
                    tot medio maart
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    Voor reizen vanuit het buitenland geldt het dringende advies
                    om niet naar Nederland te reizen, tenzij noodzakelijk.
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
            <Map coordinates={coordinates.airports[2]} zoomLevel={10} />
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
