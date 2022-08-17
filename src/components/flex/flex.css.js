import { unitPercent, percent } from "../../style";

export const flexClasses = {
  root: "ui-c-flex",
  container: "ui-c-flex--container",
  item: "ui-c-flex--item"
};

export const containerStyles = {
  boxSizing: "border-box",
  display: "flex",
  width: "100%",
  flexDirection: "row",
  flexBasis: "100%",
  flexWrap: "wrap"
};

export const itemStyles = {
  boxSizing: "border-box",
  flexGrow: 0
};

export const spanStyles = {
  1: {
    maxWidth: unitPercent(percent(1, 12)),
    flexBasis: unitPercent(percent(1, 12))
  },
  2: {
    maxWidth: unitPercent(percent(2, 12)),
    flexBasis: unitPercent(percent(2, 12))
  },
  3: {
    maxWidth: unitPercent(percent(3, 12)),
    flexBasis: unitPercent(percent(3, 12))
  },
  4: {
    maxWidth: unitPercent(percent(4, 12)),
    flexBasis: unitPercent(percent(4, 12))
  },
  5: {
    maxWidth: unitPercent(percent(5, 12)),
    flexBasis: unitPercent(percent(5, 12))
  },
  6: {
    maxWidth: unitPercent(percent(6, 12)),
    flexBasis: unitPercent(percent(6, 12))
  },
  7: {
    maxWidth: unitPercent(percent(7, 12)),
    flexBasis: unitPercent(percent(7, 12))
  },
  8: {
    maxWidth: unitPercent(percent(8, 12)),
    flexBasis: unitPercent(percent(8, 12))
  },
  9: {
    maxWidth: unitPercent(percent(9, 12)),
    flexBasis: unitPercent(percent(9, 12))
  },
  10: {
    maxWidth: unitPercent(percent(10, 12)),
    flexBasis: unitPercent(percent(10, 12))
  },
  11: {
    maxWidth: unitPercent(percent(11, 12)),
    flexBasis: unitPercent(percent(11, 12))
  },
  12: {
    maxWidth: unitPercent(percent(12, 12)),
    flexBasis: unitPercent(percent(12, 12))
  }
};

export const skipStyles = {
  1: {
    marginLeft: unitPercent(percent(1, 12))
  },
  2: {
    marginLeft: unitPercent(percent(2, 12))
  },
  3: {
    marginLeft: unitPercent(percent(3, 12))
  },
  4: {
    marginLeft: unitPercent(percent(4, 12))
  },
  5: {
    marginLeft: unitPercent(percent(5, 12))
  },
  6: {
    marginLeft: unitPercent(percent(6, 12))
  },
  7: {
    marginLeft: unitPercent(percent(7, 12))
  },
  8: {
    marginLeft: unitPercent(percent(8, 12))
  },
  9: {
    marginLeft: unitPercent(percent(9, 12))
  },
  10: {
    marginLeft: unitPercent(percent(10, 12))
  },
  11: {
    marginLeft: unitPercent(percent(11, 12))
  }
};
