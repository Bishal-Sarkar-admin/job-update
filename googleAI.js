const { GoogleGenerativeAI } = require("@google/generative-ai");

// Create a reusable function
const googleAI = async (apiKey, prompt, modelName = "gemini-2.0-flash-exp") => {
  try {
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: modelName });

    // Generate content using the prompt
    const result = await model.generateContent(prompt);

    // Return the response text
    return result.response.text();
  } catch (error) {
    // Handle errors and return an error message
    console.error("Error using Google Generative AI:", error);
    throw new Error(
      "Failed to generate content. Please check the input and API key."
    );
  }
};

// Export the function for use in other files
module.exports = googleAI;
