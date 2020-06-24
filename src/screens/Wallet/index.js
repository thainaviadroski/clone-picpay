import React, {useState} from 'react';
import {Switch} from 'react-native';
import { Feather,MaterialCommunityIcons,FontAwesome,AntDesign } from '@expo/vector-icons';

import {Wrapper, 
  Header, 
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardDescription,
  CreditCard,
  CardAction,
  CardActionLabel,
  TicketContainer, 
  TicketButton,
  TicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Home(){
  const [isVisible, setIsVisible]= useState(false);
  const [useBalance, setUseBalence]= useState(false);

  function handleToggleVisibility(){
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance(){
    setUseBalence((prevState) => !prevState);
  }

  return (
    <Wrapper>
       <Header 
          colors={
            useBalance
            ? ['#52E78C','#1AB563']
            : ['#D3D3D3','#868686']
          }
        >
        <HeaderContainer>

          <Title>Saldo Picpay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible? '0,00' : '----'}</Bold>       
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye': 'eye-off'} size={28} color="#FFF"/>
            </EyeButton>

          </BalanceContainer>
          <Info>
            Seu saldo está rendedo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={30} color="#FFF" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#FFF" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
       </Header>

       <UseBalance>
         <UseBalanceTitle> User saldo ao pagar </UseBalanceTitle>

         <Switch 
            value={useBalance}
            onValueChange={handleToggleUseBalance}
         />
       </UseBalance>

       <PaymentMethods>
         <PaymentMethodsTitle>
           Forma de pagamento
         </PaymentMethodsTitle>

          <Card>
            <CardBody>

              <CardDetails>

                <CardTitle>
                  Cadastre seu cartão de crédito.
                </CardTitle>

                <CardDescription>
                  Cadastre um cartão de crédito para poder fazer gamentos mesmo quando não tiver saldo no seu PicPay.
                </CardDescription> 

              </CardDetails>    

              <CreditCard source={creditCard} resizeMode="contain"/>    

            </CardBody>           
            <CardAction>
              <AntDesign name="pluscircleo" size={28} color="#1AB563" />
              <CardActionLabel>Adicionar cartão de crédito</CardActionLabel>
            </CardAction>   
          </Card>
          <TicketContainer>
            <TicketButton>
              <MaterialCommunityIcons name="ticket-outline" size={20} color="#1AB563"/>
              <TicketLabel>User código promocional</TicketLabel>
            </TicketButton>
          </TicketContainer>
       </PaymentMethods>

    </Wrapper>
  );
}



