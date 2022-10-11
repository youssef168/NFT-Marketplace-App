import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'

const DetailsText = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100))
    const [more, setMore] = useState(false)

    useEffect(() => {
        console.log(text)
    }, [text])
  return (
    <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
      <Text style={{
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
      }}>
        Description
      </Text>
      <View style={{ 
        marginVertical: SIZES.small
       }}>
          <Text style={{
            color: COLORS.secondary,
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            lineHeight: SIZES.extraLarge
          }}>
            {text}
            {!more && "..."}
            <Text
              style={{ 
                color: COLORS.primary,
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
                }}
                onPress={() => {
                  if (!more) {
                    setMore(true)
                    setText(data.description)
                  } else {
                    setMore(false)
                    setText(data.description.slice(0, 100))
                  }
                }}
            >
              {more ? "Show Less" : "Read More"}
            </Text>
          </Text>
      </View>
    </View>
  )
}

export default DetailsText