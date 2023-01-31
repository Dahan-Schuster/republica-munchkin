import { useCallback, useMemo } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import FastImage from "react-native-fast-image";
import useGame from "../../../hooks/useGame";
import { Genders } from "../../../utils/static";

import { circulo } from "../../../utils/styles";
import genderIcons from "../../../imports/genders";

/**
 * Very similar to the ChangeGenderBtn, but it's a circle
 * I'm gonna refactor this later
 */
const PlayerGender = ({
  player,
  theme
}: any) => {
  // @ts-expect-error TS(2339): Property 'editPlayer' does not exist on type '{}'.
  const { editPlayer } = useGame();

  /**
   * Gets the icon source and index from the player.gender value
   */
  const [genderImgSource, currentGenderIndex] = useMemo(() => {
    const source = genderIcons[player?.gender] || genderIcons[Genders.PAN];
    const index = Object.entries(genderIcons).findIndex(
      ([, img]) => img === source
    );

    return [source, index];
  }, [player?.gender]);

  /**
   * Changes the current gender value to the next one in the Genders list
   */
  const handleChangeGender = useCallback(() => {
    if (!player.id) return;

    let newGenderIndex;
    if (currentGenderIndex === Object.keys(Genders).length - 1) {
      newGenderIndex = 0;
    } else {
      newGenderIndex = currentGenderIndex + 1;
    }

    editPlayer(player.id, { ...player, gender: newGenderIndex });
  }, [player, currentGenderIndex]);

  return (
    <TouchableWithoutFeedback onPress={handleChangeGender}>
      <View style={[styles.container, { borderColor: theme.colors.primary }]}>
        <FastImage source={genderImgSource} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const containerSize = 78;

const styles = StyleSheet.create({
  container: {
    ...circulo(containerSize),
    borderWidth: 3,
  },
  image: {
    height: containerSize * 0.6,
    width: containerSize * 0.6,
  },
});

export default PlayerGender;
