import React, { Fragment } from 'react'
import { Spring } from 'react-spring/renderprops.cjs'
import { Paragraph } from '../../../src/Typography/Paragraph'
import { InformationBox } from '../../Core/InformationBox'
import { RedPersonImage } from '../RedPersonImage'
import { GreenPersonImage } from '../GreenPersonImage'
import { Subtitle } from '../../../src/Typography/Subtitle'
import { Trail } from '../Animations/Trail'
import { VisibilitySensor } from '../VisibilitySensor'

function FlightsAndCorona() {
  const redPersonCount = Array(49).fill('green')
  redPersonCount.push('red')

  return (
    <section className="flights-and-corona">
      <div className="flights-and-corona-wrapper">
        <div>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => {
              return (
                <Fragment>
                  <div className="flights-and-corona-title">
                    <Trail
                      title="Vliegverkeer en Corona"
                      color="#fff"
                      isVisible={isVisible}
                    />
                  </div>
                  <Paragraph>
                    Met de groei van het vliegverkeer is de hele wereld
                    inmiddels bezaaid met vliegvelden. Er zijn er al meer dan
                    44.000, van hele grote tot hele kleine die eigenlijk
                    nauwelijks de titel &apos;vliegveld mogen krijgen.
                  </Paragraph>
                  <Paragraph>
                    Al deze vliegvelden bij elkaar stoten een enorm aantal NO2
                    uit. Naast de uitstoot van de vlucht zelf, rijden er veel
                    bussen, auto’s en andere vervoersmiddelen naar deze locatie.
                    Wij willen dit onderzoeken en gaan kijken naar de NO2
                    uitstoot van steden met een luchthaven. We hebben een aantal
                    steden onderzocht.
                  </Paragraph>

                  <div className="information-container">
                    <div>
                      <InformationBox backgroundColor="white">
                        <Subtitle>2019 </Subtitle>
                        <Paragraph>
                          <span>68.948.849</span> aantal vluchten wereldwijd
                        </Paragraph>

                        <Paragraph>
                          Dit zijn gemiddeld <span>188.901</span> vluchten per
                          dag
                        </Paragraph>
                      </InformationBox>
                    </div>
                    <div>
                      <InformationBox backgroundColor="white">
                        <Subtitle>2020 </Subtitle>
                        <Paragraph>
                          In <span>april 2020</span> reisden bijna 134 duizend
                          passagiers van en naar de vijf nationale luchthavens,
                          <span>98 procent minder</span> dan in april 2019
                        </Paragraph>
                      </InformationBox>
                    </div>
                  </div>
                </Fragment>
              )
            }}
          </VisibilitySensor>
        </div>

        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => {
            return (
              <div className="persons-and-years">
                <div className="person-container">
                  {redPersonCount.map((item, index) => {
                    if (item == 'green') {
                      return (
                        <Spring
                          key={index}
                          delay={110 * index}
                          to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                              ? 'translateY(0)'
                              : 'translateY(100px)',
                          }}
                        >
                          {(props) => (
                            <GreenPersonImage styling={{ ...props }} />
                          )}
                        </Spring>
                      )
                    } else {
                      return (
                        <Spring
                          key={index}
                          delay={110 * index}
                          to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                              ? 'translateY(0)'
                              : 'translateY(100px)',
                          }}
                        >
                          {(props) => <RedPersonImage styling={{ ...props }} />}
                        </Spring>
                      )
                    }
                  })}
                </div>
                <div className="year-container">
                  <Subtitle>
                    <span>2019</span>
                  </Subtitle>
                  <Subtitle>
                    <span className="red">2020</span>
                  </Subtitle>
                </div>
              </div>
            )
          }}
        </VisibilitySensor>
      </div>
    </section>
  )
}

export default FlightsAndCorona
