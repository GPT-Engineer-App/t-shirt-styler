import React, { useState } from "react";
import { Box, Button, VStack, HStack, Image, Text, Select, Input, useToast } from "@chakra-ui/react";
import { FaTshirt, FaPaintBrush, FaSave } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [tshirtColor, setTshirtColor] = useState("white");
  const [design, setDesign] = useState("");
  const [text, setText] = useState("");

  const saveDesign = () => {
    toast({
      title: "Design saved!",
      description: "Your custom T-shirt design has been saved.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch" p={5}>
      <HStack justifyContent="center">
        <Box boxSize="sm" p={4} bg={tshirtColor} borderRadius="md" position="relative">
          <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0fGVufDB8fHx8MTcwOTIyNTM5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="T-shirt" />
          {design && <Image src={design} alt="T-shirt design" maxWidth="100%" maxHeight="100%" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" />}
          {text && (
            <Text position="absolute" bottom="20%" left="50%" transform="translateX(-50%)" fontWeight="bold" color={tshirtColor === "black" ? "white" : "black"}>
              {text}
            </Text>
          )}
        </Box>
      </HStack>
      <HStack justifyContent="space-between">
        <Select placeholder="Select color" onChange={(e) => setTshirtColor(e.target.value)}>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="black">Black</option>
        </Select>
        <Input placeholder="Add text" value={text} onChange={(e) => setText(e.target.value)} />
        <Button leftIcon={<FaPaintBrush />} onClick={() => setDesign('https://images.unsplash.com/photo-1621951753015-740c699ab970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0JTIwZGVzaWdufGVufDB8fHx8MTcwOTIyNTM5Mnww&ixlib=rb-4.0.3&q=80&w=1080')}>
          Add design
        </Button>
        <Button colorScheme="blue" leftIcon={<FaSave />} onClick={saveDesign}>
          Save Design
        </Button>
      </HStack>
    </VStack>
  );
};

export default Index;
