import React, { useCallback } from "react";
import FastImage from "react-native-fast-image";

import {
  GestureHandlerRootView,
  RectButton,
  Swipeable,
} from "react-native-gesture-handler";
import styles from "./styles";

/**
 * Interface to the Swipeable componenent by RN Gesture Handler
 * Can configure swipe actions for horizontal moving with a predefined layout
 * Just pass the image to show and the onPress callback for the desired swipe
 * direction
 *
 * @param left  `{ image: <source>, onPress: function, onOpen?: function }`
 * @param right `{ image: <source>, onPress: function, onOpen?: function }`
 */
const HorizontalSwipeableActions = (
  { children, left = null, right = null },
  swipeableRef
) => {
  const renderLeftActions = useCallback(() => {
    if (!left?.image || !left?.onPress) return;

    return (
      <RectButton
        style={[styles.swipeContainer, { flexDirection: "row-reverse" }]}
        onPress={left.onPress}
      >
        <FastImage source={left.image} style={styles.swipeIcon} />
      </RectButton>
    );
  }, [left]);

  const renderRightActions = useCallback(() => {
    if (!right?.image || !right?.onPress) return;

    return (
      <RectButton
        style={[styles.swipeContainer, { flexDirection: "row-reverse" }]}
        onPress={right.onPress}
      >
        <FastImage source={right.image} style={styles.swipeIcon} />
      </RectButton>
    );
  }, [right]);

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={swipeableRef}
        friction={2}
        overshootLeft={false}
        overshootRight={false}
        onSwipeableLeftOpen={left?.onOpen}
        onSwipeableRightOpen={right?.onOpen}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
      >
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default React.forwardRef(HorizontalSwipeableActions);
