import React from 'react';
import { StyleSheet, Appearance } from 'react-native';
import { VStack, Heading, NativeBaseProvider, Input, HStack, FormControl, WarningOutlineIcon,Box, Text, Divider } from 'native-base';
import { Button } from 'react-native-paper';

export default function Register(props) {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   
   const navigate = (props) => {

      console.log(name+ " | "+email);
      // props.navigation.navigate('Dashboard');
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
               <Input value={setName()} w='100%' fontSize={14} placeholder="John Smith" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
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
               <Button mode="contained" style={styles.addButton}  buttonColor={'#16a085'} textColor={'white'} onPress={() => console.log('Pressed')} >Create</Button>
               <Button mode="contained" style={styles.addButton}  buttonColor={'grey'} textColor={'white'} onPress={() => console.log('Pressed')} >Back</Button>
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
   addButton: {
      borderRadius: 5,
      marginTop: 15,
      marginLeft: 10
   },
   
});
