import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'; 


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-width: 0.5px;
  border-color: #cecece;

  background-color: #fff;

  padding: 15px;
  height: 64px;
`;


export const Profile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  
`;

export const ProfilePhoto = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 50px;
`;

export const ProfileInfo = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-size: 24px;
`;

export const Status = styled.Text`
  color: #8B8B8B;
`;

export const QrCode = styled.TouchableOpacity`
  border-radius: 50px;

  background-color: #F1F2F5;

  height: 40px;
  width: 40px;

  align-items: center;
  justify-content: center;
`;
export const QrIcon = styled(FontAwesome).attrs({
  name: 'qrcode',
  size: 24,
  color: '#095FAB'

})``;
