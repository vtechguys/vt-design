import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex } from "../components/flex";
import { GlassesIcon, GlassesIconFilled } from "../components/icons";
import { useTooltip } from "../hooks/useTooltip";
import { css } from "../style";
import { theme } from "../theme";
import { Layout } from "./_layout";

const filled_glasses_class = "filled-glasses";
const outlined_glasses_class = "outlined-glasses";

const StyleSheet = {
  page: {
    "padding-x": 20
  },
  header: {
    minHeight: 64,
    "padding-y": 10,
    backgroundColor: "orange"
  },
  logoContainer: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: theme.colors.buttonPrimary,
    // by-default
    // outlined is visble
    [`& .${outlined_glasses_class}`]: {
      display: "block"
    },
    // filled is not visible
    [`& .${filled_glasses_class}`]: {
      display: "none"
    },
    // on hover
    // outlined is not visible
    [`&:hover .${outlined_glasses_class}`]: {
      display: "none"
    },
    // filled is visible
    [`&:hover .${filled_glasses_class}`]: {
      display: "block"
    }
  },
  navLinks: {
    "margin-x": 8
  },
  main: {
    "padding-y": 32
  }
};

function Page() {
  return (
    <Layout>
      <Flex
        container
        item
        span={12}
        justifyContent="space-between"
        alignItems="center"
        css={[StyleSheet.page, StyleSheet.header]}
      >
        <Link to="/" className={css(StyleSheet.logoContainer)}>
          <GlassesIcon size="large" unsafeClassName={outlined_glasses_class} />
          <GlassesIconFilled
            size="large"
            unsafeClassName={filled_glasses_class}
          />
        </Link>
        <Flex flexGrow={1}>
          <Flex container justifyContent="flex-end">
            <Link to="/about" className={css(StyleSheet.navLinks)}>
              About
            </Link>
            <Link to="/account" className={css(StyleSheet.navLinks)}>
              Account
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        container
        item
        span={12}
        flexGrow={1}
        css={[StyleSheet.page, StyleSheet.main]}
      ></Flex>
    </Layout>
  );
}

export default Page;
