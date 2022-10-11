import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import FoucsedStatusBar from '../components/FoucsedStatusBar';
import { PureBlackBtn } from '../components/Buttons';
import { SHADOWS, SIZES } from '../constants/theme';
import BidData from '../components/BidData';
import DetailsHeader from '../components/DetailsHeader';
import { SubInfo } from '../components/NFTCardInfo';
import InnerDetails from '../components/InnerDetails';
import DetailsText from '../components/DetailsText';

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const { data } = route.params

  return (
    <React.Fragment>
        <FoucsedStatusBar backgroundColor="transparent" barStyle="dark-content" />
        <View style={{
           width: "100%",
           position: "absolute",
           bottom: 0,
           paddingVertical: SIZES.font,
           justifyContent: "center",
           alignItems: "center",
           zIndex: 1,
           
        }}>
          <PureBlackBtn minWidth={170} fontSize={SIZES.large} text="Place a bid" {...SHADOWS.dark}/>
        </View>
        <FlatList 
          data={data.bids}
          renderItem={({ item }) => <BidData bid={item}/> }
          keyExtractor={(item ) => item.id}
          contentContainerStyle={{
            paddingBottom: SIZES.extraLarge * 3
          }}
          ListHeaderComponent={() => (
            <React.Fragment>
                <DetailsHeader data={data} navigation={navigation}/>
                <SubInfo />
                <View style={{paddingHorizontal: SIZES.font}}>
                  <InnerDetails data={data}/>
                  <DetailsText data={data}/>
                </View>
            </React.Fragment>
          )}
        />
    </React.Fragment>
  )
}

export default Details