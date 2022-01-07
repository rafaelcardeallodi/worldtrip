import { Flex, Image, Container } from "@chakra-ui/react";

export function Header(){
  return (
    <Flex 
      as="header"
      w="100%"
      h="6.25rem"
      align="center"
      bg="white"
    >
      <Flex
        mx="32"
        align="center"
        justify="center"
        w="100%"
      >
        <Image src='/images/logo.png' alt='Logo worldtrip' />
      </Flex>
    </Flex>
  );
}