import { View, Text, StyleSheet, Image } from "react-native";
import React, { Fragment } from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants/theme";
import assets from "../constants/assets";

const NFTTitle = ({ title, creator, titleSize, creatorSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: creatorSize,
          color: COLORS.primary,
        }}
      >
        by {creator}
      </Text>
    </View>
  );
};

const NFTPrice = ({ price }) => {
  return (
    <View style={styles.priceContainer}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text style={styles.priceTxt}>{price}</Text>
    </View>
  );
};

const PeopleImg = ({ imgUrl, index }) => {
  return (
    <Fragment>
      <Image
        style={{
          marginLeft: index === 0 ? 0 : -SIZES.font,
          width: 48,
          height: 48,
        }}
        resizeMode="contain"
        source={imgUrl}
      />
    </Fragment>
  );
};

const People = () => {
  return (
    <Fragment>
      <View style={styles.containerImgs}>
        {[assets.person01, assets.person02, assets.person03].map(
          (person, index) => (
            <PeopleImg imgUrl={person} index={index} key={index} />
          )
        )}
      </View>
    </Fragment>
  );
};

const EndDate = () => {
  return (
    <Fragment>
      <View style={styles.containerDate}>
        <Text style={styles.dateText}>Ending in</Text>
        <Text style={styles.dateNum}>12h 30m</Text>
      </View>
    </Fragment>
  );
};

// Exports A Memoized Version Of Components

export const PurePeople = React.memo(People);

export const PureEndDate = React.memo(EndDate);

export const PureNFTTitle = React.memo(NFTTitle);

export const PureNFTPrice = React.memo(NFTPrice);

export const SubInfo = React.memo(() => {
  return (
    <Fragment>
      <View
        style={{
          width: "100%",
          paddingHorizontal: SIZES.font,
          marginTop: -SIZES.extraLarge,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <PurePeople />
        <PureEndDate />
      </View>
    </Fragment>
  );
});

// Set Styles For Components
const styles = StyleSheet.create({
  peopleImg: {
    width: 48,
    height: 48,
  },
  containerImgs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  containerDate: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.font,
    borderRadius: SIZES.font,
    elevation: 1,
    maxWidth: "50%",
    ...SHADOWS.dark,
  },
  dateText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
  },
  dateNum: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
  },
  creatorTxt: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  priceTxt: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
});
