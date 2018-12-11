import React from "react";
import { Flex, Box } from 'rebass';


export default class App extends React.Component {
  render() {
    return (
      <Flex is="a" alignItems="center" css={{ cursor: 'pointer' }}>
        <Box css={{ border: '1px solid red' }} p={3}>Test</Box>
      </Flex>
    );
  }
}
