import { Heading, HStack, Image, Text, VStack, Card,CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardDisplay = ({ title, description, imageSrc }) => {
  return (
    <Card maxW="sm">
      <CardBody>
      <Image maxH="500px" src={imageSrc} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      </CardBody>
    </Card>
  );
};

export default CardDisplay;
