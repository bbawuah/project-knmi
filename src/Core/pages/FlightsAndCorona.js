import React from 'react';
import { Paragraph } from '../../../src/Typography/Paragraph';
import { Title } from '../../../src/Typography/Title';
import { Container } from '../../../src/Core/Container';
import { InformationBox } from '../../Core/InformationBox';
import { RedPersonImage } from '../RedPersonImage';
import { GreenPersonImage } from '../GreenPersonImage';
import { Subtitle } from '../../../src/Typography/Subtitle';

function FlightsAndCorona() {
  const redPersonCount = Array(49).fill(5);
  const greenPersonCount = Array(1).fill(5);
  return (
    <section className="flights-and-corona">
      <div>
        <Title>VLIEGVERKEER EN CORONA</Title>
        <Paragraph>
          Met de groei van het vliegverkeer is de hele wereld inmiddels bezaaid
          met vliegvelden. Er zijn er al meer dan 44.000, van hele grote tot
          hele kleine die eigenlijk nauwelijks de titel 'vliegveld' mogen
          krijgen.
        </Paragraph>
        <Paragraph>
          Al deze vliegvelden bij elkaar stoten een enorm aantal NO2 uit. Naast
          de uitstoot van de vlucht zelf, rijden er veel bussen, auto’s en
          andere vervoersmiddelen naar deze locatie. Wij willen dit onderzoeken
          en gaan kijken naar de NO2 uitstoot van steden met een luchthaven. We
          hebben een aantal steden onderzocht.
        </Paragraph>

        <div className="information-container">
          <InformationBox backgroundColor="white">
            <Subtitle>2019 </Subtitle>
            <Paragraph>
              <span>68.948.849</span> aantal vluchten wereldwijd
            </Paragraph>

            <Paragraph>
              Dit zijn gemiddeld <span>188.901</span> vluchten per dag
            </Paragraph>
          </InformationBox>

          <InformationBox backgroundColor="white">
            <Subtitle>2020 </Subtitle>
            <Paragraph>
              In <span>april 2020</span> reisden bijna 134 duizend passagiers
              van en naar de vijf nationale luchthavens,
              <span>98 procent minder</span> dan in april 2019
            </Paragraph>
          </InformationBox>
        </div>
      </div>

      <div className="person-container">
        {redPersonCount.map((item, index) => {
          return <RedPersonImage key={index} />;
        })}

        {greenPersonCount.map((item, index) => {
          return <GreenPersonImage key={index} />;
        })}
      </div>
    </section>
  );
}

export default FlightsAndCorona;
