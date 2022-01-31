import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 


export const Container = styled.ScrollView`
  flex:1;
  background-color: #F2F1F5;

`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;

  margin-top: 10px;
  margin-left: 15px;
  margin-bottom: 10px;

`;

export const Space1 = styled.View`
  height: 35px;
`;

export const PrincipalIcon = styled(Ionicons).attrs({
  name: 'information',
  size: 20,
  color: '#000'
})``
; 