import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const suscriptions = () => {
    
    const {id} = useLocalSearchParams<{id : string}>()
  return (
    <View>
      <Text>suscriptions</Text>
    </View>
  )
}

export default suscriptions