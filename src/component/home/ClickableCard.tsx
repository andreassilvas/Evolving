import { SimpleGrid } from "@chakra-ui/react";
import CardTemplate from "./CardTemplate";
import { useTranslation } from "react-i18next";
import ImagesMap from "./ImagesMap";

const ProjectsCard = () => {
  //English and French translation.
  const { t } = useTranslation();

  return (
    //Using chakra UI components.
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(3,minmax(300px, 1fr))"
      gap={10}
    >
      <CardTemplate
        //Access to cards object properties
        footer={t("cards.professionalProjects")}
        body={t("cards.professionalDescription")}
      >
        <ImagesMap imageId={1} />
      </CardTemplate>

      <CardTemplate
        footer={t("cards.professionalDOM")}
        body={t("cards.professionalDescriptionDOM")}
      >
        <ImagesMap imageId={2} />
      </CardTemplate>

      <CardTemplate
        footer={t("cards.personalProjects")}
        body={t("cards.personalDescription")}
      >
        <ImagesMap imageId={3} />
      </CardTemplate>
    </SimpleGrid>
  );
};

export default ProjectsCard;
