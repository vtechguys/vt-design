import { Flex } from "../components/flex";
import { merge_css_struct } from "../style";
import { viewport_size } from "../theme";

const styles = {
  page: {
    width: viewport_size.width,
    height: viewport_size.height
  }
};

export function Layout(props) {
  return <Flex {...props} css={merge_css_struct(styles.page, props.css)} />;
}
