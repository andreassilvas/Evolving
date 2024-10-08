import { Card, CardBody, Text, CardFooter, Box } from "@chakra-ui/react"; //Using chakra UI components.
import { ReactNode, useState } from "react";
import style from "./Card.module.css";

//Reusable component, use props to adapt according to need.
interface ClickableCardProps {
  body: string;
  children?: ReactNode;
  footer?: string;
}

const CardTeamplate = ({ body, children, footer }: ClickableCardProps) => {
  const [isFlipped, setFlipped] = useState(true);

  //as state in react is asynchronous with this function we ensure that the state changes instantaneously.
  const handleToggleFlip = () => setFlipped((isFlipped) => !isFlipped);

  const rotateY = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";

  return (
    //Using chakra UI components.
    <Box
      onClick={handleToggleFlip}
      className={style.innerCard}
      style={{ transform: rotateY }}
    >
      <Card
        className={style.back}
        maxW="md"
        align="center"
        height="420px"
        py={10}
      >
        <CardBody>{children}</CardBody>
        {footer && (
          <CardFooter py={0}>
            <Text color="pink.400" fontWeight="bold">
              {footer}
            </Text>
          </CardFooter>
        )}
      </Card>
      <Card
        className={style.front}
        maxW="md"
        align="center"
        height="420px"
        py={10}
      >
        <CardBody borderRadius="15" margin={3}>
          <Text>{body}</Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CardTeamplate;
