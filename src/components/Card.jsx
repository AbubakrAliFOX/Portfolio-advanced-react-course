import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardDisplay = ({ title, description, imageSrc }) => {
  return (
    <Card maxW="sm" borderRadius="25px">
      <CardBody>
        <Image h="500px" src={imageSrc} borderRadius="25px" />
        <Heading mt="16px">{title}</Heading>
        <Text my="16px">{description}</Text>
        <Text display={'inline'} mr="10px" >
          <b mr="50px">Show More</b>
        </Text>
        <FontAwesomeIcon  icon={faArrowRight} size="1x" />
      </CardBody>
    </Card>
  );
};

export default CardDisplay;
