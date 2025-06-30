import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

export default function Home() {
    const { colors } = useTheme();
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:colors.text}}>🏠 Anasayfa</Text>
    </View>
  )
}
