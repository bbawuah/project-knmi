import React, { Fragment } from 'react'
import { Paragraph } from '../../Typography/Paragraph'
import { Trail } from '../Animations/Trail'
import { TextContainer } from '../TextContainer'
import { VisibilitySensor } from '../VisibilitySensor'

function WhatIsNo2() {
  return (
    <section className="what-is-no2-container">
      <TextContainer>
        <div className="what-is-no2-content">
          <div className="left-section">
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => {
                return (
                  <Fragment>
                    <Trail
                      title="Wat is NO2?"
                      color="#fff"
                      isVisible={isVisible}
                    />
                    <Paragraph>
                      NO2 (stikstofdioxide) is een gas dat ontstaat bij allerlei
                      verbrandingsprocessen op hele hoge temperaturen
                      bijvoorbeeld bij motoren van auto’s, vliegtuigen en in
                      fabrieken.
                    </Paragraph>
                    <img className="no2-img" src="./assets/watisno2.svg"></img>
                  </Fragment>
                )
              }}
            </VisibilitySensor>
          </div>
          <div className="right-section">
            <div className="no2-container">
              <article>
                <p className="chemicals-long">Stikstof</p>
                <p className="chemicals-short">N</p>
                <p className="chemicals-formula">N = N</p>
              </article>
              <hr></hr>
              <article>
                <p className="chemicals-long">Stikstofdioxide</p>
                <p className="chemicals-short">NO2</p>
                <p className="chemicals-formula">O - N = O</p>
              </article>
            </div>
            <div className="o2-container">
              <hr></hr>
              <p className="chemicals-long">Zuurstof</p>
              <p className="chemicals-short">O2</p>
              <p className="chemicals-formula pb">O = O</p>
              <p className="paragraph pb">
                Bij deze verbranding ontstaan er chemische reacties tussen het
                stikstof (N) en het zuurstof in de lucht (O2) uit de lucht.
              </p>
              <Paragraph>
                Door deze chemische reactie ontstaat stikstofmonoxide (NO).
                Hierna vindt een verdere reactie plaats waaruit stikstofdioxide
                (NO2) ontstaat.
              </Paragraph>
            </div>
          </div>
        </div>
      </TextContainer>
    </section>
  )
}

export default WhatIsNo2
