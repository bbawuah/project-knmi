import React from 'react'
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

export const Rome = () => {
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
            <NO2LineChart />
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
                <Subtitle>TITLE</Subtitle>
                <Paragraph>
                  De Vliegtuigbewegingen van Schiphol zijn in 2020 met 89,9%
                  gedaald ten opzichte van 2019
                </Paragraph>

                <Paragraph>2019: 41.892 </Paragraph>
                <Paragraph>2020: 4.242</Paragraph>
                <BarChart />
              </InformationBox>
            </div>
          </section>
          <section className="cities-page-map">
            <Map coordinates={coordinates.airports[2]} zoomLevel={10} />
          </section>
        </section>
      </TextContainer>
    </section>
  )
}
