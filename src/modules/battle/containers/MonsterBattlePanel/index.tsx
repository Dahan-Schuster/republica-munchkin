import React from "react";
import { StyleSheet, View } from "react-native";

import styles, { frameHeight, frameWidth } from "./styles";
import { useBattle } from "../../contexts/BattleContext";

// import Fighter from "./Fighter";
// import ChangePlayerMofifiers from "./ChangeModifiers";

// @ts-ignore
import BattleContainerMonster from "../../../../../assets/frames/BattleContainerMonster.svg";
import {Monster} from "../../definitions";

interface MonsterBattlePanelProps {
	monster: Monster;
}

/**
 * Battle panel for showing a monster's info
 */
const MonsterBattlePanel: React.FunctionComponent<
  MonsterBattlePanelProps
> = ({}) => {
  const { battleState } = useBattle();

  if (battleState === "void") return null;

  return (
    <View style={styles.container}>
      <BattleContainerMonster
        width={frameWidth}
        height={frameHeight}
        style={[StyleSheet.absoluteFillObject]}
      />
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
        </View>
      </View>
    </View>
  );
};

export default MonsterBattlePanel;
