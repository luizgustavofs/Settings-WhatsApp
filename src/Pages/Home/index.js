import React from 'react';

import { Container, Title } from './styles';
import Greetings from '../../../components/Greetings/Greetings';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/Button';

import StarredMessages from '../../../assets/StarredMessages.png'
import Linked from '../../../assets/Linked.png'
import Account from '../../../assets/Account.png'
import Chats from '../../../assets/Chats.png'
import Notifications from '../../../assets/Notifications.png'
import Payments from '../../../assets/Payments.png'
import StorageData from '../../../assets/StorageData.png'
import Help from '../../../assets/Help.png'
import TellFriend from '../../../assets/TellFriend.png'

const Home = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Title>Settings</Title>
      <Greetings/>
      <Button text="Starred Messages" onPress={() => navigation.navigate('StarredMessage')} space image={StarredMessages}/>
      <Button text="Linked Messages" onPress={() => navigation.navigate('LinkedMessages')} image={Linked}/>
      <Button text="Account" onPress={() => navigation.navigate('Account')} space image={Account}/>
      <Button text="Chats" onPress={() => navigation.navigate('Chat')} image={Chats}/>
      <Button text="Notifications" onPress={() => navigation.navigate('Notifications')} image={Notifications}/>
      <Button text="Payments" onPress={() => navigation.navigate('Payments')} image={Payments}/>
      <Button text="Storage Data" onPress={() => navigation.navigate('StorageData')} image={StorageData}/>
      <Button text="Help" onPress={() => navigation.navigate('Help')} space image={Help}/>
      <Button text="Tell a Friend" onPress={() => navigation.navigate('TellFriend')} image={TellFriend}/>
    </Container>
  )
}

export default Home;