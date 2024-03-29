import { useMemo, Fragment } from "react";
import { ActivityIndicator, StyleSheet, View, Dimensions } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import DefaultStatusBar from "../../components/DefaultStatusBar";
import ScaledImage from "../../components/ScaledImage";

import Footer from "../Footer";
import { HEADER_HEIGHT } from "../Header/styles";

// @ts-expect-error TS(2307): Cannot find module '../../../../../assets/backgrou... Remove this comment to see the full error message
import backgroundSpace from "../../../../../assets/background.png";

import { colors } from "../../utils/styles";

const screenWidth = Dimensions.get("screen").width;

const MainContainer = ({
  loading = false,
  showBackgroundImage = true,
  children,
  FooterComponent = Footer,
  style: containerStyle = {},
}: any) => {
  const isFocused = useIsFocused();

  const Container = useMemo(() => {
    return showBackgroundImage
      ? ({ children }: any) => (
          <View style={styles.imageContainer}>{children}</View>
        )
      : ({ children }: any) => <Fragment>{children}</Fragment>;
  }, []);

  return (
    <Container>
      {isFocused && <DefaultStatusBar />}
      {showBackgroundImage && (
        <ScaledImage
          source={backgroundSpace}
          style={styles.image}
          width={screenWidth}
        />
      )}
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <ActivityIndicator
            color={colors.secondary}
            size="large"
            style={{ flex: 1 }}
          />
        ) : (
          <View style={[styles.body, containerStyle]}>{children}</View>
        )}
      </SafeAreaView>
      <FooterComponent />
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingHorizontal: 0,
    backgroundColor: "#fff",
  },
  image: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  body: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
  },
});

export default MainContainer;
