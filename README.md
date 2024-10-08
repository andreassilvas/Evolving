# Card Flipping App

- A dynamic React app with reusable card components, language translation support, and Chakra UI integration. The app allows users to toggle between English and French, dynamically display content on flipping cards, and map images based on predefined IDs.

- Introduction
  This project is a React-based web app that uses Chakra UI components to create an interactive experience. It features dynamically flipping cards, image mapping, and multi-language support through react-i18next. This app is designed to be reusable and customizable, making it easy to adapt to different use cases.

# Features

- Reusable Card Component: A clickable, flipping card with customizable content.
- Language Support: Toggle between English and French using a language selector.
- Chakra UI: All UI components are styled with Chakra UI for easy customization.
- Dynamic Image Mapping: Images are displayed dynamically based on a given ID.
- Interactive UI: Smooth animations for card flipping, implemented using CSS and Chakra UI.

# To set up this project locally, follow these steps:

Prerequisites

- Node.js
- npm

# Steps

1. Clone the repository:

   - git clone https://github.com/andreassilvas/Evolving.git

2. Navigate to the project directory:

   - cd your-app

3. Install dependencies:

   - npm install

4. Run the development server:

   - npm run start
   - npm run dev if using vite

# Components

    1. CardTemplate
          A reusable card component with a flip animation. It accepts body, footer, and children as props.

        ```jsx
        <CardTemplate
          body="Some project description"
          footer="Project Footer"
        >
          <ImagesMap imageId={1} />
        </CardTemplate>

        ```

    2. ProjectsCard
          A grid layout displaying multiple card components with content translated via react-i18next.

      ```jsx
        <SimpleGrid>
          <CardTemplate body={t("cards.professionalProjects")} footer={t("cards.footer")} />
        </SimpleGrid>
      ```

      3. ImagesMap
          This component dynamically renders images based on the imageId passed as a prop. It uses Chakra UI's Image component for displaying the images.

      ```jsx

        <ImagesMap imageId={1} />

      ```
      4. LanguageSelector
          A button that allows users to switch between English and French languages.

      ```jsx

        <LanguageSelector />

      ```

      # Translation
        This project uses react-i18next for language translations. The translations are stored in JSON files in public/locales/en/translation.json and public/locales/fr/translation.json. The useTranslation hook is used to access translation strings.

        ```jsx
        const { t } = useTranslation();
        <Text>{t("cards.projectDescription")}</Text>

        ```

      # Image Mapping
        The ImagesMap component maps imageId to specific images defined in imagesStore. Each image is dynamically rendered with an alt attribute for accessibility.

        ```jsx
        const imagesStoreMap = {
          1: { src: images.professionalProjects, alt: "Professional project" },
          2: { src: images.personalProject, alt: "Personal project" },
        };

        ```
