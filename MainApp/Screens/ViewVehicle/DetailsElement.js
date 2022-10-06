import React from 'react';
import { Box, Text } from 'native-base';
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
         <Text color={color} >{title}</Text>
         <NativeImage
            source={image}
            style={{ width: 28, height: 28, tintColor : color, }}
         />
         <Text color={color} fontSize={18} fontWeight={'bold'} >{value}</Text>
      </Box>
   );
}


const classes = StyleSheet.create({
   outerParent: {
      width: 100, // Have to change in later
      height: 100, // Have to change in later when setting to the parent.
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      margin: 10,
   },
});