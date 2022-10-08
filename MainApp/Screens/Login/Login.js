import React, {useState} from 'react'
import { StyleSheet, Image } from 'react-native';
import { VStack, Heading, NativeBaseProvider, Input, Button, HStack} from 'native-base';

export default function Login(props) {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const navigate = (props) => {
      props.navigation.navigate('Signup');
   }


  return (
     <NativeBaseProvider>
        <VStack style={styles.parent} space={4} alignItems="center" >
           <Image
              style={styles.tinyLogo}
              source={require('MainApp/assets/images/carImage.png')}
           />
           <Heading style={styles.heading} >Login</Heading>
           <Input value={username} onChange={(e) => e.nativeEvent.text} style={styles.input} variant={'underlined'} placeholder={'Username'} />
           <Input value={password} onChange={(e) => e.nativeEvent.text} style={styles.input} variant={'underlined'} placeholder={'Password'} />
           <HStack space={4} >
              <Button style={styles.button} variant={'subtle'} isLoadingText={"Loading.."} colorScheme={'primary'} >Login</Button>
              <Button style={styles.button} variant={'subtle'} colorScheme={'secondary'} onPress={() => navigate(props)} >Register</Button>
           </HStack>
        </VStack >
     </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
   parent: {
      marginTop: '10%',
      marginLeft: '5%',
      marginRight: '5%',
   },
   heading: {
      color: 'white',
      fontSize: 30,
   },
   input: {
      color: 'white',
      fontSize: 20,
   },
   button: {
      color: 'white',
      fontSize: 15,
   },
   tinyLogo : {
      width:200,
      height:200
   }

});
