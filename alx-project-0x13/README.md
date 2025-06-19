 Our code can be made much cleaner and better by writing our own custom hooks. In our application we have a function that makes an API call to our endpoint (api/generate-image). But also, we can have other components that can be used to make a call to other api endpoints. So we can extract the function (handleGenerateImage) into a custom hook. Which will make our code much cleaner, easier to maintain and also reusable.


## Instructions:

Duplicate the project alx-project-0x11 to alx-project-0x12
Create a hooks directory under the root directory
Create your hook using the right naming convention - prepend the name of the file with “use”
In our case useFetchData.ts
Replace the content of useFetchData.ts with the follow: