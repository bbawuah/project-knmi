import React from 'react';
import { Paragraph } from '../../../src/Typography/Paragraph';
import { Title } from '../../../src/Typography/Title';
import { Container } from '../../../src/Core/Container';

function IntroductionPage() {
  return (
    <section className="introduction-container">
      <Title>
        Hoe een <span className="text-color-red">virus </span>de lucht
        <span className="text-color-green"> schoner </span>
        maakt
      </Title>
    </section>
  );
}

export default IntroductionPage;
