import React from 'react'
import { Subtitle } from '../../../src/Typography/Subtitle'
import { Paragraph } from '../../Typography/Paragraph'
import { InformationBox } from '../InformationBox'
import { Trail } from '../Animations/Trail'
import { VisibilitySensor } from '../VisibilitySensor'

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
                  color="#000"
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
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
              zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
              bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
              zethaak met letters nam en ze door elkaar husselde om een
              font-catalogus te maken. Het heeft niet alleen vijf eeuwen
              overleefT. toen een onbekende drukker een zethaak met letters nam
              en ze door elkaar husselde om een font-catalogus.
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
          <div className="chart"></div>
        </section>

        <section className="multiple-charts">
          <div>
            <p>Amsterdam</p>
            <div className="placeholder"></div>
          </div>
          <div>
            <p>Amsterdam</p>
            <div className="placeholder"></div>
          </div>
          <div>
            <p>Amsterdam</p>
            <div className="placeholder"></div>
          </div>
          <div>
            <p>Amsterdam</p>
            <div className="placeholder"></div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default CompareAirportsPage
