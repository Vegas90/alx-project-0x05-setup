Objectives: This image generator app uses GPT-4 with Image Generation to generate images based on user prompt. To achieve this, we need to generate an API KEY. Watch the following video to help you generate your API KEY. This key needs to be private and stored outside of your code.

Instructions:

Duplicate the project alx-project-0x08 to alx-project-0x09
Create a file .env.local under the root directory.
It is important for this file to begin with a dot (.)
The content of your env file should be as follows:
NEXT_PUBLIC_GPT_API_KEY="API_KEY_GOES_HERE"
We will discuss more on API Keys in the coming days. Modify your the handleGenerateImage function in your Home component (pages/index.tsx) to look like this
 const handleGenerateImage = async () => {
    console.log("Generating Image")
    console.log(process.env.NEXT_PUBLIC_GPT_API_KEY)
  };
Save and close your files
Run npm run dev -- -p 3000 from the terminal
From a tab in your browser type http://localhost:3000 to see the changes made.

Note: You need to open the dev-tools -> console (tab) to see the effect when you click on the “Generate Image” Button