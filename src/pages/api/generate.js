
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const generateHandler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });  // Handling non-POST methods
    }

    try {
        
        const data = req.body;  // Directly access req.body.body
        console.log(data);
        
        console.log('Received data:', data);

        // Create a custom prompt using the received data
        

        // Ensure that the prompt is valid
        if (!data || data.length === 0) {
            return res.status(400).json({ message: 'Prompt is required and cannot be empty.' });
        }
       
        
        

        const prompt = `
Write an ad copy based on the following data:

Product: ${data.product}
Short Description: ${data.shortDescription}
Target Audience: ${data.targetAudience}
Key Features: ${data.keyFeatures}
Call to Action: ${data.callToAction}
Benefits: ${data.benefits}
Tone: ${data.tone}

The ad copy should be in Arabic, friendly in tone, and highlight the features, benefits, and encourage the target audience to act. Focus on how the product enhances their experience and solves their needs.
`;
        console.log(prompt);

        // Pass the custom prompt to the model and retrieve the output
        const result = await model.generateContent(prompt);
        console.log('Generated result:', result);
        // Assuming `result.response` is a string, we can directly use it.
        const output = result.response.text()
        console.log(output);
        // Send the LLM output as a server response object
        return res.status(200).json({ output });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Export the handler as the default function
export default generateHandler;
