import React from 'react';
import { Paragraph } from '../../../src/Typography/Paragraph';
import { Title } from '../../../src/Typography/Title';
import { Container } from '../../../src/Core/Container';

function FlightsAndCorona() {
  return (
    <section className="flights-and-corona">
      <Title>VLIEGVERKEER EN CORONA</Title>
      <Paragraph>
        Met de groei van het vliegverkeer is de hele wereld inmiddels bezaaid
        met vliegvelden. Er zijn er al meer dan 44.000, van hele grote tot hele
        kleine die eigenlijk nauwelijks de titel 'vliegveld' mogen krijgen.
      </Paragraph>
      <Paragraph>
        Al deze vliegvelden bij elkaar stoten een enorm aantal NO2 uit. Naast de
        uitstoot van de vlucht zelf, rijden er veel bussen, auto’s en andere
        vervoersmiddelen naar deze locatie. Wij willen dit onderzoeken en gaan
        kijken naar de NO2 uitstoot van steden met een luchthaven. We hebben een
        aantal steden onderzocht.
      </Paragraph>
    </section>
  );
}

export default FlightsAndCorona;
