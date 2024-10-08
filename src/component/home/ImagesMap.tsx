import { useTranslation } from "react-i18next";
import { ImageProps, Image } from "@chakra-ui/react";
import images from "../../imagesStore";

interface ImagesStoreProps {
  imageId: number;
}

const ImagesMap = ({ imageId }: ImagesStoreProps) => {
  const { t } = useTranslation();
  //Access to images objects properties using key
  const imagesStoreMap: { [key: number]: ImageProps } = {
    1: { src: images.professionalProjects, alt: `${t("cards.projectAlt")}` },
    2: { src: images.professionalCustm, alt: `${t("cards.customAlt")}` },
    3: { src: images.personalProject, alt: `${t("cards.personalAlt")}` },
  };

  //Using Chakra UI component
  return <Image {...imagesStoreMap[imageId]} borderRadius="lg" />;
};

export default ImagesMap;
