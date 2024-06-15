"use server";

import { DietForm } from "@/components/DietInput";
import { Gemini } from "@/lib/googleAI/Gemini";

export async function generateDiet(data: DietForm) {
    try {
        const gemini = Gemini.getInstance();
        await gemini.generateDiet(data);
    } catch (error) {
        console.log(error);
    }
}
