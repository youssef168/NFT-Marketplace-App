import { View, Text, Image } from 'react-native'
import React from 'react'
import LikeBtn from '../components/Buttons';
import assets from '../constants/assets';

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ height: 373, width: "100%", position: 'relative' }}>
      <Image source={data.image} resizeMode="cover" style={{ width: "100%", height: "100%" }}/>
      <LikeBtn imgUri={assets.heart} right={10} top={-360}/>
      <LikeBtn imgUri={assets.left} left={10} top={-360} pressHandler={() => navigation.goBack()}/>
    </View>
  )
}

export default React.memo(DetailsHeader)