import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import { GoogleGenAI } from "./googleGenAI";
import { systemInstruction, generationConfig } from "./config";
import { DietForm } from "@/components/DietInput";
import { z } from "zod";

const ResponseSchema = z
    .object({
        mealName: z.string(),
        mealDetails: z.string(),
        calories: z.number(),
        protein: z.number(),
        carbs: z.number(),
        fats: z.number(),
    })
    .array();
export type DietResponse = z.infer<typeof ResponseSchema>;

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
        const result: DietResponse = this.parseResponse(response);
        return result;
    }

    private getPrompt(data: DietForm) {
        let prompt = `Calories: ${data.calories},
        Protein: ${data.protein},
        Carbs: ${data.carbs},
        Fats: ${data.fats},
        Total meals : ${data.mealCount}
        Diet type: ${data.dietType},`;

        if (data.additionalDetails) {
            prompt += `Additional details: ${data.additionalDetails}`;
        }

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

    private parseResponse(data: string) {
        const regex = /```json(.*?)```/s;
        const match = data.match(regex);
        if (match) {
            let result = JSON.parse(match[1]);
            result = ResponseSchema.parse(result);
            return result;
        }
        return "";
    }
}
