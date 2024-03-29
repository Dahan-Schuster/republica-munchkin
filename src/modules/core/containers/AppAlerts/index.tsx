import { Fragment } from "react";

import CustomAlert from "../../components/CustomAlert";

import useAlerts from "../../hooks/useAlerts";

export default function AppAlerts() {
  const { currentAlert, isAlertOpen, closeAlerts } = useAlerts();
  if (!isAlertOpen || !currentAlert) return null;

  const { name = "", customProps = {} } = currentAlert;
  return (
    <Fragment>
      {/* Loading */}
      {name === "loading" && <CustomAlert.Loading show={true} />}

      {/* Error */}
      {name === "error" && <CustomAlert.Error show={true} {...customProps} />}

      {/* Success */}
      {name === "success" && (
        <CustomAlert.Success show={true} {...customProps} />
      )}

      {/* Confirm */}
      {name === "confirm" && (
        <CustomAlert.Confirm
          show={true}
          {...customProps}
          onConfirmPressed={customProps.onConfirmPressed || closeAlerts}
          onCancelPressed={customProps.onCancelPressed || closeAlerts}
        />
      )}
    </Fragment>
  );
}

