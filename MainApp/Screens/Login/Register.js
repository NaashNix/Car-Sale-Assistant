import React from 'react';
import { StyleSheet, Appearance } from 'react-native';
import { VStack, Heading, NativeBaseProvider, Input, Button, HStack, FormControl, WarningOutlineIcon,Box, Text, Divider } from 'native-base';

export default function Register(props) {

   const navigate = (props) => {
      props.navigation.navigate('Dashboard');
   }

   return (
      <NativeBaseProvider>
         <Box w={'100%'} alignItems={'center'} marginTop={5} >
            <Text marginBottom={5} color={'#7E7878'} fontSize={'lg'} >Create account to get started!</Text>
            <Divider w={'75%'} />
         </Box>
         
         <VStack style={styles.parent} space={4} alignItems="center" >
            <FormControl isInvalid={false} w="100%">
               <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                  Full Name
               </FormControl.Label>
               <Input w='100%' fontSize={14} placeholder="John Smith" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>
            

            <FormControl isInvalid={false} w="100%">
               <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                 Your Email
               </FormControl.Label>
               <Input w='100%' fontSize={14} placeholder="sample@our.com" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>


            <FormControl isInvalid={false} w="100%">
               <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                  Username
               </FormControl.Label>
               <Input w='100%' fontSize={14} placeholder="Only Letters (A-z)" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>


            <FormControl isInvalid={false} w="100%">
               <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                  Password
               </FormControl.Label>
               <Input w='100%' fontSize={14} placeholder="Must be 4 characters." focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>


            <HStack space={4} >
               <Button style={styles.button} variant={'subtle'}  isLoadingText={"Loading.."} colorScheme={'primary'} >Create Account</Button>
               <Button style={styles.button} variant={'subtle'} colorScheme={'secondary'} onPress={ () => {navigate(props)} } >Dashboard</Button>
            </HStack>
         </VStack >
      </NativeBaseProvider>
   );
}

const styles = StyleSheet.create({
   parent : {
      marginTop:'5%',
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
