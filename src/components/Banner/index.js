import React from 'react';

import { Container, Details, Image,Title, Description } from './styles';

import img13 from '../../images/13.png';
export default function Banner() {
  return (
    <Container>
      <Details>
        <Title> Cobre um amigo</Title>
        <Description>
          Mantenha suas percerias em dia, use o PicPay para fazer uma cobrança.
        </Description>
        <Title> Cobrar agora</Title>
      </Details>
      <Image source={img13}/>
    </Container>
  );
}

