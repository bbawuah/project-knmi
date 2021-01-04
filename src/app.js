import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Paragraph } from '../src/Typography/Paragraph';
import { Title } from '../src/Typography/Title';
import { Container } from '../src/Core/Container';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Title>React </Title>
        <Paragraph>Test</Paragraph>
      </Container>
    );
  }
}

render(<App />, document.getElementById('app'));
