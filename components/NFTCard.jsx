import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SHADOWS, SIZES  } from '../constants/theme'
import  assets  from '../constants/assets'
import LikeBtn, { PureBlackBtn } from './Buttons';
import { PureEndDate, PureNFTPrice, PureNFTTitle, PurePeople } from './NFTCardInfo'


const NFTCard = ({ data }) => {
    const navigation = useNavigation();


    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardImgContainer}>
                <Image source={data.image} style={styles.cardImg} resizeMode="cover"/>
                <LikeBtn imgUri={assets.heart} top={-230} right={16} bottom={190}/>
            </View>
            <View style={{ width: "100%", padding: SIZES.font }}>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: -40, justifyContent: 'space-between' }}>
                    <PurePeople />
                    <PureEndDate />
                </View>
                <View style={{ width: "100%", marginTop: 12}}>
                    <PureNFTTitle title={data.name} creator={data.creator} titleSize={SIZES.large} creatorSize={SIZES.small}/>
                </View>
                <View style={{ width: "100%", marginTop: 12, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    {/* <View style={styles.priceContainer}>
                        <Image 
                        source={assets.eth}
                        resizeMode="contain"
                        style={{ width:20, height:20, marginRight: 2 }}
                        />
                        <Text style={styles.priceTxt}>{data.price}</Text>
                    </View> */}
                    <PureNFTPrice price={data.price}/>
                    <PureBlackBtn minWidth={120} fontSize={SIZES.font} text="Place A Pid" pressHandler={() => navigation.navigate("Details", { data })}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
    },
    cardImgContainer: {
        width: "100%",
        height: 250,
    },
    cardImg: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
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

export default React.memo(NFTCard)