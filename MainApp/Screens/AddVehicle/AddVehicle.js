import { Box, NativeBaseProvider, ScrollView, Text, VStack, Input, FormControl, WarningOutlineIcon, Divider, HStack } from 'native-base';
import { Image as NativeImage, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton, Button } from 'react-native-paper';


export default function() {
   return (
      <NativeBaseProvider>
         <ScrollView>
            <Box style={classes.imageUploadContainer} >
               <IconButton
                  style={classes.imageButton}
                  icon="plus"
                  iconColor='white'
                  size={40}
                  onPress={() => console.log('Pressed')}
               />
               <Text style={{ color: '#444444' }} >Upload Image</Text>
            </Box>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} marginLeft={5} marginRight={5} >

               <Button
                  icon={() => (
                     < NativeImage
                        source={require('MainApp/assets/images/icons8-bus-48.png')}
                        style={{ width: 18, height: 18, tintColor: 'black' }} />
                  )}
                  mode="contained-tonal"
                  onPress={() => console.log('Pressed')}
                  height={40}
                  buttonColor={'#C1C1C1'}
                   labelStyle={{ fontWeight: 'bold' }}
                   marginRight={5}
               >

                  Bus
               </Button>

               <Button
                  icon={() => (
                     < NativeImage
                        source={require('MainApp/assets/images/icons8-dirt-bike-60.png')}
                        style={{ width: 18, height: 18, tintColor: 'black' }} />
                  )}
                  mode="contained-tonal"
                  onPress={() => console.log('Pressed')}
                  height={40}
                  buttonColor={'#C1C1C1'}
                  labelStyle={{ fontWeight: 'bold' }} marginRight={5}
               >
                  Bike
               </Button>

               <Button
                  icon={() => (
                     < NativeImage
                        source={require('MainApp/assets/images/icons8-car-60.png')}
                        style={{ width: 18, height: 18, tintColor: 'black' }} />
                  )}
                  mode="contained-tonal"
                  onPress={() => console.log('Pressed')}
                  height={40}
                  buttonColor={'#C1C1C1'} labelStyle={{ fontWeight: 'bold' }} marginRight={5} >
                  Car
               </Button>

               <Button
                  icon={() => (
                     < NativeImage
                        source={require('MainApp/assets/images/lorry-50.png')}
                        style={{ width: 18, height: 18, tintColor: 'black' }} />
                  )}
                  mode="contained-tonal"
                  onPress={() => console.log('Pressed')}
                  height={40}
                  buttonColor={'#C1C1C1'} labelStyle={{ fontWeight: 'bold' }} marginRight={5} >
                  Lorry
               </Button>

               <Button
                  icon={() => (
                     < NativeImage
                        source={require('MainApp/assets/images/icons8-suv-48.png')}
                        style={{ width: 18, height: 18, tintColor: 'black' }} />
                  )}
                  mode="contained-tonal"
                  onPress={() => console.log('Pressed')}
                  height={40}
                  buttonColor={'#C1C1C1'} labelStyle={{ fontWeight: 'bold' }} marginRight={5} >
                  SUV
               </Button>

               <Button
                  icon={() => (
                     < NativeImage
                        source={require('MainApp/assets/images/threewheel-48.png')}
                        style={{ width: 18, height: 18, tintColor: 'black' }} />
                  )}
                  mode="contained-tonal"
                  onPress={() => console.log('Pressed')}
                  height={40}
                  buttonColor={'#C1C1C1'} labelStyle={{ fontWeight: 'bold' }} marginRight={5} >
                  Three-Wheel
               </Button>


            </ScrollView>
            <VStack style={{ margin: 20 }}>

               <FormControl isInvalid={false} w="100%">
                  <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                     Vehicle Name
                  </FormControl.Label>
                  <Input w='100%' fontSize={14} placeholder="Enter Vehicle Name" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                     Can't be empty.
                  </FormControl.ErrorMessage>
               </FormControl>
               <FormControl isInvalid={false} w="100%">
                  <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                     Owner Name
                  </FormControl.Label>
                  <Input w='100%' fontSize={14} placeholder="Vehicle Owner Name" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                     Can't be empty.
                  </FormControl.ErrorMessage>
               </FormControl>
               <FormControl isInvalid={false} w="100%">
                  <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                     Price
                  </FormControl.Label>
                  <Input w='100%' fontSize={14} placeholder="Owner's Price" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                     Can't be empty.
                  </FormControl.ErrorMessage>
               </FormControl>
               <Divider marginTop={5} marginBottom={5} />

               <FormControl isInvalid={false} w="100%">
                  <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                     Location
                  </FormControl.Label>
                  <Input w='100%' fontSize={14} placeholder="Vehicle Location" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                     Can't be empty.
                  </FormControl.ErrorMessage>
               </FormControl>

               <FormControl isInvalid={false} w="100%">
                  <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                     Telephone Number
                  </FormControl.Label>
                  <Input w='100%' fontSize={14} placeholder="+(94)702053777" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                     Can't be empty.
                  </FormControl.ErrorMessage>
               </FormControl>

               <FormControl isInvalid={false} w="100%">
                  <FormControl.Label _text={{ fontWeight: 'bold', fontSize: '15' }}>
                     Milage
                  </FormControl.Label>
                  <Input w='100%' fontSize={14} placeholder="Vehicle Meter Reading" focusOutlineColor={'#7E7E7E'} backgroundColor={'#D9D9D9'} />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                     Can't be empty.
                  </FormControl.ErrorMessage>
               </FormControl>
               <HStack justifyContent={'flex-end'} >
                  <Button mode={'container'} buttonColor={'#16a085'} textColor={'white'} labelStyle={classes.buttonLabels} style={classes.addButton} >Add Vehicle</Button>
                  <Button mode={'outlined'} buttonColor={'#7f8c8d'} textColor={'white'} labelStyle={classes.buttonLabels} style={classes.addButton} >Back</Button>
               </HStack>   
            </VStack>
         </ScrollView>
      </NativeBaseProvider >
   );
}


const classes = StyleSheet.create({
   imageUploadContainer: {
      backgroundColor: '#D9D9D9'
      , margin: 20
      , justifyContent: 'center'
      , alignItems: 'center'
      , borderRadius: 10
      , height: 175
      ,
   },
   imageButton: {
      backgroundColor: '#7E7E7E'
   },
   vehicleTypeWrapper: {
      backgroundColor: '#79BBC1',
      alignItems: 'center',
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 5,
      width: '25%'
   },
   addButton : {
      borderRadius : 5,
      marginTop : 15,
      marginLeft : 10
   },
   buttonLabels : {
      fontWeight : 'bold',
   },
});