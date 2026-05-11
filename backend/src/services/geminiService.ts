import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const refactorCode = async (code: string, language: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = `
      You are a world-class software engineer. Refactor the following ${language} code to be more efficient, readable, and follow best practices.
      If the code is already perfect, explain why.
      Return the response in JSON format:
      {
        "refactoredCode": "...",
        "explanation": "...",
        "improvements": ["...", "..."]
      }
      
      Code to refactor:
      ${code}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean the response if it contains markdown code blocks
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Invalid response from AI');
  } catch (error) {
    console.error('Error in refactorCode:', error);
    throw error;
  }
};
