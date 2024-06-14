import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import { GoogleGenAI } from "./GoogleGenAI";
import { systemInstruction, generationConfig } from "./config";

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

    public async generateDiet(data: any) {
        const chatSession = this.model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
        console.log(result.response.text());
    }
}
