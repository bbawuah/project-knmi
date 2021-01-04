import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Paragraph } from '../src/Typography/Paragraph';
import { Title } from '../src/Typography/Title';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title>React </Title>
        <Paragraph>Test</Paragraph>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
