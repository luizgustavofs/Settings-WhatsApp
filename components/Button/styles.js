import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'; 

export const Container = styled.View`
  margin-top: ${({space}) => space ? 30 : 0 }px;
`;

export const Box = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  border-width: 0.5px;
  border-color: #cecece;

  height: 50px;

  background-color: #fff;
  padding: 15px
`;

export const BoxLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewIcon = styled.View`
  height: 30px;
  width: 30px;

  justify-content: center;
  align-items: center;


  border-radius: 8px;

`;

export const PrincipalIcon = styled.Image`
width: 30px;
height: 30px;
`; 

export const BoxName = styled.Text`
  font-size: 16px;
  margin-left: 10px;

`
; 

export const ArrowIcon = styled(FontAwesome).attrs({
  name: 'angle-right',
  size: 24,
  color: '#c1c1c1'
})`

`;
