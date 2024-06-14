import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_GOOGLE_AI_API_KEY as string;

export class GoogleGenAI {
    private static instance: GoogleGenAI;
    private genAI: GoogleGenerativeAI;

    private constructor() {
        this.genAI = new GoogleGenerativeAI(apiKey);
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new GoogleGenAI();
        }
        return this.instance;
    }

    public getGenAI() {
        return this.genAI;
    }
}
