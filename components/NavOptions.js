import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from "@rneui/themed";

const data = [
  {
    id:"123",
    title:"Get a ride",
    image:"https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id:"456",
    title:"Order Food",
    image:"https://links.papareact.com/28w",
    screen: "EatsScreen",
  }
]

const NavOptions = () => {
  return (
    <FlatList
    data = {data}
    horizontal
    keyExtractor = {(item)=>item.id}
    renderItem = {({item}) => (
      <TouchableOpacity style = {tw`bg-gray-200 p-2 pl-6 m-4 pt-4 w-40`}>
        <View>
          <Image
            style ={{
              width:120, 
              height:120, 
              resizeMode:"contain"
            }}
          source = {{uri: item.image}}
          />
        <Text style = {tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
        <Icon />
        </View>
      </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})