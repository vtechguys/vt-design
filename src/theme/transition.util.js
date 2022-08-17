import { filter, isNil, join } from "lodash-es";

const duration = {
  nano: `${1 / 3}s`,
  micro: `${3 / 4}s`,
  short: `1s`
};

const animation = {};

export const transitions = {
  create(property, transition) {
    const dur = transition?.duration || duration.short;
    const anim = transition?.animation || duration.ease;
    const del = transition?.delay;

    return join(
      filter([
        property,
        !isNil(dur) ? dur : null,
        !isNil(anim) ? anim : null,
        !isNil(del) ? del : null
      ]),
      " "
    );
  },
  duration,
  animation,
  delay: duration
};
