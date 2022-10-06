import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { Image as NativeImage, StyleSheet } from 'react-native';
import noImage from 'MainApp/assets/images/ImageNotFound.png';

export default function DetailsElement({
   color = "black",
   outerColor = "blue",
   title = "-",
   value = "-",
   image = noImage
}) {
   return (
      <Box style={classes.outerParent} backgroundColor={outerColor} >
         
         <VStack alignItems={'center'} w={'20%'} >
            <Text color={color} >{title}</Text>
            <NativeImage
               source={image}
               style={{ width: 28, height: 28, tintColor: color, }}
            />
         </VStack>
         
         <Text color={color} fontSize={22} fontWeight={'bold'} >{value}</Text>
      </Box>
   );
}


const classes = StyleSheet.create({
   outerParent: {
      width: '90%', // Have to change in later
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      margin: 10,
      padding : 15,
      flexDirection : 'row'
   },
});