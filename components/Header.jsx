import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import assets from '../constants/assets'

const Header = ({ onSearch }) => {
  return (
    <View style={styles.headerContianer}>
        <View style={styles.brandContainer}>
            <Image source={assets.logo} resizeMode="contain" style={{ width: 90, height: 30 }}/>
            <View style={styles.profilePicContainer}>
                <Image 
                  source={assets.person01}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
                <Image source={assets.badge} resizeMode="contain" style={styles.badge}/>
            </View>
        </View>
        <View style={{ marginVertical: SIZES.font }}>
            <Text style={styles.hiMsg}>Hello Youssef 👋</Text>
            <Text style={styles.title}>Let’s find masterpiece Art</Text>
        </View>
        <View style={styles.searchContainer}>
            <Image source={assets.search} resizeMode="contain" style={styles.searchIco} />
            <TextInput placeholder='Search NFTs' style={{ flex: 1 }} onChangeText={onSearch}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContianer: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    },
    brandContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profilePicContainer: {
        width: 45,
        height: 45,
    },
    badge: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        width: 25,
        height: 25,
    },
    hiMsg: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
    },
    title: {
        fontFamily: FONTS.bold,
        marginTop: SIZES.font,
        color: COLORS.white,
        fontSize: SIZES.large,
    },
    searchContainer: {
        marginTop: SIZES.font,
        width: '100%',
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
    },
    searchIco: {
        width: 20, 
        height: 20,
        marginRight: SIZES.base
    }
})

export default Header