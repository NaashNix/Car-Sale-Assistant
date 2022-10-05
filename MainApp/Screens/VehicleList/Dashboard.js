import { FlatList, NativeBaseProvider, VStack,Container, HStack } from 'native-base';
import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import {FAB} from 'react-native-paper';

export default function Dashboard(props) {

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

  const navigate = (props) => {
    props.navigation.navigate('AddVehicle');
  }

  return (
    <NativeBaseProvider>
      <Container style={classes.mainParent} >
        <Text style={classes.mainHeading} >Welcome!</Text>
      </Container>
      <FlatList contentContainerStyle={classes.parent} data={data} renderItem={({ item }) =>
        <Container style={classes.itemContainer}>
          <HStack style={classes.hStack} > 
            <Text style={classes.vehicleName} >{item.name}</Text>
            <VStack style={classes.vStack} >

              <HStack>
                <Text style={{color : 'white'}} >{item.location}</Text>
                <Image style={classes.locationIcon} source={require('MainApp/assets/images/icons8-visit-32.png')} />
              </HStack>
              <HStack style={{alignItems : 'center'}}>
                <Text style={classes.price} >$ {item.price}</Text>
                <Image style={[classes.locationIcon, classes.priceIcon]} source={require('MainApp/assets/images/icons8-us-dollar-circled-60.png')} />
              </HStack>
            </VStack>
          </HStack>
        </Container>
      } keyExtractor={item => item.id} >

      </FlatList>
      <FAB
        icon="plus"
        style={classes.fab}
        onPress={() => navigate(props) }
      />
    </NativeBaseProvider>);


}

const classes = StyleSheet.create({
  mainParent : {
    backgroundColor: '#83c5be',
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf : 'center',
    borderRadius : 10,
    marginTop : 10,
    paddingTop : 10,
    paddingBottom : 10,
    marginBottom : 20,
  },

  mainHeading : {
    fontWeight : 'bold',
    fontSize : 20,
    
  },

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
    fontSize : 22,
    width : '50%',
    fontWeight : 'bold',
  },
  price : {
    fontSize : 18,
    fontWeight : 'bold',
    color : 'white',
    
  },

  priceIcon : {
    marginLeft : 10,
  },

  locationIcon : {
    width : 20,
    height : 20,

  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
 
  },
});