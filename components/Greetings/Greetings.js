import React from 'react';

import { 
  Container,
  Profile,
  ProfilePhoto,
  ProfileInfo,
  Name,
  Status,
  QrCode,
  QrIcon,
} from './styles';

const Greetings = () => {
  return (
    <Container>
      <Profile>
        <ProfilePhoto source={{uri: "https://avatars.githubusercontent.com/u/64445221?v=4"}}/>
        <ProfileInfo>
          <Name>Luiz Gustavo</Name>
          <Status>Viver e Amar, essa é a questão!</Status>
        </ProfileInfo>
      </Profile>
      <QrCode>
        <QrIcon/>
      </QrCode> 
 
    </Container>
  );
}

export default Greetings;