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

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

render(<App />, document.getElementById('app'));
