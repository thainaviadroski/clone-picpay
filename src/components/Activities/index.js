import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Container, 
  Header,
  Title,
  Card, 
  CardHeader,
  CardBody,
  Desciption,
  Bold,
  Avatar, 
  UserName, 
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Acitons,
  Option,
  OptionLabel

 } from './styles';
import avatar from '../../images/avatar.png';

export default function Activities(){
  return (
    <Container>
      <Header>
        <Title>Atividades:</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Desciption>
            <Bold>Você</Bold> pagou a <Bold>@thaina.viadroski</Bold>
          </Desciption>
        </CardHeader>
       
        <CardBody>
          <UserName>
            Thainã Viadroski
          </UserName>
        </CardBody>

        <CardFooter>
          <Details>

            <Value>
              R$ 18,00
            </Value>

            <Divider />

            <Feather name="lock" color="#FFF"/>

            <Date> há 2 anos </Date>

          </Details>

          <Acitons>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF"/>
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={14} color="#FFF"/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Acitons>
        </CardFooter>
      </Card>
    </Container>
  );
}

 