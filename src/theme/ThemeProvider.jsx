import { useLayoutEffect, memo } from "react";
import { define_css_var, globalCSS, lookup_css_var } from "../style";
import { createReactContextStore } from "../utils";
import { PalleteTokens, pallete } from "./pallete";
import { SizeTokens } from "./size";

const light_css = {
  'body[data-theme="light"]': {
    [define_css_var("text-on-color")]: pallete.misc.white,
    [define_css_var("button-primary")]: pallete.blue[60],
    [define_css_var("button-secondary")]: pallete.gray[80],
    [define_css_var("button-tertiary")]: pallete.blue[60],
    [define_css_var("link-primary")]: pallete.blue[60],
    [define_css_var("danger-primary")]: pallete.red[60],
    [define_css_var("danger-secondary")]: pallete.red[60]
  }
};

const dark_css = {
  'body[data-theme="dark"]': {
    [define_css_var("text-on-color")]: pallete.misc.white,
    [define_css_var("button-primary")]: pallete.blue[60],
    [define_css_var("button-secondary")]: pallete.gray[60],
    [define_css_var("button-tertiary")]: pallete.red[60],
    [define_css_var("link-primary")]: pallete.blue[50],
    [define_css_var("danger-primary")]: pallete.red[60],
    [define_css_var("danger-secondary")]: pallete.red[50]
  }
};

export const theme = {
  colors: {
    transparent: "transparent",
    background: "#fff",
    textOnColor: lookup_css_var(define_css_var("text-on-color")),
    buttonPrimary: lookup_css_var(define_css_var("button-primary")),
    buttonSecondary: lookup_css_var(define_css_var("button-secondary")),
    buttonTertiary: lookup_css_var(define_css_var("button-tertiary")),
    linkPrimary: lookup_css_var(define_css_var("link-primary")),
    dangerPrimary: lookup_css_var(define_css_var("danger-primary")),
    dangerSecondary: lookup_css_var(define_css_var("danger-secondary"))
  }
};

const LightThemeTokens = memo(() => {
  globalCSS(light_css);
  return null;
});

const DarkThemeTokens = memo(() => {
  globalCSS(dark_css);
  return null;
});

export const toggleTheme = () => ({ type: "toggle" });

const themeReducer = (state, action) =>
  action.type === "toggle" ? (state === "light" ? "dark" : "light") : state;

const {
  Provider,
  useState: useThemeValue,
  useDispatch: useThemeDispatch
} = createReactContextStore("Theme", themeReducer);

function ThemeSyncer({ children }) {
  const theme = useThemeValue();
  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return <>{children}</>;
}

function ThemeProvider({ defaultTheme, children }) {
  return (
    <Provider value={defaultTheme}>
      <ThemeSyncer>
        <LightThemeTokens />
        <DarkThemeTokens />
        <PalleteTokens />
        {children}
      </ThemeSyncer>
    </Provider>
  );
}

export { ThemeProvider, useThemeValue, useThemeDispatch };
