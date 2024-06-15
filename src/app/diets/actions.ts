"use server";

import { DietForm } from "@/components/DietInput";
import { Gemini } from "@/lib/googleAI/gemini";

export async function generateDiet(data: DietForm) {
    try {
        const gemini = Gemini.getInstance();
        const response = await gemini.generateDiet(data);
        return response;
    } catch (error) {
        console.log(error);
        return [];
    }
}
