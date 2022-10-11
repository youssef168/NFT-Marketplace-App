import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/core'

/**
 * add properties to the status bar when the page is foucsed
 */
const FoucsedStatusBar = (props) => {
  const isFocused = useIsFocused()


  return isFocused ? <StatusBar animated={true} {...props} /> : null
}

export default FoucsedStatusBar