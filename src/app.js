import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Paragraph } from '../src/Typography/Paragraph';
import { Title } from '../src/Typography/Title';
import { Container } from '../src/Core/Container';
import { Subtitle } from '../src/Typography/Subtitle';
import { YearSlider } from './Core/YearSlider';
import { NavButtons } from './Core/NavButtons';
import IntroductionPage from './Core/pages/IntroductionPage';
import FlightsAndCorona from './Core/pages/FlightsAndCorona';
import { InformationBox } from './Core/InformationBox';
import WhatIsNo2 from './Core/pages/WhatIsNo2';
import CompareAirportsPage from './Core/pages/CompareAirportsPage';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <IntroductionPage />
        <WhatIsNo2 />
        <FlightsAndCorona />
        <CompareAirportsPage />

        {/* <Container>
          <Title>Title </Title>
          <Subtitle>Subtitle </Subtitle>
          <Paragraph>Paragraph</Paragraph>
          <YearSlider />
          <nav>
            <NavButtons>Amsterdam</NavButtons>
            <NavButtons>Dubai</NavButtons>
            <NavButtons>Rome</NavButtons>
            <NavButtons>Shanghai</NavButtons>
          </nav>
        </Container> */}
      </div>

      // <Container>
      //   <Title>Title </Title>
      //   <Subtitle>Subtitle </Subtitle>
      //   <Paragraph>Paragraph</Paragraph>
      //   <YearSlider />
      //   <nav>
      //     <NavButtons>Amsterdam</NavButtons>
      //     <NavButtons>Dubai</NavButtons>
      //     <NavButtons>Rome</NavButtons>
      //     <NavButtons>Shanghai</NavButtons>
      //   </nav>

      //   <InformationBox backgroundColor="green">
      //     <Subtitle>Box Subtitle </Subtitle>
      //     <Paragraph>Box Paragraph</Paragraph>
      //   </InformationBox>

      //   <InformationBox backgroundColor="red">
      //     <Subtitle>Box Subtitle </Subtitle>
      //     <Paragraph>Box Paragraph</Paragraph>
      //   </InformationBox>

      //   <InformationBox backgroundColor="white">
      //     <Subtitle>Box Subtitle </Subtitle>
      //     <Paragraph>Box Paragraph</Paragraph>
      //   </InformationBox>
      // </Container>
    );
  }
}

render(<App />, document.getElementById('app'));
