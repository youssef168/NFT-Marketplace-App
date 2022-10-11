import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { PureNFTPrice, PureNFTTitle } from './NFTCardInfo'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import assets from '../constants/assets'

const InnerDetails = ({ data }) => {
  
  return (
    <React.Fragment>
      <View style={styles.innerDetails}>
         <PureNFTTitle title={data.name} creator={data.creator} titleSize={SIZES.extraLarge} creatorSize={SIZES.font}/>
        <PureNFTPrice price={data.price}/>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    innerDetails: {
        display: 'flex',
        marginTop: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceTxt: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary,
    }
})

export default React.memo(InnerDetails)