import { useContext } from "react";
import GameContext from "../Contexts/GameContext";

function useGame() {
	const gameContext = useContext(GameContext);

	if (!gameContext) {
		throw new Error('useGame must be used within an GameProvider');
	}

	return gameContext;
}

export default useGame;
