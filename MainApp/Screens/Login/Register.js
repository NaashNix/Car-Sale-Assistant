import React, { Children, useState } from 'react';
import { StyleSheet, Appearance } from 'react-native';
import { VStack, Heading, NativeBaseProvider, Input, HStack, FormControl, WarningOutlineIcon, Box, Text, Divider } from 'native-base';
import { Button } from 'react-native-paper';

export default function Register(props) {

   const [name, setName] = useState("");
   const [email, setEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');


   const navigate = async() => {
      

      let formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);


      fetch('http://192.168.8.152:4000/user', {
         method: "POST",
         body: formData,
         headers: {
            'content-type': 'multipart/form-data',

         }

      })
         .then((response) => {
            console.log("successfully");
         }).catch((err) => {
            console.log(err);
            console.log("not successfully");
         })


      
      
   };

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
               <Input
                  value={name}
                  onChange={e => setName(e.nativeEvent.text)}
                  w='100%'
                  fontSize={14}
                  placeholder="John Smith"
                  focusOutlineColor={'#7E7E7E'}
                  backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>


            <FormControl isInvalid={false} w="100%">
               <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                  Your Email
               </FormControl.Label>
               <Input 
                  value={email}
                  onChange={e => setEmail(e.nativeEvent.text)}
                  w='100%' fontSize={14} placeholder="sample@our.com" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>


            <FormControl isInvalid={false} w="100%">
               <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                  Username
               </FormControl.Label>
               <Input value={username}
                  onChange={e => setUsername(e.nativeEvent.text)} w='100%' fontSize={14} placeholder="Only Letters (A-z)" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>


            <FormControl isInvalid={false} w="100%">
               <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                  Password
               </FormControl.Label>
               <Input value={password}
                  onChange={e => setPassword(e.nativeEvent.text)} w='100%' fontSize={14} placeholder="Must be 4 characters." focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Can't be empty.
               </FormControl.ErrorMessage>
            </FormControl>


            <HStack space={4} >
               <Button mode="contained" style={styles.addButton} buttonColor={'#16a085'} textColor={'white'} onPress={navigate} >Create</Button>
               <Button mode="contained" style={styles.addButton} buttonColor={'grey'} textColor={'white'} onPress={() => console.log('Pressed')} >Back</Button>
            </HStack>
         </VStack >
      </NativeBaseProvider>
   );
}

const styles = StyleSheet.create({
   parent: {
      marginTop: '5%',
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
   addButton: {
      borderRadius: 5,
      marginTop: 15,
      marginLeft: 10
   },

});
