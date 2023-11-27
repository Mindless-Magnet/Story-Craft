# Story-Craft

## About

Story Craft is a story generation app made for children. We use various Generative AI tools to make this possible. We generate stories based on your text or image prompts. We also generate images related to the story. We also make sure that all our stories are child friendly and includes morals for the child's growth.

## How it works

Our app employs GPT-3.5 for crafting compelling stories, Stability AI for generating images, Cocqui for text-to-speech functionality, and Salesforce for image captioning. This synergy of technologies aims to provide a straightforward yet immersive storytelling experience for children, combining advanced narrative generation, visual elements, voice synthesis, and contextual image understanding. This integration ensures a seamless and enriching platform, fostering both creativity and learning.

## Why Story-Craft

In a world saturated with mindless scrolling and content overload, Story Craft stands out as a beacon of meaningful engagement for kids. Rather than succumbing to endless streams of digital noise, our app offers a purposeful escape into a realm of captivating storytelling. With GPT-3.5 crafting enriching narratives, Stability AI providing visually stimulating images, Cocqui lending natural voices, and Salesforce adding insightful image captions, Story Craft becomes a curated space for imaginative exploration. It empowers kids to shift from passive consumption to active participation, sparking creativity and instilling valuable lessons in a way that resonates beyond the screen. Choose Story Craft for a mindful and transformative digital experience.

## Installing python dependencies (preferably use an environment)

```console
pip install -r requirements.txt
```

## Add you Hugging face api key and Open ai key in below file

```console
backend-main/app/dao/.env
```

## Front-End ( React ) Terminal 1

```console
cd Story_Craft
npm install
npm start
```

## Backend ( FastAPI ) Terminal 2

```console
uvicorn backend-main.app.main:app --reload
```
