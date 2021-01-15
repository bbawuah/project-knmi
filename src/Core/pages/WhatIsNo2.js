import React, { Fragment } from 'react'
import { Title } from '../../Typography/Title'
import { Paragraph } from '../../Typography/Paragraph'
import { Subtitle } from '../../Typography/Subtitle'
import { Trail } from '../Animations/Trail'
import { VisibilitySensor } from '../VisibilitySensor'

function WhatIsNo2() {
  return (
    <section className="what-is-no2-container">
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
                    verbrandingsprocessen op hele hoge temperaturen bijvoorbeeld
                    bij motoren van auto’s, vliegtuigen en in fabrieken.
                  </Paragraph>
                  <img className="no2-img" src="./assets/watisno2.svg"></img>
                </Fragment>
              )
            }}
          </VisibilitySensor>
        </div>
        <div className="right-section">
          <Paragraph>
            Hierbij komt er eerst stikstofmonoxide (NO) vrij en daarna door een
            verdere reactie NO2.
          </Paragraph>

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
            <Paragraph>
              Bij verbranding op hoge temperaturen ontstaan er chemische
              reacties tussen stikstof (N) en zuurstof (O2) uit de lucht.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsNo2
