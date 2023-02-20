import { StyleSheet } from "react-native";

import globalStyles, { vw } from '../../../core/utils/styles'

export const frameWidth = vw(90)
export const frameHeight = frameWidth * 0.21

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: frameWidth,
    height: frameHeight,
    position: 'relative',
    justifyContent: 'center',
		marginTop: 15,
  },
  frame: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: frameWidth,
    height: frameHeight,
  },
  content: {
    height: frameHeight - 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
	avatarSection: {
		minWidth: '20%',
		marginRight: 15,
	},
	name: {
		...globalStyles.text,
		fontSize: 22,
	}
});

export default styles;
