import { FlatList, NativeBaseProvider, VStack, Box, Divider, Container, HStack, Icon } from 'native-base';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Dashboard() {

  const data = [
    {
      id: 'v001',
      name: 'Isuzu Lorry',
      price: 90000,
      location: 'Colombo'
    },
    {
      id: 'v002',
      name: 'Mazda RVZ',
      price: 12323424,
      location: 'Panadura'
    },
    {
      id: 'v003',
      name: 'BMW 1000RR',
      price: 100236,
      location: 'India'
    },
  ];


  return (
    <NativeBaseProvider>
      <Text>Hello</Text>
      <FlatList contentContainerStyle={classes.parent} data={data} renderItem={({ item }) =>
        <Container style={classes.itemContainer}>
          <HStack style={classes.hStack} > 
            <Text style={classes.vehicleName} >{item.name}</Text>
            <VStack style={classes.vStack} >

              <Container>
                <Text>{item.location}</Text>
              </Container>
              <Container>
                <Text style={classes.price} >$ {item.price}</Text>
              </Container>
            </VStack>
          </HStack>
        </Container>
      } keyExtractor={item => item.id} >

      </FlatList>
    </NativeBaseProvider>);


}

const classes = StyleSheet.create({

  itemContainer: {
    backgroundColor: '#219ebc',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    borderRadius : 10,
    padding : 15
  },
  parent: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  vStack : {
    width:'50%',
    alignItems:'flex-end'
  },

  hStack : {
    alignItems : 'center',
  },

  vehicleName : {
    color : 'white',
    fontSize : 20,
    width : '50%',
    fontWeight : 'bold',
  },
  price : {
    fontSize : 18,
  }
});