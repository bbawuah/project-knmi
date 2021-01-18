import React from 'react'
import { Trail } from '../Animations/Trail'

function IntroductionPage() {
  return (
    <section className="introduction-container">
      <div className="introduction-title-container">
        <Trail
          isVisible={true}
          title="Hoe een virus de lucht schoner maakt"
          color="#fff"
        />
      </div>
    </section>
  )
}

export default IntroductionPage
