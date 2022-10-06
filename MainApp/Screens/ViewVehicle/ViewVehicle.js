import { Container, NativeBaseProvider } from 'native-base';
import React from 'react';
import DetailsElement from './DetailsElement';

export default function ViewVehicle(props) {



   const {message} = props.route.params;
   console.log(message); 

   return (
      <NativeBaseProvider>
         
         <DetailsElement outerColor={'#D3EAE7'} color={'#2A9D8F'} value={5942554} title={'Milage'} />
      </NativeBaseProvider>
   );
}


