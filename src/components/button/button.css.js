import { theme } from "../../theme";

export const buttonClasses = {
  button: "ui-button",
  icon: "ui-button__icon"
};

export const variantStyles = {
  primary: {
    color: theme.colors.textOnColor,
    backgroundColor: theme.colors.buttonPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.transparent
  },
  secondary: {
    color: theme.colors.textOnColor,
    backgroundColor: theme.colors.buttonSecondary,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.transparent
  },
  tertiary: {
    color: theme.colors.buttonTertiary,
    backgroundColor: theme.colors.transparent,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.buttonTertiary
  },
  ghost: {
    color: theme.colors.linkPrimary,
    backgroundColor: theme.colors.transparent,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.transparent
  },
  danger: {
    color: theme.colors.textOnColor,
    backgroundColor: theme.colors.dangerPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.transparent
  },
  "danger-tertiary": {
    color: theme.colors.dangerSecondary,
    backgroundColor: theme.colors.transparent,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.dangerSecondary,
    "&:hover": {
      color: theme.colors.textOnColor,
      backgroundColor: theme.colors.dangerPrimary
    },
    "&:active": {
      color: theme.colors.textOnColor,
      backgroundColor: "#750e13",
      borderColor: theme.colors.buttonPrimary
    },
    "&:focus": {
      borderColor: theme.colors.buttonPrimary,
      boxShadow: `inset 0 0 0 1px ${theme.colors.background},inset 0 0 0 2px ${theme.colors.buttonPrimary}`
    }
  },
  "danger-ghost": {
    color: theme.colors.dangerSecondary,
    backgroundColor: theme.colors.transparent,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.transparent,
    "&:hover": {
      color: theme.colors.textOnColor,
      backgroundColor: theme.colors.dangerPrimary
    },
    "&:active": {
      color: theme.colors.textOnColor,
      backgroundColor: "#750e13",
      borderColor: theme.colors.buttonPrimary
    },
    "&:focus": {
      borderColor: theme.colors.buttonPrimary,
      boxShadow: `inset 0 0 0 1px ${theme.colors.background},inset 0 0 0 2px ${theme.colors.buttonPrimary}`
    }
  }
};

export const disabledVariantStyles = {
  primary: {},
  secondary: {},
  tertiary: {},
  danger: {},
  ghost: {}
};

export const sizeStyles = {
  small: {
    "padding-x": 12,
    "padding-y": 3
  },
  medium: {
    "padding-x": 12,
    "padding-y": 8
  },
  large: {
    "padding-y": 10,
    "padding-x": 16
  },
  fullWidth: {
    width: "100%",
    height: "100%",
    "padding-x": 8,
    "padding-y": 12,
    fontSize: 14
  }
};

export const withIconStyles = {
  [`& .${buttonClasses.icon}`]: {
    marginLeft: 4,
    display: "inline-flex"
  }
};

// @Note: Keey in sync with vertical padding of the button sizes
export const iconStyles = {
  small: {
    "margin-y": (-1 * sizeStyles.small["padding-y"]) / 2
  },
  medium: {
    "margin-y": (-1 * sizeStyles.medium["padding-y"]) / 2
  },
  large: {
    "margin-y": (-1 * sizeStyles.large["padding-y"]) / 2
  },
  fullWidth: {
    "margin-y": (-1 * sizeStyles.fullWidth["padding-y"]) / 2
  }
};
