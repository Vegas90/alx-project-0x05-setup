
import React from "react";
// Import the ImageCard component to display the generated image
import ImageCard from "../components/common/ImageCard";

// Import the interface for image props to type the state
import { ImageProps } from "../interfaces";

// Import the useState hook to manage local state
import { useState } from "react";

const Home: React.FC = () => {
  // State to store the user's input prompt
  const [prompt, setPrompt] = useState<string>("");

  // State to store the image URL of a generated image
  const [imageUrl, setImageUrl] = useState<string>("");

  // State to store a list of generated images (as an array of ImageProps)
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);

  // State to track whether the image is currently being generated (for loading spinner or button text)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function that will be triggered when the "Generate Image" button is clicked
  const handleGenerateImage = async () => {
    console.log("Generating Images");
    // Logic to call image generation API will be added here
  };

  return (
    // Container with padding and vertical alignment
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        {/* App title */}
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>

        {/* Subtitle or description */}
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        {/* Input and Button Section */}
        <div className="w-full max-w-md">
          {/* Input field for the user to type a prompt */}
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)} // Update prompt as user types
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />

          {/* Button to trigger image generation */}
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {/* You can uncomment this to show loading feedback */}
            {/* { isLoading ? "Loading..." : "Generate Image" } */}
            Generate Image
          </button>
        </div>

        {/* If an image URL exists, show the ImageCard component */}
        {imageUrl && (
          <ImageCard
            action={() => setImageUrl(imageUrl)} // Action passed to the ImageCard (could be used to remove or replace image)
            imageUrl={imageUrl}                  // The image to display
            prompt={prompt}                      // The prompt used to generate it
          />
        )}
      </div>
    </div>
  );
};

export default Home;
