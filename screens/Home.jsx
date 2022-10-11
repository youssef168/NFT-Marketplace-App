import React, { Fragment, useEffect, useState } from 'react'
import { COLORS } from '../constants/theme'
import FoucsedStatusBar from '../components/FoucsedStatusBar'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NFTData } from '../constants/database'
import NFTCard from '../components/NFTCard'
import Header from '../components/Header'

const Home = () => {
    const [nftData, setNftData] = useState(NFTData)

    const searchHandler = (text) => {
        // If There's No Text Will Return The Whole Data 
        if (!text) {
            setNftData(NFTData)
        } 
        // Create Variable To Store The Filtered Data  
        const filtered = NFTData.filter((val) => (
            val.name.toLowerCase().includes(text.toLowerCase())
        ))
        // If The Filtered Data Doesn't Identical With The Input Will Also Return The Whole Data! 
        if (!filtered) {
            setNftData(NFTData)
        } if (filtered) { // If It Does Will Return The Filtered Data
            setNftData(filtered)
        }
    }
    
  return (
    <Fragment>
        <FoucsedStatusBar backgroundColor={COLORS.primary} />
        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 1 }}>
                <FlatList 
                    data={nftData}
                    renderItem={({ item }) => (
                        <NFTCard data={item}/>
                    )}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={<Header onSearch={searchHandler}/>}
                />
                <View style={styles.bgSection}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
    bgSection: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    }
})

export default Home