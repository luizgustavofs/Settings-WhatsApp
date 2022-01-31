import React from 'react';
import { View } from 'react-native';
import { 
  Container, 
  Box, 
  BoxLeft,
  ViewIcon,
  PrincipalIcon, 
  BoxName, 
  ArrowIcon,
} from './styles';

const Button = ({text, space, onPress, Icon, image }) => {
  return (
  
  <Container space={space}> 
    <Box onPress={onPress}>
      <BoxLeft>
      {Icon && <Icon/>}

        <ViewIcon>
          <PrincipalIcon source={image}/>
        </ViewIcon>

        <BoxName>{text}</BoxName>

      </BoxLeft>
      <ArrowIcon/>
    </Box>
  </Container>
)
}

export default Button;