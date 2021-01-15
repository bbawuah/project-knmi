import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops.cjs'
import { Title } from '../../../src/Typography/Title'
import { Paragraph } from '../../../src/Typography/Paragraph'
import { Trail } from '../Animations/Trail'
import { VisibilitySensor } from '../VisibilitySensor'

const effecten = [
  {
    title: 'Zure regen',
    text:
      'Door zure regen worden gebouwen aangetast en veranderd de zuurtegraad van water en aarde',
  },
  {
    title: 'Hoge zuurtegraad van aarde',
    text: 'Planten stoppen met groeien en soms met bestaan.',
  },
  {
    title: 'Hoge zuurtegraad van water',
    text: 'Eieren van vissen komen niet uit en planten stoppen met groeien.',
  },
  {
    title: 'Aantasting ecosysteem',
    text:
      'In het ecosysteem staat alles in verband met elkaar. Als er iets veranderd bij een deel van het ecosysteem heeft dit gevolgen voor een ander deel. Door is het belangrijk om een stabiel ecosysteem te behouden',
  },
  {
    title: 'Aantasting gebouwen',
    text: 'Gebouwen worden aangetast door de zuurtegraad van de regen.',
  },
  {
    title: 'Oog irritatie',
    text: 'sneller onstoken ogen door irritatie.',
  },
  {
    title: 'COPD en Astma',
    text:
      'Beide ziektes maken ademen lastiger omdat waardoor alledaagse activiteiten vermoeiender worden. ',
  },
  {
    title: 'Hart- en vaatziekten ',
    text:
      'Een verzameling van ziektes die in vloed hebben op het hart en de vaten met grote gevolgen. ',
  },
  {
    title: 'Verhoogde gevoeligheid voor infecties',
    text:
      'Het imuumsusteem wordt minder sterk. Er wordt minder goed gereageerd op schadelijke bacterieënen en virussen.',
  },
]

const EffectTextContainer = ({ children, number, styling }) => {
  return (
    <div
      className="wat-is-effect-text-container"
      id={`wat-is-effect-text-container-${number}`}
      style={styling}
    >
      {children}
    </div>
  )
}

export const WhatIsEffect = () => {
  return (
    <section className="what-is-effect-container">
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => {
          return (
            <div className="what-is-effect-header-container">
              <Trail
                isVisible={isVisible}
                title="Wat is het effect van NO2?"
                color="#f70123"
              />
              <Paragraph className="what-is-effect-subtitle">
                Een lucht vervuild door NO2 heeft veel effect op de natuur en de
                gezondheid van mensen.{' '}
              </Paragraph>
            </div>
          )
        }}
      </VisibilitySensor>
      <div className="what-is-effect-content-container">
        {effecten.map((item, index) => {
          return (
            <VisibilitySensor once partialVisibility key={index}>
              {({ isVisible }) => {
                return (
                  <Spring
                    delay={110}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(100px)',
                    }}
                  >
                    {(props) => (
                      <EffectTextContainer
                        number={index}
                        styling={{ ...props }}
                      >
                        <h3>{item.title}</h3>
                        <Paragraph>{item.text}</Paragraph>
                      </EffectTextContainer>
                    )}
                  </Spring>
                )
              }}
            </VisibilitySensor>
          )
        })}
      </div>
    </section>
  )
}

EffectTextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  number: PropTypes.number.isRequired,
  styling: PropTypes.object.isRequired,
}
