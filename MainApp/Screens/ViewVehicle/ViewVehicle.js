import { Box, FlatList, NativeBaseProvider, Flex, Spacer, Text, ScrollView } from 'native-base';
import React from 'react';
import DetailsElement from './DetailsElement';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';


import meterIcon from 'MainApp/assets/images/meterIcon.png';
import priceIcon from 'MainApp/assets/images/icons8-us-dollar-circled-90.png';
import locationIcon from 'MainApp/assets/images/icons8-location-100.png';
import callIcon from 'MainApp/assets/images/icons8-call-100.png';
import ownerIcon from 'MainApp/assets/images/icons8-male-user-96.png';

export default function ViewVehicle(props) {

   const { message } = props.route.params;
   console.log(message);

   return (
      <NativeBaseProvider>

         <Box backgroundColor='#0096c7' width={'100%'} height={'40%'} >
            <Image
               source={require('MainApp/assets/images/pexels-mike-b-170811.jpg')}
               style={{ width: '100%', height: '80%' }}
            />
            <Box height={'20%'} justifyContent={'center'} >
               <Text color={'white'} fontWeight={'bold'} marginLeft={5} fontSize={25} >Honda Civic 2015</Text>
            </Box>
         </Box>
         <ScrollView>
            <Flex
               direction={'column'}
               mb={2} mt={1.5}
               ml={3} mr={3}
               alignItems={'center'}
               
            >
               <DetailsElement outerColor={'#D3EAE7'} color={'#2A9D8F'} value={'5942554 KM'} image={meterIcon} title={'Milage'} />
               <DetailsElement outerColor={'#EEDDC0'} color={'#FCA311'} value={'$ 890,596.00'} image={priceIcon} title={'Price'} />
               <DetailsElement outerColor={'#C5E1E9'} color={'#0081A7'} value={'Colombo'} image={locationIcon} title={'Location'} />
               <DetailsElement outerColor={'#DED0F1'} color={'#6A4C93'} value={'+(94)702053777'} image={callIcon} title={'Contact'} />
               <DetailsElement outerColor={'#ECCECF'} color={'#9E2A2B'} value={'Kavindu Chamikara'} image={ownerIcon} title={'Owner'} />
               
            </Flex>
         </ScrollView>
      </NativeBaseProvider>
   );
}


