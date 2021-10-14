import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
          My Personal Portfolio
      </SectionTitle>

      <SectionText>
        The pupose of me is being really good what I am doing...
      </SectionText>
      <Button onClieck={()=> window.location = 'https//google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

