import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme'

const LikeBtn = ({ imgUri, pressHandler, right, left, top, bottom }) => {
  return (
    <View>
      <TouchableOpacity
         style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: "absolute",
            borderRadius: SIZES.extraLarge,
            alignItems: "center",
            justifyContent: "center",
            ...SHADOWS.light,
            bottom: bottom,
            right: right,
            top: top,
            left: left
         }}
         onPress={pressHandler}
      >
        <Image source={imgUri} style={styles.btnImg} resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    btnStyle: {
      
    },
    btnImg: {
        width: 24,
        height: 24,
    }
})

export default React.memo(LikeBtn)

const BlackBtn = ({ minWidth, fontSize, pressHandler , text , ...props }) => {
  return (
    <View>
      <TouchableOpacity
         style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            ...props
         }}
         onPress={pressHandler}
      >
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const PureBlackBtn = React.memo(BlackBtn)