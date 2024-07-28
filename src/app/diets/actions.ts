"use server";

import { DietForm } from "@/components/DietInput";
import { DietResponse, Gemini } from "@/lib/googleAI/gemini";
import { createClient } from "@/lib/supabase/server";

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

export async function saveDiet(dietInput: DietForm, dietOutput: DietResponse) {
    try {
        const supabase = createClient();
        const { data } = await supabase.auth.getUser();
        const diet = { input: dietInput, output: dietOutput };

        const res = await supabase.from("userDiets").insert({
            userId: data.user?.id,
            diet: diet,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
}
