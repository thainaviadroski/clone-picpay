import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background-color: #000;
  flex:1;
`;

export const Header = styled(LinearGradient)`
  height:300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const Title = styled.Text`
  color:#FFF;
  font-size:16px;
  font-weight: 900;
`;

export const BalanceContainer = styled.View`
  margin:10px 0;
  flex-direction:row;
  align-items:center;
`;

export const Value = styled.Text`
  font-size:62px;
  color: #FFF;
  font-weight:100;
`;

export const Bold = styled.Text`
  font-weight:bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left:10px;
`;

export const Info =styled.Text`
  margin:5px 0;
  color:#FFF;
  font-size:12px;
`;

export const Actions = styled.View`
  margin-top:30px;
  flex-direction:row;
`;

export const Action = styled.TouchableOpacity`
  flex-direction:row;
  margin-left:8px;
  width:150px;
  border:1px solid #FFF;
  padding:10px;
  border-radius: 25px;
  justify-content:center;
  align-items:center;
`;

export const ActionLabel = styled.Text`
  margin-left:10px;
  color:#FFF;
  font-size:16px;
`;

export const UseBalance = styled.View`
  background:#1c1c1E;
  height: 60px;
  flex-direction:row;
  padding:0 16px;
  justify-content:space-between;
  align-items:center;
`;

export const UseBalanceTitle = styled.Text`
  color:#FFF;
  font-size:16px;
  font-weight:500;
`;

export const PaymentMethods = styled.View`
  margin-top:25px;
  padding:0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #555555;
  text-transform:uppercase;
`;
export const Card= styled.View`
  background:#1E232A;
  margin-top:10px;
  padding:15px;
  border-radius:8px;
  /* flex-direction:row;
  justify-content:space-between;
  align-items:center; */
`;
export const CardBody = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

export const CardDetails= styled.View`
  flex:1;
  margin-right:20px;
`;

export const CardTitle = styled.Text`
  color:#FFF;
  font-size:18px;
  font-weight:700;
`;

export const CardDescription = styled.Text`
  color: #FFF;
  font-size:13px;
  margin-top:8px;
`;

export const CreditCard = styled.Image`
  width:65px;

`;

export const CardAction  = styled.TouchableOpacity`
  margin-top:26px;
  flex-direction:row;
  align-items:center;
`;

export const CardActionLabel = styled.Text`
  color:#1AB563;
  margin-left:10px;
  font-size:18px;
  font-weight:bold;
`;

export const TicketContainer = styled.View`
  margin-top:25px;
  align-items:center;
`;

export const TicketButton = styled.TouchableOpacity`
  flex-direction:row;
`;
export const TicketLabel = styled.Text`
  
  color:#1AB563;
  font-size:14px;
  text-decoration:underline;
`;

