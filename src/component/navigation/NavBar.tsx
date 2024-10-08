import { Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react";
import LanguageSelector from "./LanguageSelector";

const NavigationPages = () => {
  return (
    <Flex justifyContent="flex-end">
      <Breadcrumb pb={10}>
        <BreadcrumbItem placeContent="right">
          <LanguageSelector />
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

export default NavigationPages;
