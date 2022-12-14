import { useCallback, useMemo } from "react";
import Button from "../../Button";
import themes from "../../../Utils/themes";

const ChangeThemeBtn = ({ player, onChange = () => {} }) => {
  const [theme, currentThemeIndex] = useMemo(() => {
    const _theme = themes[player?.theme] || themes[0];
    const index = themes.findIndex((t) => t.name === _theme.name);

    return [_theme, index];
  }, [player?.theme]);

  const handleChangeTheme = useCallback(() => {
    let newThemeIndex;
    if (currentThemeIndex === themes.length - 1) {
      newThemeIndex = 0;
    } else {
      newThemeIndex = currentThemeIndex + 1;
    }

    onChange(newThemeIndex);
  }, [currentThemeIndex]);

  return (
    <Button
      type="hexagon"
      theme={theme?.name}
      icon="select-color"
      onPress={handleChangeTheme}
    />
  );
};

export default ChangeThemeBtn;
