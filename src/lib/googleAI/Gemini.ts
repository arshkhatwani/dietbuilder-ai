import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import { GoogleGenAI } from "./GoogleGenAI";
import { systemInstruction, generationConfig } from "./config";
import { DietForm } from "@/components/DietInput";

export class Gemini {
    private static instance: Gemini;
    private genAI: GoogleGenerativeAI;
    private model: GenerativeModel;

    private constructor() {
        this.genAI = GoogleGenAI.getInstance().getGenAI();
        this.model = this.genAI.getGenerativeModel({
            model: "gemini-1.5-pro",
            systemInstruction,
        });
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Gemini();
        }
        return this.instance;
    }

    public async generateDiet(data: DietForm) {
        const prompt = this.getPrompt(data);
        const response = await this.generateResponse(prompt);
        console.log(response);
    }

    private getPrompt(data: DietForm) {
        const prompt = `Calories: ${data.calories},
        Protein: ${data.protein},
        Carbs: ${data.carbs},
        Fats: ${data.fats},
        Total meals : ${data.mealCount}
        Diet type: ${data.dietType},`;
        return prompt;
    }

    private async generateResponse(prompt: string) {
        const chatSession = this.model.startChat({
            generationConfig,
            history: [],
        });
        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    }
}
