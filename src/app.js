import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Paragraph } from '../src/Typography/Paragraph';
import { Title } from '../src/Typography/Title';
import { Subtitle } from '../src/Typography/Subtitle';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title>Title </Title>
        <Subtitle>Subtitle </Subtitle>
        <Paragraph>Paragraph</Paragraph>
        <SwitchButtons>Amsterdam</SwitchButtons>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
