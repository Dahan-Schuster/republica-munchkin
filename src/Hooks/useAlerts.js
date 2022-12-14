import { useContext } from "react";
import AlertContext from "../Contexts/AlertContext";

function useAlerts() {
	const alertContext = useContext(AlertContext);

	if (!alertContext) {
		throw new Error('useAlerts must be used within an AlertProvider');
	}

	return alertContext;
}

export default useAlerts;