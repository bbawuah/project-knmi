import React from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { render } from 'react-dom';
import { Paragraph } from '../src/Typography/Paragraph';
import { Title } from '../src/Typography/Title';
import { Container } from '../src/Core/Container';
import { Subtitle } from '../src/Typography/Subtitle';
import { YearSlider } from './Core/YearSlider';
import { NavButtons } from './Core/NavButtons';
import { LineChart } from './Core/D3/LineChart';
import IntroductionPage from './Core/pages/IntroductionPage';
import FlightsAndCorona from './Core/pages/FlightsAndCorona';
import { InformationBox } from './Core/InformationBox';

function App() {
  const width = 500,
    height = 350,
    margin = 20;
  const data = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 10 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 20 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 30 },
    { name: 'July', value: 0 },
    { name: 'Aug', value: 20 },
    { name: 'Sep', value: 100 },
    { name: 'Oct', value: 55 },
    { name: 'Nov', value: 60 },
    { name: 'Dec', value: 80 },
  ];

  return (
    <Container>
      <Title>Title </Title>
      <Subtitle>Subtitle </Subtitle>
      <Paragraph>Paragraph</Paragraph>
      <YearSlider />
      <LineChart data={data} width={width} height={height} margin={margin} />
      <IntroductionPage />
      <FlightsAndCorona />
      <nav>
        <NavButtons>Amsterdam</NavButtons>
        <NavButtons>Dubai</NavButtons>
        <NavButtons>Rome</NavButtons>
        <NavButtons>Shanghai</NavButtons>
      </nav>
    </Container>
  );
}

render(<App />, document.getElementById('app'));
