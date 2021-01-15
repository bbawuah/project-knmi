import React from 'react'
import { Trail } from '../Animations/Trail'

function IntroductionPage() {
  return (
    <section className="introduction-container">
      <Trail
        isVisible={true}
        title="Hoe een virus de lucht schoner maakt"
        color="#fff"
      />
    </section>
  )
}

export default IntroductionPage
