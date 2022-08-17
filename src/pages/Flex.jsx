import { Flex } from "../components/flex";
import { Layout } from "./_layout";

export default function Page() {
  return (
    <Layout>
      <Flex item span={{ xs: 12, sm: 10, md: 8 }}>
        <Flex container>
          <Flex item flexGrow={1}>
            <h1>Main</h1>
          </Flex>
          <Flex item>Nav</Flex>
        </Flex>
      </Flex>
      <Flex item>
        <Flex container item>
          item
        </Flex>
      </Flex>
    </Layout>
  );
}
