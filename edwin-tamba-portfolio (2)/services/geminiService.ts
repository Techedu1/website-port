import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const initializeChat = () => {
  // Use process.env.API_KEY directly as required by guidelines.
  // We assume the environment variable is valid and pre-configured.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  chatSession = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      // maxOutputTokens removed to avoid conflicts with thinkingBudget as per guidelines
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    try {
      initializeChat();
    } catch (error) {
      console.error("Failed to initialize chat:", error);
      return "I'm sorry, I'm not correctly configured to chat right now. Please check the API configuration.";
    }
  }
  
  if (!chatSession) {
    return "I'm sorry, I'm not correctly configured to chat right now. Please check the API configuration.";
  }
  
  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};