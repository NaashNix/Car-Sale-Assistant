import React from 'react';
import { StyleSheet, Appearance } from 'react-native';
import { VStack, Heading, NativeBaseProvider, Input, Button, HStack } from 'native-base';

export default function Register() {

   const colorSchema = Appearance.getColorScheme();
   console.log(colorSchema);

   return (
      <NativeBaseProvider>
         <VStack style={styles.parent} space={4} alignItems="center" >
            <Heading style={styles.heading} >Signup</Heading>
            <Input style={styles.input} variant={'underlined'} placeholder={'Full Name'} />
            <Input style={styles.input} variant={'underlined'} placeholder={'Email'} />
            <Input style={styles.input} variant={'underlined'} placeholder={'Username'} />
            <Input style={styles.input} variant={'underlined'} placeholder={'Password'} />
            <HStack space={4} >
               <Button style={styles.button} variant={'subtle'}  isLoadingText={"Loading.."} colorScheme={'primary'} >Create Account</Button>
               <Button style={styles.button} variant={'subtle'} colorScheme={'secondary'} >Back</Button>
            </HStack>
         </VStack >
      </NativeBaseProvider>
   );
}

const styles = StyleSheet.create({
   parent : {
      marginTop:'10%',
      marginLeft: '5%',
      marginRight: '5%',
   },
   heading : {
      color : 'white',
      fontSize:30,
   },
   input : {
      color:'white',
      fontSize:20,
   },
   button : {
      color : 'white',
      fontSize : 15,
   }
   
});
